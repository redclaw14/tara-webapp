export const runtime = 'nodejs'

import { NextRequest } from 'next/server'
import { requireAuth } from '@/lib/auth'
import { callN8NChat } from '@/lib/n8n'
import { ssePassthrough } from '@/lib/ai'

export const runtime = 'edge'

export async function POST(req: NextRequest){
  await requireAuth()
  const body = await req.json()
  const upstream = await callN8NChat(body)
  const ct = upstream.headers.get('content-type') || ''
  if (ct.includes('text/event-stream')) return ssePassthrough(upstream)
  const text = await upstream.text()
  try { return new Response(text, { headers: { 'Content-Type': 'application/json' } }) }
  catch { return new Response(text) }
}
