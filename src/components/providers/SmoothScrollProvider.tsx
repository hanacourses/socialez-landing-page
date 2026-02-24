"use client";

import { type ReactNode } from "react";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

// No-op smooth scroll provider (removed GSAP ScrollSmoother)
export const SmoothScrollProvider = ({ children }: SmoothScrollProviderProps) => {
  return (
    <div id="smooth-wrapper" className="" aria-hidden={false}>
      <div id="smooth-content">{children}</div>
    </div>
  );
};
