"use client";

import { useState } from "react";
import Link from "next/link";
import { BUILD_LINK, DEMO_LINK, NAV_LINKS, AUDIENCES } from "@/lib/site";

// The nav carries five links plus both CTAs, so everything scales with the viewport and
// refuses to wrap. Below the md breakpoint only the Build button stays in the bar.

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="flex items-center shrink-0" aria-label="The Real Estate Agent home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/the-real-estate-agent-wordmark.svg"
              alt="The Real Estate Agent"
              className="w-[clamp(9rem,20vw,15rem)] max-h-12 h-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-[clamp(0.75rem,1.6vw,1.75rem)]">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[clamp(0.72rem,1.05vw,0.875rem)] font-medium text-ink hover:text-brand transition whitespace-nowrap"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={DEMO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[clamp(0.72rem,1.05vw,0.875rem)] font-medium text-ink hover:text-brand transition whitespace-nowrap"
            >
              Schedule a Consultation
            </a>
            <a
              href={BUILD_LINK}
              className="shrink-0 bg-brand text-white px-[clamp(0.6rem,1.2vw,1.25rem)] py-2 rounded font-semibold text-[clamp(0.72rem,1.05vw,0.875rem)] hover:bg-brand-dark transition whitespace-nowrap"
            >
              Build Your Agent
            </a>
          </nav>

          <button
            className="md:hidden p-2"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-gray-100 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold pt-2">
              Who It&apos;s For
            </p>
            {AUDIENCES.map((a) => (
              <Link
                key={a.slug}
                href={`/${a.slug}`}
                className="text-sm font-medium text-ink pl-3"
                onClick={() => setOpen(false)}
              >
                {a.label}
              </Link>
            ))}
            <a
              href={BUILD_LINK}
              className="bg-brand text-white px-5 py-2 rounded font-semibold text-sm text-center mt-2"
              onClick={() => setOpen(false)}
            >
              Build Your Agent
            </a>
            <a
              href={DEMO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 text-ink px-5 py-2 rounded font-semibold text-sm text-center"
              onClick={() => setOpen(false)}
            >
              Schedule a Consultation
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
