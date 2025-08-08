'use client'
import { useEffect, useRef, useState } from 'react'

type Msg = { role: 'user' | 'assistant'; content: string }

export default function ChatWindow(){
  const [messages, setMessages] = useState<Msg[]>([])
  const [intention, setIntention] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  async function send(){
    const content = inputRef.current?.value?.trim()
    if (!content) return
    const next = [...messages, { role: 'user', content }]
    setMessages(next)

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: next, intention })
    })
    const ct = res.headers.get('content-type') || ''
    if (ct.includes('text/event-stream')){
      const reader = res.body!.getReader()
      let acc = ''
      while (true){
        const { value, done } = await reader.read()
        if (done) break
        acc += new TextDecoder().decode(value)
        setMessages(prev => {
          const copy = [...prev]
          const last = copy[copy.length-1]
          if (!last || last.role !== 'assistant') copy.push({ role: 'assistant', content: acc })
          else copy[copy.length-1] = { role: 'assistant', content: acc }
          return copy
        })
      }
    } else {
      const data = await res.json().catch(() => ({}))
      setMessages(prev => [...prev, { role: 'assistant', content: (data as any).reply ?? '' }])
    }
    inputRef.current!.value = ''
  }

  useEffect(()=>{ inputRef.current?.focus() },[])

  return (
    <div className="h-full flex flex-col">
      <div className="p-3 border-b bg-[#F7F2EA] flex gap-2">
        <input value={intention} onChange={e=>setIntention(e.target.value)} placeholder="Intention (z.B. Trost, Klarheit)"
          className="flex-1 rounded-xl border px-3 py-2"/>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((m,i)=> (
          <div key={i} className={m.role==='user'?'text-right':'text-left'}>
            <div className={`inline-block max-w-[80%] rounded-2xl px-3 py-2 shadow ${m.role==='user'?'bg-leaf/20':'bg-white'}`}>
              {m.content}
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 border-t flex gap-2 bg-white/70">
        <input ref={inputRef} onKeyDown={e=>e.key==='Enter'&&send()} className="flex-1 rounded-xl border px-3 py-2" placeholder="Schreib Tara…"/>
        <button onClick={send} className="rounded-xl px-4 py-2 border">Senden</button>
      </div>
    </div>
  )
}
