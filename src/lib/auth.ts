import NextAuth from 'next-auth'
import { certificate } from './firebase'
import { FirestoreAdapter } from '@auth/firebase-adapter'
import Google from 'next-auth/providers/google'
import { getProfileDataByUserId } from '@/server/getProfileData'

export const { handlers, signIn, signOut, auth } = NextAuth({
	adapter: FirestoreAdapter({
		credential: certificate,
	}),
	providers: [Google],
	session: {
		strategy: 'jwt',
		maxAge: 60 * 60 * 24 * 30, // 30 days
	},
	callbacks: {
		session: async ({ session, token }) => {
			session.user.profileId = String(token.profileId) || ''
			session.user.id = String(token.sub) || ''

			return session
		},
		jwt: async ({ token, user }) => {
			if (user) {
				const profileData = await getProfileDataByUserId(user.id ?? '')

				token.profileId = profileData?.id
			}

			return token
		},
	},
})
