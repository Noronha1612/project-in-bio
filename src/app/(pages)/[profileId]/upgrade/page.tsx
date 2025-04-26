import { Button } from '@/components/ui/Button'

export default function Upgrade() {
	return (
		<div className='min-h-full-h-no-header flex flex-col items-center justify-center gap-4'>
			<h2 className='text-2xl font-bold'>Escolha o plano</h2>

			<div className='flex gap-4'>
				<Button>R$ 9,90 / mês</Button>
				<Button>R$ 99,90 Vitalício</Button>
			</div>
		</div>
	)
}
