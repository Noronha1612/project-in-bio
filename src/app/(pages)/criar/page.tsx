import { Rocket } from 'lucide-react'
import { CreateLinkForm } from './create-link-form'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { getProfileData } from '@/server/getProfileData'

export default async function Create() {
	const session = await auth()
	const profile = await getProfileData(session?.user.profileId ?? '')

	if (profile) {
		redirect(`/${profile.id}`)
	}

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
