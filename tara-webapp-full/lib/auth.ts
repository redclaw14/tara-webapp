import { auth } from '@clerk/nextjs/server'
export async function requireAuth() {
  const { userId } = auth()
  if (!userId) throw new Error('Unauthorized')
  return { id: userId }
}
