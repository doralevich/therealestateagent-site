// One place for the things that appear on every page and change rarely.

export const SITE_URL = "https://therealestateagent.ai";
export const SITE_NAME = "The Real Estate Agent";

/** Self-serve. The questionnaire and the checkout both run on ApolloClaw, so every
 *  "Build Your Agent" CTA points there. See DECISIONS.md in apolloclaw2. */
export const BUILD_LINK = "https://www.apolloclaw.ai/build/real-estate";

/** Consultation. cal.com is canonical - the old calendly link is stale. */
export const DEMO_LINK = "https://cal.com/therealdaveo/apollo-claw";

export const PARENT_SITE = "https://apolloclaw.ai";
export const CONTACT_EMAIL = "hello@apolloclaw.ai";
export const CONTACT_PHONE = "(917) 363-5487";

export const NAV_LINKS = [
  { label: "What It Does", href: "/how-it-works" },
  { label: "Who It's For", href: "/for-agents" },
  { label: "Results", href: "/#results" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
];

/** The audience pages, used by the nav dropdown, the footer, and the sitemap. */
export const AUDIENCES = [
  { slug: "for-agents", label: "For Solo Agents" },
  { slug: "for-teams", label: "For Teams" },
  { slug: "for-brokerages", label: "For Brokerages" },
  { slug: "for-property-managers", label: "For Property Managers" },
];

/** Breadcrumb JSON-LD for an interior page. */
export function breadcrumb(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}

/** The metadata every interior page repeats, minus the words. */
export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}) {
  const url = `${SITE_URL}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    ...(opts.keywords ? { keywords: opts.keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      type: "website" as const,
      title: opts.title,
      description: opts.description,
      url,
      images: [
        { url: `${SITE_URL}/images/og-image.png`, width: 1200, height: 630, alt: SITE_NAME },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: opts.title,
      description: opts.description,
      images: [`${SITE_URL}/images/og-image.png`],
    },
  };
}
