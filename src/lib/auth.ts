import NextAuth from 'next-auth'
import { certificate } from './firebase'
import { FirestoreAdapter } from '@auth/firebase-adapter'
import Google from 'next-auth/providers/google'

export const { handlers, signIn, signOut, auth } = NextAuth({
	adapter: FirestoreAdapter({
		credential: certificate,
	}),
	providers: [Google],
})
