import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Rocket } from 'lucide-react'

export default function Create() {
	return (
		<div className='min-h-full-h-no-header mx-auto flex max-w-xl flex-col items-center justify-center gap-10'>
			<div className='flex items-center gap-4'>
				<h1 className='text-4xl font-bold text-white'>Escolha seu link</h1>

				<Rocket className='size-10' />
			</div>

			<form action='' className='flex w-full items-center gap-2'>
				<span>projectinbio.com/</span>

				<Input />
				<Button className='w-[126px]'>Criar</Button>
			</form>

			<div>
				<span className='text-accent-pink'>Erro de exemplo</span>
			</div>
		</div>
	)
}
