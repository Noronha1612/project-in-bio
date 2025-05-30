import { Rocket } from 'lucide-react'
import { CreateLinkForm } from './create-link-form'

export default function Create() {
	return (
		<div className='min-h-full-h-no-header mx-auto flex max-w-xl flex-col items-center justify-center gap-10'>
			<div className='flex items-center gap-4'>
				<h1 className='text-4xl font-bold text-white'>Escolha seu link</h1>

				<Rocket className='size-10' />
			</div>

			<CreateLinkForm />
		</div>
	)
}
