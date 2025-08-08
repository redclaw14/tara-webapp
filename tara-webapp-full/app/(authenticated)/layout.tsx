import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function Layout({ children }: { children: React.ReactNode }) {
  const user = await currentUser()
  if (!user) redirect('/')
  return (
    <div className="min-h-screen bg-sand">
      <nav className="h-14 flex items-center justify-between px-4 border-b">
        <div className="font-medium">Tara</div>
        <div className="opacity-70 text-sm">breathe</div>
      </nav>
      {children}
    </div>
  )
}
