import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'primary' | 'secondary' | 'ghost'
	fullWidth?: boolean
}

export const Button = ({
	children,
	className,
	variant = 'primary',
	fullWidth = false,
	...props
}: PropsWithChildren<ButtonProps>) => {
	return (
		<button
			{...props}
			className={cn(
				'cursor-pointer rounded-xl p-3 font-bold whitespace-nowrap text-white hover:opacity-95 disabled:opacity-70',
				fullWidth && 'w-full',
				variant === 'primary' && 'bg-accent-purple',
				variant === 'secondary' && 'bg-background-tertiary',
				variant === 'ghost' && 'border-border-primary',
				className
			)}
		>
			{children}
		</button>
	)
}
