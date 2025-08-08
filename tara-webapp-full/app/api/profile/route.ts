export const runtime = 'nodejs'

import { NextRequest } from 'next/server'
import { requireAuth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest){
  const user = await requireAuth()
  const body = await req.json()
  await prisma.profile.upsert({ where: { userId: user.id }, create: { userId: user.id, ...body }, update: body })
  return Response.json({ ok: true })
}
