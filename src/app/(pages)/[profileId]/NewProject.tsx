import { Plus } from 'lucide-react'

export const NewProject = () => {
	return (
		<button className='bg-background-secondary flex h-[132px] w-[340px] cursor-pointer items-center justify-center gap-2 rounded-[20px] border-dashed hover:border'>
			<Plus className='text-accent-green size-10' />

			<span>Novo projeto</span>
		</button>
	)
}
