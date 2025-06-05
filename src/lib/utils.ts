import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import imageCompression, { Options } from 'browser-image-compression'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function sanitizeLink(link: string) {
	if (!link) return ''

	return link
		.replace(/\s/g, '')
		.replace(/[!@#$%^&*()_+\-=\[\]{};':"\\|,ˆ.<>\/?]+/, '')
		.toLocaleLowerCase()
}

export async function compressFiles(files: File[]) {
	const compressPromises = files.map(async (file) => {
		try {
			return await compressImage(file)
		} catch (err) {
			console.error('Error compressing file:', err)
			return null
		}
	})

	return (await Promise.all(compressPromises)).filter(
		(file) => file !== null
	) as File[]
}

export async function compressImage(file: File) {
	return new Promise<File>((resolve, reject) => {
		const options: Options = {
			maxSizeMB: 0.2, // 200kb
			maxWidthOrHeight: 900,
			useWebWorker: true,
			fileType: 'image/png',
		}

		imageCompression(file, options).then(resolve)
	})
}
