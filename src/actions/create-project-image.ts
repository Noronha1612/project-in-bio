'use server'

import { storage } from '@/lib/firebase'

export const createProjectImage = async (image: File) => {
	const buffer = Buffer.from(await image.arrayBuffer())
	const fileName = `${Date.now()}-${image.name}`

	const fileRef = storage.file(fileName)

	await fileRef.save(buffer, {
		contentType: image.type,
		resumable: false,
	})

	await fileRef.makePublic()
	const publicUrl = `https://storage.googleapis.com/${storage.name}/${fileName}`

	return publicUrl
}
