import { ProjectCard } from '@/components/commons/ProjectCard'
import { TotalVisits } from '@/components/commons/TotalVisits'
import { UserCard } from '@/components/commons/UserCard'
import { auth } from '@/lib/auth'
import { getProfileData } from '@/server/getProfileData'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { NewProject } from './NewProject'

const mockedProjects = [
	{
		clicks: 31,
		name: 'Recipe Finder',
		description: 'Discover and save your favorite recipes',
		image: '/project1.jpg',
	},
	{
		clicks: 45,
		name: 'Task Manager',
		description: 'Organize your daily tasks efficiently',
		image: '/project1.jpg',
	},
	{
		clicks: 28,
		name: 'Weather App',
		description: 'Real-time weather updates and forecasts',
		image: '/project1.jpg',
	},
	{
		clicks: 52,
		name: 'Budget Tracker',
		description: 'Manage your finances with ease',
		image: '/project1.jpg',
	},
	{
		clicks: 19,
		name: 'Fitness Tracker',
		description: 'Monitor your workouts and progress',
		image: '/project1.jpg',
	},
	{
		clicks: 37,
		name: 'Book Library',
		description: 'Digital library for your favorite books',
		image: '/project1.jpg',
	},
	{
		clicks: 41,
		name: 'Travel Planner',
		description: 'Plan your perfect trip itinerary',
		image: '/project1.jpg',
	},
	{
		clicks: 23,
		name: 'Language Learning',
		description: 'Master new languages interactively',
		image: '/project1.jpg',
	},
	{
		clicks: 34,
		name: 'Photo Gallery',
		description: 'Store and organize your memories',
		image: '/project1.jpg',
	},
]

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

	const isOwner = profileData.userId === session?.user?.id

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
				{mockedProjects.map((project) => (
					<ProjectCard key={project.name} {...project} />
				))}

				{isOwner && <NewProject />}
			</div>

			<div className='fixed right-1/2 bottom-4 w-min translate-x-1/2'>
				<TotalVisits />
			</div>
		</div>
	)
}
