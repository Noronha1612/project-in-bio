'use client'

import { cn } from '@/lib/utils'
import { Project } from '@/models/Project'
import Link from 'next/link'

type ProjectCardProps = {
	project: Project
	isOwner?: boolean
	clickable?: boolean
}

export const ProjectCard = ({
	project,
	isOwner = false,
	clickable = true,
}: ProjectCardProps) => {
	const { title, image, description, totalVisits, profileId, id, url } = project

	const formattedUrl = url.startsWith('http') ? url : `https://${url}`

	const handleClick = () => {
		console.log('Clicked')
	}

	return (
		<Link
			href={clickable ? formattedUrl : '#'}
			target='_blank'
			onClick={clickable ? handleClick : undefined}
		>
			<div
				className={cn(
					'bg-background-secondary flex h-[132px] w-[340px] gap-5 rounded-[20px] border border-transparent p-3',
					clickable && 'hover:border-border-secondary cursor-pointer'
				)}
			>
				<div className='flex size-24 shrink-0 overflow-hidden rounded-md'>
					<img src={image} alt={title} className='h-full w-full object-cover' />
				</div>

				<div className='flex flex-col gap-2'>
					{isOwner && (
						<span className='text-accent-green text-xs font-bold uppercase'>
							{totalVisits ?? 0} Cliques
						</span>
					)}

					<div className='flex flex-col'>
						<span className='font-bold text-white'>{title}</span>

						<span className='text-content-body text-sm'>{description}</span>
					</div>
				</div>
			</div>
		</Link>
	)
}
