import { SiGithub, SiInstagram, SiX } from '@icons-pack/react-simple-icons'
import { Linkedin, Plus } from 'lucide-react'
import { Button } from '../ui/Button'

export const UserCard = () => {
	const icons = [
		{ Icon: SiGithub, name: 'github' },
		{ Icon: SiInstagram, name: 'instagram' },
		{ Icon: Linkedin, name: 'linkedin' },
		{ Icon: SiX, name: 'x' },
		{ Icon: Plus, name: 'plus' },
	]

	return (
		<div className='border-opacity-10 flex w-[348px] flex-col items-center gap-5 rounded-3xl bg-[#121212] p-5 text-white'>
			<div className='size-48'>
				<img
					src='https://github.com/Noronha1612.png'
					alt='User Avatar'
					className='h-full w-full rounded-full object-cover'
				/>
			</div>

			<div className='flex w-full flex-col gap-2'>
				<div className='flex items-center gap-2'>
					<h3 className='min-w-0 overflow-hidden text-3xl font-bold'>
						Gabriel Noronha
					</h3>
				</div>

				<p className='opacity-40'>
					Apaixonado por tecnologia e como ela cria tudo do zero com apenas
					algumas linhas de código.
				</p>
			</div>

			<div className='flex w-full flex-col gap-2'>
				<span className='text-xs font-medium uppercase'>Links</span>

				<div className='flex gap-3'>
					{icons.map(({ Icon, name }) => (
						<button
							key={name}
							className='cursor-pointer rounded-xl bg-[#1E1E1E] p-3 hover:bg-[#2E2E2E]'
						>
							<Icon />
						</button>
					))}
				</div>
			</div>
			<div className='flex h-[172px] w-full flex-col gap-3'>
				<div className='flex w-full flex-col items-center gap-3'>
					<Button fullWidth>Template SaaS - Compre Agora</Button>
					<button className='cursor-pointer rounded-xl bg-[#1E1E1E] p-3 hover:bg-[#2E2E2E]'>
						<Plus />
					</button>
				</div>
			</div>
		</div>
	)
}
