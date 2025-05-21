import 'server-only'
import { db } from '@/lib/firebase'
import { getProjects } from './getProjects'

type Project = {
	clicks: number
	name: string
	description: string
	image: string
}

type ProfileData = {
	userId: string
	totalVisits: number
	createdAt: number
}

export const getProfileData = async (profileId: string) => {
	const snapshot = await db.collection('profiles').doc(profileId).get()

	const data = {
		...((snapshot.data() ?? {}) as ProfileData),
		projects: await getProjects(profileId),
	}

	return data
}
