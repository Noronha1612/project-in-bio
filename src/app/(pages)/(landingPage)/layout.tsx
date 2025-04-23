import '@/app/global.css'

import { Red_Hat_Display } from 'next/font/google'

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
				{children}
			</body>
		</html>
	)
}
