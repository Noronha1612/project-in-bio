import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'primary' | 'secondary' | 'ghost'
	fullWidth?: boolean
	isLoading?: boolean
}

export const Button = ({
	children,
	className,
	variant = 'primary',
	fullWidth = false,
	isLoading = false,
	...props
}: PropsWithChildren<ButtonProps>) => {
	return (
		<button
			{...props}
			className={cn(
				'flex h-12 cursor-pointer items-center justify-center rounded-xl p-3 font-bold whitespace-nowrap text-white hover:opacity-95 disabled:opacity-70',
				fullWidth && 'w-full',
				variant === 'primary' && 'bg-accent-purple',
				variant === 'secondary' && 'bg-background-tertiary',
				variant === 'ghost' && 'border-border-primary',
				className
			)}
		>
			{isLoading ? <Loader2 className='size-4 animate-spin' /> : children}
		</button>
	)
}
