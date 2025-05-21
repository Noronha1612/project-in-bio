'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/firebase'
import { projectSchema } from '@/schemas/projectSchema'
import { ZodError } from 'zod'
import { createProjectImage } from './create-project-image'
import { revalidatePath } from 'next/cache'

interface CreateProjectResponse {
	success: boolean
	error: string
}

export const createProject = async (
	profileId: string,
	_: CreateProjectResponse,
	body: FormData
) => {
	const session = await auth()

	if (!session?.user) {
		return { success: false, error: 'User must be authenticated' }
	}

	try {
		const payload = Array.from(body.entries()).reduce(
			(acc: Record<string, unknown>, [key, value]) => {
				acc[key] = value as string

				return acc
			},
			{}
		)

		const parsedPayload = await projectSchema.parseAsync({
			profileId,
			title: payload.title,
			description: payload.description,
			url: payload.url,
			image: payload.image,
		})

		const imageUrl = await createProjectImage(parsedPayload.image)

		await db.collection('projects').add({
			...parsedPayload,
			image: imageUrl,
		})

		revalidatePath(`/${profileId}`)

		return { success: true, error: '' }
	} catch (err) {
		console.log(err)

		if (err instanceof ZodError) {
			return { success: false, error: err.errors[0].message }
		}

		return { success: false, error: 'Failed to create project' }
	}
}
