import { Button } from '../ui/Button'
import { manageAuth } from '@/actions/manage-auth'
import Link from 'next/link'
import { auth } from '@/lib/auth'

export const Header = async () => {
	const session = await auth()

	const redirectLink = session ? `/${session.user.profileId}` : '/criar'

	return (
		<header className='bg-background-primary border-border-primary fixed top-0 right-0 left-0 z-50 w-screen border border-b'>
			<div className='mx-auto flex max-w-7xl items-center justify-between py-10'>
				<Link href='/'>
					<div className='flex items-center gap-4'>
						<img src='/logo.svg' alt='ProjectInBio Logo' />

						<h3 className='text-2xl font-bold text-white'>ProjectInBio</h3>
					</div>
				</Link>

				<div className='flex items-center gap-4'>
					{session && (
						<Link href={redirectLink}>
							<Button>Minha Página</Button>
						</Link>
					)}

					<form action={manageAuth}>
						<Button>{session ? 'Sair' : 'Login'}</Button>
					</form>
				</div>
			</div>
		</header>
	)
}
