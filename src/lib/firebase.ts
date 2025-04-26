import 'server-only'
import { cert, getApps, initializeApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { getStorage } from 'firebase-admin/storage'

const PROJECT_ID = process.env.FIREBASE_PROJECT_ID
const CLIENT_EMAIL = process.env.FIREBASE_CLIENT_EMAIL
const PRIVATE_KEY = process.env.FIREBASE_PRIVATE_KEY
const STORAGE_BUCKET = process.env.FIREBASE_STORAGE_BUCKET

if (!PROJECT_ID || !CLIENT_EMAIL || !PRIVATE_KEY || !STORAGE_BUCKET) {
	throw new Error('Firebase credentials are not set')
}

const decodedPrivateKey = Buffer.from(PRIVATE_KEY, 'base64').toString('utf-8')

export const certificate = cert({
	projectId: PROJECT_ID,
	clientEmail: CLIENT_EMAIL,
	privateKey: decodedPrivateKey,
})

if (!getApps().length) {
	initializeApp({
		credential: certificate,
		storageBucket: STORAGE_BUCKET,
	})
}

export const db = getFirestore()
export const storage = getStorage().bucket()
