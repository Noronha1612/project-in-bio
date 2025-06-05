// next-auth.d.ts
import 'next-auth'

declare module 'next-auth' {
	interface Session {
		user: {
			id: string
			email: string
			profileId: string
			name: string
			image: string | null
		}
	}

	interface User {
		profileId: string
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		profileId: string
	}
}
