'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/firebase'
import { Timestamp } from 'firebase-admin/firestore'

export const createLink = async (link: string) => {
	const session = await auth()

	if (!session?.user) {
		return false
	}

	try {
		await db.collection('profiles').doc(link).set({
			link,
			userId: '',
			totalVisits: 0,
			createdAt: Timestamp.now().toMillis(),
		})

		return true
	} catch (err) {
		return false
	}
}
