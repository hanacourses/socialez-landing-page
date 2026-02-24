"use client";

import type { ReactNode } from "react";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export const SmoothScrollProvider = ({ children }: SmoothScrollProviderProps) => {
  return <>{children}</>;
};
