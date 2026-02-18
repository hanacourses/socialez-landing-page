"use client";

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
      className="relative min-h-[85vh] overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #0172F440 0%, #FFFFFF 100%), url(/bg.png)",
        backgroundSize: "100% 100%, cover",
        backgroundPosition: "0 0, center",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
      aria-labelledby="hero-heading"
    >
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-16 pb-8 text-center sm:px-6 md:pt-36">
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
          <a
            href={HERO.ctaPrimaryHref}
            className="inline-flex h-12 min-w-[180px] items-center justify-center rounded-xl bg-blue-600 px-6 text-base font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            {HERO.ctaPrimary}
          </a>
          <a
            href={HERO.ctaSecondaryHref}
            className="inline-flex h-12 min-w-[220px] items-center justify-center rounded-xl border-2 border-blue-600 bg-white px-6 text-base font-medium text-blue-600 transition-colors hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            {HERO.ctaSecondary}
          </a>
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
          {/* Joint: pill button connects hero to card section */}
          
        </div>
      </div>
    </section>
  );
};
