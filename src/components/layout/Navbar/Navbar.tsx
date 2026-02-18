"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { NAV_LINKS } from "./constants";

export const Navbar = () => {
  return (
    <nav
      className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 rounded-2xl bg-white px-6 py-3 shadow-md ring-1 ring-black/5"
      role="navigation"
      aria-label="Main navigation"
    >
      <Logo />

      <ul className="flex items-center gap-8" role="menubar">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label} role="none">
            <Link
              href={href}
              className="text-sm font-medium text-gray-800 transition-colors hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded px-1"
              role="menuitem"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="#signup"
        className="shrink-0 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        aria-label="Sign up"
      >
        Signup
      </Link>
    </nav>
  );
};
