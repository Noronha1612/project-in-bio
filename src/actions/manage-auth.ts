'use server'

import { auth, signIn, signOut } from '@/lib/auth'

export async function manageAuth() {
	const session = await auth()

	if (session) {
		return await signOut({
			redirectTo: '/',
		})
	}

	return await signIn('google', {
		redirectTo: '/criar',
	})
}
