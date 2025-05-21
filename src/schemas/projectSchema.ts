import console from 'console'
import { z } from 'zod'

const MAX_FILE_SIZE = 3 * 1024 * 1024

export const projectSchema = z.object(
	{
		profileId: z.string().min(1, { message: 'Envie um ID de perfil.' }),
		title: z.string().min(1, { message: 'Envie um título.' }),
		description: z.string().min(1, { message: 'Envie uma descrição.' }),
		url: z
			.string({ message: 'Envie uma URL válida.' })
			.url({ message: 'Invalid URL' }),
		image: z.custom<File>(
			(file) => {
				console.log(file)

				if (!(file instanceof File)) return false
				const isValidType = ['image/jpeg', 'image/png', 'image/webp'].includes(
					file.type
				)
				const isValidSize = file.size <= MAX_FILE_SIZE
				return isValidType && isValidSize
			},
			{
				message: 'File must be an image (JPEG, PNG, WEBP) and less than 3MB.',
			}
		),
	},
	{
		message: 'Há campos inválidos ou faltando.',
	}
)
