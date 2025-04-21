import { Button } from '../ui/Button'

export const Header = () => {
	return (
		<header className='absolute top-0 right-0 left-0 z-50 mx-auto flex max-w-7xl items-center justify-between py-10'>
			<div className='flex items-center gap-4'>
				<img src='/logo.svg' alt='ProjectInBio Logo' />

				<h3 className='text-2xl font-bold text-white'>ProjectInBio</h3>
			</div>

			<div className='flex items-center gap-4'>
				<Button>Minha Página</Button>
				<Button>Sair</Button>
			</div>
		</header>
	)
}
