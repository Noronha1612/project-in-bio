import 'server-only'
import { db } from '@/lib/firebase'
import { getProjects } from './getProjects'
import { ProfileData } from '@/models/Profile'
import { auth } from '@/lib/auth'

export const getProfileData = async () => {
	const session = await auth()

	if (!session) {
		throw new Error('User not authenticated')
	}

	const snapshot = await db
		.collection('profiles')
		.where('userId', '==', session.user?.id)
		.limit(1)
		.get()

	if (snapshot.empty) {
		return null
	}

	const profileData = snapshot.docs[0].data() as ProfileData

	return {
		...profileData,
		id: snapshot.docs[0].id,
		projects: await getProjects(snapshot.docs[0].id),
	}
}
