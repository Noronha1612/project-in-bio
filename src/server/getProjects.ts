import { db } from '@/lib/firebase'
import { Project } from '@/models/Project'
import 'server-only'

export const getProjects = async (profileId: string) => {
	const snapshot = await db
		.collection('projects')
		.where('profileId', '==', profileId)
		.get()

	const projects = snapshot.docs.map<Project>((doc) => ({
		id: doc.id,
		...(doc.data() as Omit<Project, 'id'>),
	}))

	return projects
}
