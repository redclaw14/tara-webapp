'use client'
import { useState } from 'react'
export function OnboardingForm(){
  const [state, set] = useState<any>({})
  async function save(){ await fetch('/api/profile',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(state)}); alert('Saved') }
  return (
    <div className="space-y-4 max-w-xl">
      <input className="w-full border px-3 py-2 rounded" placeholder="Focus Area" onChange={e=>set((s:any)=>({...s, focusArea:e.target.value}))}/>
      <textarea className="w-full border px-3 py-2 rounded" placeholder="Your story" onChange={e=>set((s:any)=>({...s, emotionalStory:e.target.value}))}/>
      <button onClick={save} className="border rounded px-4 py-2">Save</button>
    </div>
  )
}
