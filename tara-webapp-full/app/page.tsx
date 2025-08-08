import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 text-center p-6">
      <h1 className="text-4xl font-semibold">Tara – Your Gentle Companion</h1>
      <p className="max-w-xl opacity-80">
        Presence. Healing. Loving action. Start your daily ritual.
      </p>
      <Link href="/chat" className="border rounded-2xl px-5 py-3">
        Launch App
      </Link>
    </main>
  );
}

