import { db } from '@/lib/firebase'
import 'server-only'

type ProfileData = {
	userId: string
	totalVisits: number
	createdAt: number
}

export const getProfileData = async (profileId: string) => {
	const snapshot = await db.collection('profiles').doc(profileId).get()

	return (snapshot.data() ?? null) as ProfileData | null
}
