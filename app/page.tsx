import Link from "next/link";
import Nav from "./components/Nav";
import { Footer } from "./components/Footer";
import { Label } from "./components/PageHero";
import { CtaPair, ClosingCta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { CAPABILITIES, PROCESS, TESTIMONIALS, FAQS } from "@/lib/content";
import { AUDIENCES, SITE_URL } from "@/lib/site";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav />
      <main>
        {/* HERO */}
        <section className="grid-dark-section py-28">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-xs uppercase tracking-widest text-brand-tint font-semibold mb-6">
              AI Agent for Real Estate Professionals
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              More Listings.
              <br />
              More Closings.
              <br />
              Less Paperwork.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              The Real Estate Agent handles lead follow-up, transaction coordination, and
              client communication so you can focus on the relationships that actually
              move the needle.
            </p>
            <CtaPair on="dark" />
          </div>
        </section>

        {/* THE ARGUMENT */}
        <section className="bg-cream py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <Label>Market Intelligence</Label>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-8 leading-tight">
              Top Producers Win on Relationships. Not on How Fast They Type.
            </h2>
            <div className="text-lg text-ink leading-relaxed space-y-4 max-w-3xl mx-auto">
              <p>
                The agents who dominate their market are not the ones who work the hardest.
                They are the ones who stay in front of every client, follow up on every
                lead, and never let a deal go cold because they were too busy with another
                one.
              </p>
              <p>
                The Real Estate Agent gives you that leverage. It tracks your pipeline,
                nurtures your leads, coordinates your transactions, and keeps every client
                feeling like they are your only client, without you having to manage any of
                it.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT IT DOES */}
        <section id="how-it-works" className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Label>What It Does</Label>
              <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">
                A Dedicated AI Agent for Real Estate Professionals
              </h2>
              <p className="text-lg text-ink mt-4 max-w-3xl mx-auto">
                Custom-configured for your CRM and pipeline. Trained in your voice. Running
                from day one.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {CAPABILITIES.map((c) => (
                <div
                  key={c.title}
                  className="bg-white border-l-4 border-brand rounded p-6 shadow-sm"
                >
                  <h3 className="font-bold text-lg text-ink mb-3">{c.title}</h3>
                  <p className="text-ink leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-10">
              <Link href="/how-it-works" className="text-sm font-semibold text-brand hover:underline">
                See how it works, step by step &rarr;
              </Link>
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section className="grid-dark-section py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Label on="dark">How It Works</Label>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                From Consultation to Running in 2 Weeks
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {PROCESS.map((p, i) => (
                <div key={p.num} className="flex flex-col items-center text-center px-6">
                  <div className="w-20 h-20 rounded-full border-2 border-brand-tint flex flex-col items-center justify-center mb-5 bg-ground/85 shrink-0">
                    <span className="text-xs uppercase tracking-widest font-semibold text-brand-tint">
                      {p.phase}
                    </span>
                    <span className="text-xl font-bold text-white">{p.num}</span>
                  </div>
                  {i < PROCESS.length - 1 && (
                    <span className="md:hidden text-brand-tint text-xl mb-4" aria-hidden="true">
                      &darr;
                    </span>
                  )}
                  <h3 className="font-bold text-lg text-white mb-3">{p.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Label>Who It&apos;s For</Label>
              <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">
                Configured Around How You Actually Work
              </h2>
              <p className="text-lg text-ink mt-4 max-w-3xl mx-auto">
                A solo agent and a 45-agent brokerage need different things from the same
                engine. Pick the one that sounds like you.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {AUDIENCES.map((a) => (
                <Link
                  key={a.slug}
                  href={`/${a.slug}`}
                  className="group block bg-cream rounded p-6 border border-transparent hover:border-brand transition"
                >
                  <h3 className="font-bold text-ink mb-2 group-hover:text-brand transition">
                    {a.label}
                  </h3>
                  <span className="text-sm text-brand font-semibold">Read more &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section id="results" className="bg-cream py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Label>Client Results</Label>
              <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">
                What Real Estate Professionals Say After 30 Days
              </h2>
              <p className="text-lg text-ink mt-4 max-w-3xl mx-auto">
                Agents and brokers across the country are closing more with less effort.
                Here is what changed.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.quote}
                  className="bg-white rounded p-6 shadow-sm border-t-4 border-brand flex flex-col"
                >
                  <p className="text-xs uppercase tracking-widest font-semibold text-brand mb-3">
                    {t.industry}
                  </p>
                  <blockquote className="text-ink italic flex-1 mb-4 text-sm leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="border-t border-gray-100 pt-3">
                    <p className="font-bold text-ink text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400 mt-1">{t.detail}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="text-center text-xs text-gray-400 mt-8">
              Representative client experiences. Identifying details withheld at client
              request.
            </p>
          </div>
        </section>

        {/* INVESTMENT */}
        <section id="pricing" className="grid-dark-section py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <Label on="dark">Investment</Label>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Built for Agents Who Are Serious About Volume
            </h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Two ways to start. Build your agent yourself in about fifteen minutes, or have
              us scope and configure it around your brokerage on a call.
            </p>
            <CtaPair size="lg" on="dark" />
            <p className="text-sm text-gray-400 mt-6">
              Custom deployments are scoped to your CRM, transaction volume, and team size,
              and priced during your consultation.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Label>FAQ</Label>
              <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">
                Frequently Asked Questions
              </h2>
            </div>
            <FAQ items={FAQS.slice(0, 6)} />
            <p className="text-center mt-10">
              <Link href="/faq" className="text-sm font-semibold text-brand hover:underline">
                Read every question &rarr;
              </Link>
            </p>
          </div>
        </section>

        <ClosingCta
          heading="Ready to Close More and Work Less?"
          body="Build your agent now, or book a 30-minute consultation and we will show you exactly how The Real Estate Agent would be configured for your business."
        />
      </main>
      <Footer />
    </>
  );
}
