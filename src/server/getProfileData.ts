import 'server-only'
import { db } from '@/lib/firebase'
import { getProjects } from './getProjects'
import { ProfileData } from '@/models/Profile'

export const getProfileData = async (profileId: string) => {
	if (!profileId) {
		return null
	}

	const snapshot = await db.collection('profiles').doc(profileId).get()

	if (!snapshot.exists) {
		return null
	}

	const profileData = snapshot.data() as ProfileData

	return {
		...profileData,
		id: snapshot.id,
		projects: await getProjects(snapshot.id),
	}
}
