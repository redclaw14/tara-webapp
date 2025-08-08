import Link from "next/link";

export const metadata = {
  title: "Tara – Your Gentle Companion",
  description: "Presence. Healing. Loving action. A daily ritual in your pocket.",
};

function Section({ id, children, className }: any){
  return (
    <section id={id} className={`mx-auto max-w-7xl px-4 ${className||""}`}>{children}</section>
  )
}

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <Section className="py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              A gentle space to breathe, heal and take loving action.
            </h1>
            <p className="mt-5 max-w-xl opacity-80">
              Tara is a calm companion for your day: set an intention, receive a short practice or affirmation, and gently integrate what matters.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/app/chat" className="rounded-2xl border px-5 py-3 text-center">Launch App</Link>
              <a href="#how" className="rounded-2xl px-5 py-3 text-center border border-transparent underline underline-offset-4">See how it works</a>
            </div>
            <p className="mt-6 text-sm opacity-70">Free to start • No ads • Your data, your pace</p>
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-white/60 shadow-inner flex items-center justify-center">
            {/* Placeholder for hero mock / phone frame */}
            <div className="text-center p-8">
              <div className="rounded-2xl border w-64 h-40 mx-auto bg-sand/60" />
              <p className="text-sm opacity-70 mt-4">Preview of Tara’s ritual cards and chat</p>
            </div>
          </div>
        </div>
      </Section>

      {/* SOCIAL PROOF / TAGS */}
      <Section className="py-10">
        <div className="flex flex-wrap items-center gap-3 text-xs opacity-70">
          <span className="px-3 py-1 rounded-full bg-white/70 border">Trauma‑informed</span>
          <span className="px-3 py-1 rounded-full bg-white/70 border">Ritual‑first UX</span>
          <span className="px-3 py-1 rounded-full bg-white/70 border">Personalized</span>
          <span className="px-3 py-1 rounded-full bg-white/70 border">Private by design</span>
        </div>
      </Section>

      {/* WHY */}
      <Section id="why" className="py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Presence first",
              body: "Whitespace, slow rhythm, a ‘breath bar’. Tara invites you to arrive before doing.",
            },
            {
              title: "Small brave actions",
              body: "Tiny practices and affirmations that fit your day. Gentle, doable, consistent.",
            },
            {
              title: "Truly personal",
              body: "Your intention, story and progress shape Tara’s guidance and tone.",
            },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border bg-white/60 p-6 shadow-sm">
              <h3 className="font-medium text-lg">{c.title}</h3>
              <p className="opacity-80 mt-2 text-sm">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="how" className="py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: "01", title: "Set your intention", body: "Comfort, clarity, courage — name what you need." },
            { step: "02", title: "Receive a ritual", body: "A short practice, affirmation or reflection tailored to you." },
            { step: "03", title: "Integrate gently", body: "Save it, journal, or come back later. Tiny steps, real change." },
          ].map((s) => (
            <div key={s.step} className="rounded-2xl border bg-white/60 p-6">
              <div className="text-xs opacity-60">{s.step}</div>
              <h3 className="font-medium mt-1">{s.title}</h3>
              <p className="opacity-80 mt-2 text-sm">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS (placeholder) */}
      <Section className="py-20">
        <div className="rounded-2xl border bg-white/60 p-8 text-center">
          <p className="text-lg italic opacity-90">“Tara feels like a gentle friend who remembers what matters to me.”</p>
          <p className="text-sm opacity-60 mt-2">— Beta user</p>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {q: "Is Tara a therapist?", a: "No. Tara offers supportive practices and reflections, not therapy. We’ll always encourage professional care when needed."},
            {q: "Is my data private?", a: "Yes. We start privacy‑first and you’re in control. You can export or delete your data at any time."},
            {q: "Does it cost money?", a: "You can begin for free. We’ll introduce fair pricing later for deeper journeys."},
            {q: "Which languages?", a: "English first, German & Thai next."},
          ].map((f)=> (
            <div key={f.q} className="rounded-2xl border bg-white/60 p-6">
              <h4 className="font-medium">{f.q}</h4>
              <p className="opacity-80 text-sm mt-2">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-24 text-center">
        <h2 className="text-3xl font-semibold">Begin your gentle ritual</h2>
        <p className="opacity-80 mt-2">Two minutes can change your day.</p>
        <div className="mt-6">
          <Link href="/app/chat" className="rounded-2xl border px-6 py-3">Launch App</Link>
        </div>
      </Section>
    </main>
  );
}
