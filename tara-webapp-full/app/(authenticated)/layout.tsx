import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const user = await currentUser();
  if (!user) redirect("/");

  return (
    <div className="min-h-screen bg-sand">
      <nav className="h-14 flex items-center justify-between px-4 border-b bg-sand/80 backdrop-blur">
        <Link href="/" className="font-medium">Tara</Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/app/chat" className="opacity-80 hover:opacity-100">Chat</Link>
          <Link href="/app/daily" className="opacity-80 hover:opacity-100">Daily</Link>
          <Link href="/app/journeys" className="opacity-80 hover:opacity-100">Journeys</Link>
          <Link href="/app/library" className="opacity-80 hover:opacity-100">Library</Link>
          <Link href="/app/settings" className="rounded-2xl border px-3 py-1.5">Settings</Link>
        </div>
      </nav>
      {children}
    </div>
  );
}
