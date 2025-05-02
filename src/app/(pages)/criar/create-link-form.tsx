'use client'

import { createLink } from '@/actions/create-link'
import { verifyLink } from '@/actions/verifyLink'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { sanitizeLink } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const CreateLinkForm = () => {
	const router = useRouter()

	const [link, setLink] = useState('')
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLink(sanitizeLink(e.target.value))
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault()
			setIsLoading(true)

			// Handle link not empty
			if (!link) {
				throw new Error('Link inválido')
			}

			// Handle link already taken
			const isLinkTaken = await verifyLink(link)

			if (isLinkTaken) {
				throw new Error('Desculpe... O link já está em uso.')
			}

			// Create link
			const isLinkCreated = await createLink(link)

			if (!isLinkCreated) {
				throw new Error('Erro ao criar o perfil. Tente novamente.')
			}

			// Redirect to link
			router.push(`/${link}`)
		} catch (err: unknown) {
			if (err instanceof Error) {
				setError(err.message)
			}
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit} className='flex w-full items-center gap-2'>
				<span>projectinbio.com/</span>

				<Input value={link} onChange={handleLinkChange} />
				<Button className='w-[126px]' isLoading={isLoading}>
					Criar
				</Button>
			</form>

			<div>
				<span className='text-accent-pink'>{error}</span>
			</div>
		</>
	)
}
