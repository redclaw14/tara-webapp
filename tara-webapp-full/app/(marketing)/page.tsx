import Link from "next/link";

export default function MarketingHome() {
  return (
    <main className="min-h-[88vh] bg-gradient-to-b from-emerald-50 via-white to-white text-zinc-900">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <p className="text-emerald-700/80 text-xs tracking-[0.12em] uppercase">
              Personal AI Guide • Trauma-aware • Calm
            </p>

            <h1 className="mt-3 font-serif tracking-tight text-4xl md:text-6xl">
              Welcome, dear Soul.
            </h1>

            <p className="mt-4 text-zinc-700 text-lg leading-relaxed">
              Tara learns your situation, struggles, and goals — and reflects back
              what matters with kindness. Guided meditations, reflective journaling,
              gentle healing paths, and a wisdom library spanning psychology, CBT,
              yoga, TCM, and contemplative traditions. Warm, safe, and personal.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/sign-up"
                className="rounded-2xl bg-emerald-700 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              >
                Get started free
              </Link>
              <Link
                href="#what-you-get"
                className="rounded-2xl border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-800 hover:bg-white focus:outline-none focus:ring-2 focus:ring-zinc-300"
              >
                How Tara helps
              </Link>
            </div>

            <ul className="mt-8 grid gap-2 text-sm text-zinc-700">
              <li>• Guided meditations & sleep support</li>
              <li>• Reflective, interactive journaling</li>
              <li>• Personalized healing paths (start: Self-Love)</li>
              <li>• Weekly recap podcast of your week & moods</li>
            </ul>
          </div>

          {/* Visual block (gentle, no motion) */}
          <div className="md:pl-6">
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <div className="aspect-[4/3] rounded-2xl border bg-[linear-gradient(120deg,#e8f5e9_0%,#ffffff_40%,#ffffff_60%,#e8f5e9_100%)] grid place-items-center">
                <span className="text-emerald-800/70 text-sm">
                  (Placeholder visual — calm & minimal)
                </span>
              </div>
              <p className="mt-3 text-sm text-zinc-500">
                We keep visuals gentle to support nervous-system regulation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section id="what-you-get" className="mx-auto max-w-6xl px-4 py-16 border-t">
        <h2 className="font-serif text-3xl text-zinc-900">What you get</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Feature
            title="Personalized guidance"
            desc="Adapts to your emotions, goals, and pace — not one-size-fits-all."
          />
          <Feature
            title="Warm, safe UX"
            desc="Gentle tone, opt-in intensities, easy exits. Trauma-aware by design."
          />
          <Feature
            title="Living wisdom"
            desc="Grounded in psychology & global traditions; curated to your path."
          />
        </div>
      </section>
    </main>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border bg-white p-6">
      <h3 className="font-medium text-zinc-900">{title}</h3>
      <p className="mt-2 text-zinc-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
