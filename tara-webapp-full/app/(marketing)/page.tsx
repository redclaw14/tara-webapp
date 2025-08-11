// app/(marketing)/page.tsx
import Link from "next/link";

export default function MarketingHome() {
  return (
    <main className="min-h-[92vh] bg-[radial-gradient(1200px_700px_at_20%_0%,#e9f7ef_0%,#ffffff_55%)] text-zinc-900">
      {/* container */}
      <section className="mx-auto max-w-6xl px-4 pt-24 pb-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left: Copy */}
          <div>
            <p className="text-emerald-700/80 text-[11px] tracking-[0.18em] uppercase">
              Personal AI Guide · Gentle · Private
            </p>

            <h1 className="mt-3 font-serif tracking-tight text-4xl leading-[1.1] md:text-6xl">
              Welcome, dear soul.
            </h1>

            <p className="mt-5 text-zinc-700 text-lg leading-relaxed">
              <span className="font-medium text-zinc-800">
                Tara is your gentle mirror—
              </span>{" "}
              helping you see yourself clearly and grow with kindness.
            </p>

            <p className="mt-4 text-zinc-700 leading-relaxed">
              Tara learns your context and offers tailored meditations, reflective
              prompts, and gentle paths like Self-Love and Anxiety Relief. Plus a
              weekly recap podcast. Meditations, reflective journaling, self-love
              paths — and a weekly audio summary of your week, made just for you.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/check-in"
                className="rounded-2xl bg-emerald-700 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              >
                Start your first check-in
              </Link>
              <Link
                href="/paths/self-love"
                className="rounded-2xl border border-zinc-300 bg-white/70 backdrop-blur px-5 py-3 text-sm font-medium text-zinc-800 hover:bg-white focus:outline-none focus:ring-2 focus:ring-zinc-300"
              >
                Explore the Self-Love Path
              </Link>
            </div>

            {/* UVPs */}
            <ul className="mt-8 grid gap-2 text-sm text-zinc-700">
              <li>• Personal reflections, not “one-size-fits-all” advice</li>
              <li>• Structured paths that feel gentle, not pushy</li>
              <li>• Your week, summarized as a calm audio you can re-listen to</li>
            </ul>

            {/* Wisdom base badge */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/70 px-3 py-1 text-[12px] text-emerald-800">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-600" />
              A living wisdom base (psychology, CBT, yoga, TCM, contemplative)
            </div>
          </div>

          {/* Right: Visual card (soft nature vibe, no animation) */}
          <div className="md:pl-6">
            <div className="rounded-3xl border border-emerald-100 bg-white shadow-sm p-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                {/* subtle layered background */}
                <div className="absolute inset-0 bg-[radial-gradient(600px_400px_at_80%_10%,#e6f4ea_0%,transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(140deg,#ffffff_0%,#f7fbf8_60%,#eef7f1_100%)]" />
                {/* quiet linework motif */}
                <svg
                  aria-hidden
                  className="absolute -bottom-8 -right-8 h-[120%] w-[120%] opacity-[0.06]"
                  viewBox="0 0 600 400"
                  fill="none"
                >
                  <path
                    d="M20,380 C120,260 220,260 320,340 C420,420 480,240 580,220"
                    stroke="rgb(16 185 129)" // emerald-500
                    strokeWidth="2"
                  />
                  <path
                    d="M0,300 C120,200 250,210 370,280 C470,340 520,200 640,180"
                    stroke="rgb(5 150 105)" // emerald-600
                    strokeWidth="1.5"
                  />
                </svg>
                {/* label */}
                <div className="absolute left-4 top-4 rounded-full bg-emerald-700/10 text-emerald-900/80 px-3 py-1 text-xs font-medium">
                  Calm, personal guidance
                </div>
                {/* placeholder copy */}
                <div className="relative z-10 grid h-full place-items-center px-6 text-center">
                  <div>
                    <p className="text-sm text-emerald-900/70">
                      Designed for nervous-system ease
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">
                      Gentle contrast · ample whitespace · zero motion
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm text-zinc-500">
                We keep visuals gentle and non-stimulating to support presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section id="what-you-get" className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="font-serif text-3xl text-zinc-900">What you get</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Feature
            title="Personalized guidance"
            desc="Adapts to your words, mood, and pace — not generic tips."
          />
          <Feature
            title="Gentle daily practice"
            desc="Two to ten-minute meditations, reflective prompts, and affirmations."
          />
          <Feature
            title="Weekly audio recap"
            desc="A calm, private summary of your week you can re-listen to anytime."
          />
        </div>
      </section>
    </main>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="font-medium text-zinc-900">{title}</h3>
      <p className="mt-2 text-zinc-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
