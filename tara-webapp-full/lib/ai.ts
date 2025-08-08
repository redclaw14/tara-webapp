export function ssePassthrough(upstream: Response) {
  const { readable, writable } = new TransformStream()
  ;(async () => {
    const writer = writable.getWriter()
    const reader = upstream.body!.getReader()
    while (true) {
      const { value, done } = await reader.read()
      if (done) break
      await writer.write(value)
    }
    await writer.close()
  })()
  return new Response(readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive'
    }
  })
}
