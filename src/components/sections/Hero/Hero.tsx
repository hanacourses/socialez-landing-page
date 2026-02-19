"use client";

import Button from "@/components/UI/Button";

const HERO = {
  heading: "Social media Made easy",
  description:
    "Create, schedule, publish, and track your social media from one simple, AI-powered workspace.",
  ctaPrimary: "Start free trial",
  ctaPrimaryHref: "#signup",
  ctaSecondary: "Book a 15-minute setup call",
  ctaSecondaryHref: "#book-call",
} as const;

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, color-mix(in srgb, var(--color-primary) 25%, transparent) 0%, var(--background) 100%), url(/bg.png)",
        backgroundSize: "100% 100%, cover",
        backgroundPosition: "0 0, center",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
      aria-labelledby="hero-heading"
    >
      <div className="relative mx-auto flex w-full min-w-0 max-w-7xl flex-col items-center px-4 pt-16 pb-8 text-center sm:px-6 md:pt-36">
        <h1
          id="hero-heading"
          className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
        >
          {HERO.heading}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600 sm:text-xl">
          {HERO.description}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href={HERO.ctaPrimaryHref} variant="primary">
            {HERO.ctaPrimary}
          </Button>
          <Button href={HERO.ctaSecondaryHref} variant="outline">
            {HERO.ctaSecondary}
          </Button>
        </div>

        {/* Dashboard preview - floats below hero with shadow */}
        <div className="relative mt-12 w-full max-w-5xl px-2 sm:px-4">
          <div className="overflow-hidden rounded-2xl shadow-1xl ring-1 ring-black/5">
            <img
              src="/dashboardImg2.png"
              alt="SocialEZ dashboard preview"
              width={1200}
              height={720}
              className="w-full object-contain"
              loading="eager"
              decoding="async"
            />
          </div>
          
          
        </div>
      </div>
    </section>
  );
};
