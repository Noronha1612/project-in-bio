import { FAQ } from '@/components/landing-page/FAQ'
import { Hero } from '@/components/landing-page/Hero'
import { Pricing } from '@/components/landing-page/Pricing'
import { VideoExplanation } from '@/components/landing-page/VideoExplanation'

export default function Home() {
	return (
		<div className='min-h-full-h-no-header'>
			<Hero />
			<VideoExplanation />
			<Pricing />
			<FAQ />
		</div>
	)
}
