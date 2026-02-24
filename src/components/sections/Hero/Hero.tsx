"use client";

import CtaButton from "@/components/UI/CtaButton";
import { useRef, useEffect, useState } from "react";
import Button from "@/components/UI/Button";

// We'll use IntersectionObserver instead of GSAP ScrollTrigger

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
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(heading);
    return () => obs.disconnect();
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
      <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-b from-white/90 via-white/50 to-transparent"></div>
      <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-7xl flex-col items-center px-4  pb-8 text-center sm:px-6 pt-32"

      >
        <h1
          ref={headingRef}
          id="hero-heading"
          style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
          className=" font-bold! max-w-lg leading-[1.1] mx-auto text-gray-900 text-4xl md:text-7xl"
        >
          {words.map((word, index) => {
            const delay = `${index * 0.07}s`;
            const common = {
              transitionProperty: "transform, opacity",
              transitionDuration: "0.9s",
              transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
              transitionDelay: delay,
              display: "inline-block",
            } as React.CSSProperties;
            const style = revealed
              ? { ...common, opacity: 1, transform: "translateY(0) rotateX(0)" }
              : { ...common, opacity: 0, transform: "translateY(80px) rotateX(-90deg)" };

            return (
              <span
                key={index}
                ref={(el) => {
                  if (el) wordsRef.current[index] = el;
                }}
                style={style}
              >
                {word}
                {index < words.length - 1 && "\u00A0"}
              </span>
            );
          })}
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
