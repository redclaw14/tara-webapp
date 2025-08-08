import '../styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'

export const metadata = {
  title: 'Tara – Gentle Companion',
  description: 'Presence. Healing. Loving action.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  )
}
