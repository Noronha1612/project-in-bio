type ProjectCardProps = {
	clicks: number
	name: string
	description: string
	image: string
}

export const ProjectCard = ({
	clicks,
	name,
	description,
	image,
}: ProjectCardProps) => {
	return (
		<div className='bg-background-secondary hover:border-border-secondary flex h-[132px] w-[340px] cursor-pointer gap-5 rounded-[20px] border border-transparent p-3'>
			<div className='flex size-24 shrink-0 overflow-hidden rounded-md'>
				<img src={image} alt={name} className='h-full w-full object-cover' />
			</div>

			<div className='flex flex-col gap-2'>
				<span className='text-accent-green text-xs font-bold uppercase'>
					{clicks} Cliques
				</span>

				<div className='flex flex-col'>
					<span className='font-bold text-white'>{name}</span>

					<span className='text-content-body text-sm'>{description}</span>
				</div>
			</div>
		</div>
	)
}
