import { BUILD_LINK, DEMO_LINK } from "@/lib/site";

// Both paths, everywhere. Every CTA location on every agent site offers the self-serve
// build and the consultation side by side - see DECISIONS.md in apolloclaw2. The price
// is never printed here; the customer sees it in the checkout before paying anything.

type Size = "md" | "lg";

const primary: Record<Size, string> = {
  md: "inline-block bg-brand text-white px-8 py-3 rounded font-semibold hover:bg-brand-dark transition",
  lg: "inline-block bg-brand text-white px-10 py-4 rounded font-semibold text-lg hover:bg-brand-dark transition",
};

const secondaryOnDark: Record<Size, string> = {
  md: "inline-block border border-white/50 text-white px-8 py-3 rounded font-semibold hover:bg-white/10 hover:border-white transition",
  lg: "inline-block border border-white/50 text-white px-10 py-4 rounded font-semibold text-lg hover:bg-white/10 hover:border-white transition",
};

const secondaryOnLight: Record<Size, string> = {
  md: "inline-block border border-ink/25 text-ink px-8 py-3 rounded font-semibold hover:bg-ink/5 hover:border-ink/50 transition",
  lg: "inline-block border border-ink/25 text-ink px-10 py-4 rounded font-semibold text-lg hover:bg-ink/5 hover:border-ink/50 transition",
};

export function CtaPair({
  size = "md",
  on = "dark",
  className = "",
}: {
  size?: Size;
  on?: "dark" | "light";
  className?: string;
}) {
  return (
    <div className={`flex justify-center gap-4 flex-wrap ${className}`}>
      <a href={BUILD_LINK} className={primary[size]}>
        Build Your Agent
      </a>
      <a
        href={DEMO_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={on === "dark" ? secondaryOnDark[size] : secondaryOnLight[size]}
      >
        Schedule Your Consultation
      </a>
    </div>
  );
}

/** The closing section every interior page ends on. */
export function ClosingCta({
  heading = "Ready to Meet Your AI Real Estate Agent?",
  body = "Build your agent online in about fifteen minutes, or schedule a 30-minute consultation and we will show you exactly how it would be configured for your business.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section id="book-demo" className="grid-dark-section py-24 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-brand-tint font-semibold mb-4">
          Get Started
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{heading}</h2>
        <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto">
          {body}
        </p>
        <CtaPair size="lg" on="dark" />
      </div>
    </section>
  );
}
