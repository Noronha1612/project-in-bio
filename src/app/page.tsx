import { Header } from '@/components/landing-page/Header'
import { Hero } from '@/components/landing-page/Hero'

export default function Home() {
	return (
		<div className='mx-auto min-h-screen max-w-7xl'>
			<Header />
			<Hero />
			{/* <VideoExplanation /> */}
			{/* <Pricing /> */}
			{/* <FAQ /> */}
		</div>
	)
}
