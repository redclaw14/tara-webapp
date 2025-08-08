import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Tara – Your Gentle Companion",
  description: "Presence. Healing. Loving action. A daily ritual in your pocket.",
};

function Section({ id, children, className }: any) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-4 ${className || ""}`}>
      {children}
    </section>
  );
}

export default function Page() {
  return (
    <main>
      {/* HERO with background image + device mock */}
      <div className="relative">
        <Image
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-sand/60" />
        <Section className="relative py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                A gentle space to breathe, heal and take loving action.
              </h1>
              <p className="mt-5 max-w-xl opacity-80">
                Tara is a calm companion for your day: set an intention, receive a short practice or
                affirmation, and gently integrate what matters.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/app/chat" className="rounded-2xl border px-5 py-3 text-center">
                  Launch App
                </Link>
                <a
                  href="#how"
                  className="rounded-2xl px-5 py-3 text-center underline underline-offset-4"
                >
                  See how it works
                </a>
              </div>
              <p className="mt-6 text-sm opacity-70">Free to start • No ads • Your data, your pace</p>
            </div>

            {/* Device mock image */}
            <div className="relative rounded-2xl bg-white/70 shadow-inner p-6">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop"
                  alt="Tara ritual preview"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-sm opacity-70 mt-4">
                Preview of Tara’s ritual cards and chat
              </p>
            </div>
          </div>
        </Section>
      </div>

      {/* SOCIAL PROOF / TAGS */}
      <Section className="py-10">
        <div className="flex flex-wrap items-center gap-3 text-xs opacity-70">
          <span className="px-3 py-1 rounded-full bg-white/70 border">Trauma-informed</span>
          <span className="px-3 py-1 rounded-full bg-white/70 border">Ritual-first UX</span>
          <span className="px-3 py-1 rounded-full bg-white/70 border">Personalized</span>
          <span className="px-3 py-1 rounded-full bg-white/70 border">Private by design</span>
        </div>
      </Section>

      {/* WHY with card images */}
      <Section id="why" className="py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Presence first",
              body:
                "Whitespace, slow rhythm, a ‘breath bar’. Tara invites you to arrive before doing.",
              img:
                "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",
            },
            {
              title: "Small brave actions",
              body:
                "Tiny practices and affirmations that fit your day. Gentle, doable, consistent.",
              img:
                "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop",
            },
            {
              title: "Truly personal",
              body: "Your intention, story and progress shape Tara’s guidance and tone.",
              img:
                "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1200&auto=format&fit=crop",
            },
          ].map((c) => (
            <div key={c.title} className="card p-0 overflow-hidden">
              <div className="relative h-28 w-full">
                <Image src={c.img} alt="" fill className="object-cover opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="font-medium text-lg">{c.title}</h3>
                <p className="opacity-80 mt-2 text-sm">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="how" className="py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              step: "01",
              title: "Set your intention",
              body: "Comfort, clarity, courage — name what you need.",
            },
            {
              step: "02",
              title: "Receive a ritual",
              body: "A short practice, affirmation or reflection tailored to you.",
            },
            {
              step: "03",
              title: "Integrate gently",
              body: "Save it, journal, or come back later. Tiny steps, real change.",
            },
          ].map((s) => (
            <div key={s.step} className="rounded-2xl border bg-white/60 p-6">
              <div className="text-xs opacity-60">{s.step}</div>
              <h3 className="font-medium mt-1">{s.title}</h3>
              <p className="opacity-80 mt-2 text-sm">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS with soft bg image */}
      <Section className="py-20">
        <div className="relative card p-8 text-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1400&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover opacity-10"
          />
          <p className="relative text-lg italic opacity-90">
            “Tara feels like a gentle friend who remembers what matters to me.”
          </p>
          <p className="relative text-sm opacity-60 mt-2">— Beta user</p>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              q: "Is Tara a therapist?",
              a:
                "No. Tara offers supportive practices and reflections, not therapy. We’ll always encourage professional care when needed.",
            },
            {
              q: "Is my data private?",
              a:
                "Yes. We start privacy-first and you’re in control. You can export or delete your data at any time.",
            },
            {
              q: "Does it cost money?",
              a:
                "You can begin for free. We’ll introduce fair pricing later for deeper journeys.",
            },
            { q: "Which languages?", a: "English first, German & Thai next." },
          ].map((f) => (
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
          <Link href="/app/chat" className="rounded-2xl border px-6 py-3">
            Launch App
          </Link>
        </div>
      </Section>
    </main>
  );
}
