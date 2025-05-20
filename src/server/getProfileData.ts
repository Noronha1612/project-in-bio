import { db } from '@/lib/firebase'
import 'server-only'

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
    projects: Project[] // Add projects field
}

export const getProfileData = async (profileId: string) => {
    const snapshot = await db.collection('profiles').doc(profileId).get()

    return (snapshot.data() ?? null) as ProfileData | null
}
