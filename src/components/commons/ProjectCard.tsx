export const ProjectCard = () => {
	return (
		<div className='bg-background-secondary hover:border-border-secondary flex h-[132px] w-[430px] gap-5 rounded-[20px] border border-transparent p-3'>
			<div className='flex size-24 shrink-0 overflow-hidden rounded-md'>
				<img
					src='/project1.jpg'
					alt='Projeto 1'
					className='h-full w-full object-cover'
				/>
			</div>

			<div className='flex flex-col gap-2'>
				<span className='text-accent-green text-xs font-bold uppercase'>
					10 Cliques
				</span>

				<div className='flex flex-col'>
					<span className='font-bold text-white'>Projeto 1</span>

					<span className='text-content-body text-sm'>
						Descrição super detalhada do que o projeto faz
					</span>
				</div>
			</div>
		</div>
	)
}
