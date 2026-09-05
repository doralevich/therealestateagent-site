import type { Metadata } from "next";
import Nav from "../components/Nav";
import { Footer } from "../components/Footer";
import { CONTACT_EMAIL, pageMeta } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Privacy Policy",
    description: "Privacy policy for The Real Estate Agent.",
    path: "/privacy",
  }),
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <>
      <Nav />
      <main className="bg-cream py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-ink mb-6">Privacy Policy</h1>
          <p className="text-ink leading-relaxed">
            This privacy policy is a placeholder. A full policy will be published shortly.
            For any privacy related questions in the meantime, contact{" "}
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
