import { ProjectCard } from '@/components/commons/ProjectCard'
import { TotalVisits } from '@/components/commons/TotalVisits'
import { UserCard } from '@/components/commons/UserCard'
import { auth } from '@/lib/auth'
import { getProfileData } from '@/server/getProfileData'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { NewProject } from './NewProject'

export default async function Profile({
	params,
}: {
	params: Promise<{ profileId: string }>
}) {
	const session = await auth()
	const { profileId } = await params

	const profileData = await getProfileData(profileId)

	if (!profileData) {
		return notFound()
	}

	console.log(profileData)

	const isOwner = profileData.userId === session?.user?.id
	const projects = profileData.projects || [] // Use projects from profileData

	return (
		<div className='min-h-full-h-no-header relative flex gap-12 overflow-hidden p-20 pb-24'>
			<div className='bg-background-tertiary fixed top-[128px] left-0 flex w-full items-center justify-center gap-1 py-2'>
				<span>Você está usando a versão trial.</span>

				<Link href={`${profileId}/upgrade`}>
					<button className='text-accent-green cursor-pointer font-bold hover:brightness-110'>
						Faça o upgrade agora!
					</button>
				</Link>
			</div>

			<div className='flex h-min w-1/2 justify-center'>
				<UserCard />
			</div>

			<div className='flex w-full flex-wrap content-start justify-center gap-4 overflow-y-auto'>
				{projects.map((project) => (
					<ProjectCard
						key={project.id}
						name={project.title}
						image={project.image}
						description={project.description}
						clicks={0}
					/>
				))}

				{isOwner && <NewProject profileId={profileId} />}
			</div>

			<div className='fixed right-1/2 bottom-4 w-min translate-x-1/2'>
				<TotalVisits />
			</div>
		</div>
	)
}
