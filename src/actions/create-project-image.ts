'use server'

import { storage } from '@/lib/firebase'
import { compressImage } from '@/lib/utils'

export const createProjectImage = async (image: File) => {
	const compressedImage = await compressImage(image)

	const buffer = Buffer.from(await compressedImage.arrayBuffer())
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
