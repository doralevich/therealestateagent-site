import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import { Footer } from "../components/Footer";
import { PageHero } from "../components/PageHero";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Thank You",
    description: "Thanks for reaching out. We will be in touch shortly.",
    path: "/thank-you",
  }),
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <PageHero eyebrow="Received" title="Thanks. We Will Be in Touch.">
          <p className="max-w-2xl mx-auto">
            Someone will get back to you shortly, usually the same business day.
          </p>
        </PageHero>
        <section className="bg-white py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <p className="text-lg text-ink leading-relaxed mb-8">
              While you wait, the two pages most people read next:
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <Link href="/how-it-works" className="text-sm font-semibold text-brand hover:underline">
                How it works &rarr;
              </Link>
              <Link href="/what-is-an-agent" className="text-sm font-semibold text-brand hover:underline">
                What is an agent? &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
