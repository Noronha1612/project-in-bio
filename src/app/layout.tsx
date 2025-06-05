import { Header } from '@/components/commons/Header'
import './global.css'

import { Red_Hat_Display } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

const redHatDisplay = Red_Hat_Display({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pt-BR'>
			<body
				className={`${redHatDisplay.className} bg-background-primary text-content-body`}
			>
				<SessionProvider>
					<Header />
					<div className='mx-auto mt-32 max-w-7xl'>{children}</div>
				</SessionProvider>
			</body>
		</html>
	)
}
