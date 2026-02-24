"use client";

import CtaButton from "@/components/UI/CtaButton";
import { useRef, useState, useEffect } from "react";

const HERO = {
  heading: "Social media Made easy",
  description:
    "Create, schedule, publish, and track your social media from one simple, AI-powered workspace.",
  ctaPrimary: "Start free trial",
  ctaPrimaryHref: "#signup",
  ctaSecondary: "Book a 15-minute setup call",
} as const;

export const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasAnimated(true);
      },
      { threshold: 0.15, rootMargin: "0px" }
    );
    observer.observe(heading);
    return () => observer.disconnect();
  }, []);

  // Split heading into words
  const words = HERO.heading.split(" ");

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] overflow-hidden bg-background bg-linear-to-b from-primary/40 via-primary/10 to-background"
      aria-labelledby="hero-heading"
    // style={{
    //   background:
    //     "linear-gradient(to bottom, color-mix(in srgb, var(--color-primary) 25%, transparent) 0%, var(--background) 100%)",
    // }}
    >
      {/* Background image - absolute layer; subtle parallax via ScrollSmoother */}
      <div
        className="absolute inset-0 z-0 bg-contain"
        style={{ backgroundImage: "url(/bg.png)" }}
        data-speed="0.6"
        aria-hidden
      />
      <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-b from-white/90 via-white/50 to-transparent z-1" aria-hidden />
      <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-7xl flex-col items-center px-4 pt-28 pb-8 text-center sm:px-6 md:pt-36">
        <h1
          ref={headingRef}
          id="hero-heading"
          className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl max-w-lg leading-[1.1] mx-auto"
          style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
        >
          {words.map((word, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-700 ease-out ${
                hasAnimated ? "opacity-100" : "translate-y-20 opacity-0"
              }`}
              style={{
                transitionDelay: hasAnimated ? `${index * 0.12}s` : "0ms",
                transform: hasAnimated ? "translateY(0)" : "translateY(80px)",
              }}
            >
              {word}
              {index < words.length - 1 && "\u00A0"}
            </span>
          ))}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-gray-600 sm:text-xl">
          {HERO.description}
        </p>

        <CtaButton />

        {/* Dashboard preview - floats below hero with shadow */}
        <div className="relative mt-12 w-full max-w-5xl px-2 sm:px-4">
          <div className="overflow-hidden rounded-2xl shadow-1xl ring-1 ring-black/5">
            <img
              src="/dashboardImg2.png"
              alt="SocialEZ dashboard preview"
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
