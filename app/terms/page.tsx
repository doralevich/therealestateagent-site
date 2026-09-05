import type { Metadata } from "next";
import Nav from "../components/Nav";
import { Footer } from "../components/Footer";
import { CONTACT_EMAIL, pageMeta } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Terms of Service",
    description: "Terms of service for The Real Estate Agent.",
    path: "/terms",
  }),
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <>
      <Nav />
      <main className="bg-cream py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-ink mb-6">Terms of Service</h1>
          <p className="text-ink leading-relaxed">
            These terms are a placeholder. Full terms will be published shortly. For any
            questions in the meantime, contact{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand font-semibold hover:underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
