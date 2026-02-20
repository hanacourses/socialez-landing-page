"use client";

import { useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

const SMOOTH_DURATION = 1.2;
const SMOOTH_TOUCH = 0.1;

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export const SmoothScrollProvider = ({ children }: SmoothScrollProviderProps) => {
  useEffect(() => {
    const wrapper = document.getElementById("smooth-wrapper");
    const content = document.getElementById("smooth-content");

    if (!wrapper || !content) return;

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: SMOOTH_DURATION,
      smoothTouch: SMOOTH_TOUCH,
      effects: true,
      normalizeScroll: true,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div
      id="smooth-wrapper"
      className="fixed inset-0 overflow-hidden"
      aria-hidden={false}
    >
      <div id="smooth-content" className="will-change-transform">
        {children}
      </div>
    </div>
  );
};
