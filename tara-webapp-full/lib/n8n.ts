export async function callN8NChat(payload: any) {
  const res = await fetch(process.env.N8N_CHAT_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  if (!res.ok) throw new Error('n8n upstream error')
  return res
}
