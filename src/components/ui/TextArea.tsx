import { cn } from '@/lib/utils'

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {}

export const TextArea = ({ className, ...props }: TextAreaProps) => {
	return (
		<textarea
			{...props}
			className={cn(
				'bg-background-secondary placeholder:text-content-placeholder hover:border-border-secondary hover:text-content-body active:border-border-tertiary w-full rounded-xl border border-transparent p-3 text-white',
				className
			)}
		/>
	)
}
