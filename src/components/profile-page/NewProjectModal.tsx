interface NewProjectModalProps {
	profileId: string
}

export const NewProjectModal = ({ profileId }: NewProjectModalProps) => {
	return (
		<div className='rounded bg-white p-4 shadow'>
			<h2 className='text-lg font-bold'>Modal Content</h2>
			<p>This is the content of the modal.</p>
		</div>
	)
}
