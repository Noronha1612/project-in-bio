import { cn } from '@/lib/utils'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {}

export const Input = ({ className, ...props }: InputProps) => {
	return (
		<input
			{...props}
			className={cn(
				'bg-background-secondary placeholder:text-content-placeholder hover:border-border-secondary hover:text-content-body active:border-border-tertiary w-full rounded-xl border border-transparent p-3 text-white',
				className
			)}
		/>
	)
}
