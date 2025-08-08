import Link from "next/link";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-sand text-espresso">
      <header className="sticky top-0 z-40 backdrop-blur bg-sand/80 border-b">
        <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-wide">Tara</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#why" className="opacity-80 hover:opacity-100">Why Tara</a>
            <a href="#how" className="opacity-80 hover:opacity-100">How it works</a>
            <a href="#faq" className="opacity-80 hover:opacity-100">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/sign-in" className="text-sm opacity-80 hover:opacity-100">Sign in</Link>
            <Link href="/sign-up" className="rounded-2xl border px-3 py-1.5 text-sm">Get started</Link>
          </div>
        </div>
      </header>
      {children}
      <footer className="border-t mt-20">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm opacity-80 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Tara. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 opacity-80">Privacy</a>
            <a href="#" className="hover:opacity-100 opacity-80">Terms</a>
            <a href="#" className="hover:opacity-100 opacity-80">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
