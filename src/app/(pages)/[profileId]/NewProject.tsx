import { NewProjectModal } from '@/components/profile-page/NewProjectModal'
import { ModalTrigger } from '@/components/ui/Modal'
import { Plus } from 'lucide-react'

interface NewProjectProps {
	profileId: string
}

export const NewProject = ({ profileId }: NewProjectProps) => {
	return (
		<ModalTrigger content={<NewProjectModal profileId={profileId} />}>
			<button className='bg-background-secondary flex h-[132px] w-[340px] cursor-pointer items-center justify-center gap-2 rounded-[20px] border-dashed hover:border'>
				<Plus className='text-accent-green size-10' />

				<span>Novo projeto</span>
			</button>
		</ModalTrigger>
	)
}
