import { FAQItem } from './faqItems'

export const FaqItem = ({ title, description }: FAQItem) => {
	return (
		<div className='border-border-primary bg-background-primary flex h-min w-[351px] flex-col gap-3 rounded-2xl border p-5'>
			<p className='font-bold text-white'>{title}</p>
			<p className='text-content-body'>{description}</p>
		</div>
	)
}
