"use client";

import CtaButton from "@/components/UI/CtaButton";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/UI/Button";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const words = wordsRef.current.filter(Boolean);
    if (words.length === 0) return;

    // Set initial state
    gsap.set(words, {
      opacity: 0,
      y: 80,
      rotationX: -90,
    });

    // Create timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heading,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    // Animate words on scroll
    tl.to(words, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: {
        amount: 0.7,
        from: "start",
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === heading) {
          trigger.kill();
        }
      });
    };
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
          {words.map((word, index) => (
            <span
              key={index}
              ref={(el) => {
                if (el) wordsRef.current[index] = el;
              }}
              className="inline-block"
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
