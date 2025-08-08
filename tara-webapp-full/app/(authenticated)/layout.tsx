// app/(authenticated)/layout.tsx
import Link from "next/link";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-sand">
      <nav className="h-14 flex items-center justify-between px-4 border-b bg-sand/80 backdrop-blur">
        <Link href="/" className="font-medium">Tara</Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/settings" className="opacity-80 hover:opacity-100">Settings</Link>
          <Link href="/chat" className="rounded-2xl border px-3 py-1.5">Open Chat</Link>
        </div>
      </nav>
      {children}
    </div>
  );
}
