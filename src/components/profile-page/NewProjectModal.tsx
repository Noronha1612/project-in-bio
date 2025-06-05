'use client'

import { ArrowUpFromLine, Loader } from 'lucide-react'
import { Input } from '../ui/Input'
import { TextArea } from '../ui/TextArea'
import { Button } from '../ui/Button'
import { useActionState, useEffect, useState } from 'react'
import { createProject } from '@/actions/create-project'
import { useModalContext } from '../ui/Modal'

interface NewProjectModalProps {
	profileId: string
}

export const NewProjectModal = ({ profileId }: NewProjectModalProps) => {
	const [image, setImage] = useState('')
	const { onClose } = useModalContext()

	const [state, action, pending] = useActionState(
		createProject.bind(null, profileId),
		{
			error: '',
			success: false,
		}
	)

	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]

		if (file) {
			const imageURL = URL.createObjectURL(file)
			setImage(imageURL)
		}
	}

	useEffect(() => {
		setImage('')

		if (state.success) {
			onClose()
		}
	}, [state, onClose])

	return (
		<form
			action={action}
			className='bg-background-primary flex flex-col justify-between gap-10 rounded-[20px] p-8'
		>
			<p className='text-xl font-bold text-white'>Novo projeto</p>

			<div className='flex gap-10'>
				<div className='flex flex-col items-center gap-3 text-xs'>
					{image ? (
						<img
							src={image}
							alt='Preview'
							className='h-[100px] w-[100px] rounded-xl object-cover object-center'
						/>
					) : (
						// Placeholder for the image
						<div className='bg-background-tertiary h-[100px] w-[100px] overflow-hidden rounded-xl'>
							<label
								htmlFor='imageInput'
								className='flex h-full w-full cursor-pointer items-center justify-center'
							>
								100x100
							</label>
						</div>
					)}

					<label
						htmlFor='imageInput'
						className='flex cursor-pointer items-center gap-2 text-white'
					>
						<ArrowUpFromLine className='size-4' />
						<span className=''>Adicionar imagem</span>
					</label>

					<input
						type='file'
						id='imageInput'
						accept='image/*'
						className='cursor-pointer'
						name='image'
						onChange={handleImageChange}
					/>
				</div>

				<div className='flex w-[293px] flex-col gap-4'>
					<div className='flex flex-col gap-1'>
						<label htmlFor='project-name' className='font-bold text-white'>
							Título do projeto
						</label>

						<Input
							id='project-name'
							placeholder='Digite o nome do projeto'
							name='title'
						/>
					</div>

					<div className='flex flex-col gap-1'>
						<label
							htmlFor='project-description'
							className='font-bold text-white'
						>
							Descrição do projeto
						</label>

						<TextArea
							id='project-description'
							placeholder='Dê uma breve descrição do seu projeto'
							className='h-36'
							name='description'
						/>
					</div>

					<div className='flex flex-col gap-1'>
						<label htmlFor='project-url' className='font-bold text-white'>
							URL do projeto
						</label>
						<Input
							type='url'
							id='project-url'
							placeholder='Digite a URL do seu projeto aqui'
							name='url'
						/>
					</div>
				</div>
			</div>

			{state.error && (
				<div className='flex justify-end'>
					<p className='text-xs text-red-500'>{state.error}</p>
				</div>
			)}

			<div className='flex justify-end gap-4'>
				<button
					className='font-bold text-white'
					type='button'
					onClick={onClose}
				>
					Voltar
				</button>
				<Button disabled={pending} className='w-[148px]'>
					{pending ? <Loader className='size-4' /> : 'Criar projeto'}
				</Button>
			</div>
		</form>
	)
}
