import { auth } from '@clerk/nextjs'
export async function requireAuth() {
  const { userId } = auth()
  if (!userId) throw new Error('Unauthorized')
  return { id: userId }
}
