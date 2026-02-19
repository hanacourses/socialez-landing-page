"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "./Navbar/Logo";

const SECTIONS_LINKS = [
  { label: "AI Assist", href: "#ai-assist" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Scheduling", href: "#scheduling" },
  { label: "Analytics", href: "#analytics" },
  { label: "Conversations", href: "#conversations" },
  { label: "Pricing", href: "#pricing" },
] as const;

const FEATURES_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
] as const;

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0C11.863 0.021 13.545 0.479 15.048 1.373C16.533 2.25 17.768 3.492 18.635 4.982C19.524 6.494 19.979 8.187 20 10.061C19.947 12.625 19.139 14.815 17.574 16.63C16.009 18.446 14.006 19.569 11.931 20V12.812H13.892L14.336 9.987H11.366V8.137C11.35 7.753 11.471 7.376 11.708 7.074C11.946 6.771 12.364 6.612 12.963 6.597H14.756V4.122C14.73 4.114 14.486 4.081 14.024 4.024C13.499 3.963 12.971 3.93 12.443 3.926C11.248 3.931 10.303 4.269 9.607 4.938C8.912 5.606 8.556 6.574 8.541 7.84V9.987H6.282V12.812H8.541V20C5.994 19.569 3.991 18.446 2.426 16.63C0.861 14.815 0.053 12.625 0 10.061C0.021 8.187 0.476 6.494 1.365 4.982C2.232 3.492 3.467 2.25 4.952 1.373C6.455 0.479 8.137 0.021 10 0Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.307 0C12.498 0 14.219 0 15.562 0.181C16.939 0.366 18.031 0.753 18.889 1.611C19.747 2.469 20.134 3.561 20.319 4.938C20.5 6.281 20.5 8.002 20.5 10.193V10.307C20.5 12.498 20.5 14.219 20.319 15.562C20.134 16.939 19.747 18.031 18.889 18.889C18.031 19.747 16.939 20.134 15.562 20.319C14.219 20.5 12.498 20.5 10.307 20.5H10.193C8.002 20.5 6.281 20.5 4.938 20.319C3.561 20.134 2.469 19.747 1.611 18.889C0.753 18.031 0.366 16.939 0.181 15.562C0 14.219 0 12.498 0 10.307V10.193C0 8.002 0 6.281 0.181 4.938C0.366 3.561 0.753 2.469 1.611 1.611C2.469 0.753 3.561 0.366 4.938 0.181C6.281 0 8.002 0 10.193 0H10.307ZM10.25 5.75C7.765 5.75 5.75 7.765 5.75 10.25C5.75 12.735 7.765 14.75 10.25 14.75C12.735 14.75 14.75 12.735 14.75 10.25C14.75 7.765 12.735 5.75 10.25 5.75ZM15.762 5.75C16.312 5.75 16.758 5.302 16.758 4.75C16.758 4.198 16.312 3.75 15.762 3.75H15.753C15.204 3.75 14.758 4.198 14.758 4.75C14.758 5.302 15.204 5.75 15.753 5.75H15.762Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.273 0H2.727C2.004 0 1.31 0.287 0.799 0.799C0.287 1.31 0 2.004 0 2.727V17.273C0 17.996 0.287 18.69 0.799 19.201C1.31 19.713 2.004 20 2.727 20H17.273C17.996 20 18.69 19.713 19.201 19.201C19.713 18.69 20 17.996 20 17.273V2.727C20 2.004 19.713 1.31 19.201 0.799C18.69 0.287 17.996 0 17.273 0ZM6.818 15.827C6.818 15.883 6.807 15.938 6.786 15.989C6.765 16.04 6.734 16.087 6.695 16.126C6.656 16.165 6.609 16.197 6.558 16.218C6.507 16.239 6.452 16.25 6.397 16.25H4.6C4.544 16.25 4.489 16.239 4.438 16.218C4.387 16.197 4.34 16.166 4.301 16.127C4.261 16.087 4.23 16.041 4.209 15.989C4.188 15.938 4.177 15.883 4.177 15.827V8.296C4.177 8.183 4.222 8.076 4.301 7.997C4.38 7.917 4.488 7.873 4.6 7.873H6.397C6.508 7.873 6.616 7.918 6.695 7.997C6.774 8.076 6.818 8.184 6.818 8.296V15.827ZM5.498 7.159C5.161 7.159 4.831 7.059 4.551 6.872C4.27 6.685 4.052 6.418 3.923 6.107C3.794 5.795 3.76 5.453 3.826 5.122C3.892 4.791 4.054 4.488 4.292 4.249C4.531 4.011 4.835 3.849 5.165 3.783C5.496 3.717 5.839 3.751 6.15 3.88C6.462 4.009 6.728 4.227 6.915 4.508C7.102 4.788 7.202 5.117 7.202 5.455C7.202 5.907 7.023 6.34 6.703 6.66C6.383 6.98 5.95 7.159 5.498 7.159ZM16.209 15.857C16.209 15.908 16.199 15.959 16.18 16.006C16.16 16.053 16.132 16.096 16.096 16.132C16.059 16.168 16.017 16.197 15.969 16.216C15.922 16.236 15.871 16.246 15.82 16.246H13.889C13.838 16.246 13.787 16.236 13.74 16.216C13.692 16.197 13.65 16.168 13.613 16.132C13.577 16.096 13.549 16.053 13.529 16.006C13.51 15.959 13.5 15.908 13.5 15.857V12.328C13.5 11.801 13.654 10.019 12.122 10.019C10.934 10.019 10.692 11.239 10.644 11.786V15.861C10.644 15.964 10.604 16.062 10.532 16.134C10.461 16.207 10.363 16.249 10.261 16.25H8.395C8.344 16.25 8.294 16.24 8.247 16.22C8.2 16.201 8.157 16.172 8.121 16.136C8.085 16.1 8.056 16.057 8.037 16.01C8.018 15.963 8.008 15.912 8.008 15.861V8.263C8.008 8.212 8.018 8.161 8.037 8.114C8.056 8.067 8.085 8.024 8.121 7.988C8.157 7.952 8.2 7.923 8.247 7.904C8.294 7.884 8.344 7.874 8.395 7.874H10.261C10.364 7.874 10.463 7.915 10.536 7.988C10.609 8.061 10.65 8.159 10.65 8.263V8.919C11.091 8.257 11.744 7.748 13.139 7.748C16.227 7.748 16.207 10.632 16.207 12.216L16.209 15.857Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com",
    icon: (
      <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.889 1.611C19.747 2.469 20.134 3.561 20.319 4.938C20.5 6.281 20.5 8.002 20.5 10.193V10.307C20.5 12.498 20.5 14.219 20.319 15.562C20.134 16.939 19.747 18.031 18.889 18.889C18.031 19.747 16.939 20.134 15.562 20.319C14.219 20.5 12.498 20.5 10.307 20.5H10.193C8.002 20.5 6.281 20.5 4.938 20.319C3.561 20.134 2.469 19.747 1.611 18.889C0.753 18.031 0.366 16.939 0.181 15.562C0 14.219 0 12.498 0 10.307V10.193C0 8.002 0 6.281 0.181 4.938C0.366 3.561 0.753 2.469 1.611 1.611C2.469 0.753 3.561 0.366 4.938 0.181C6.281 0 8.002 0 10.193 0H10.307C12.498 0 14.219 0 15.562 0.181C16.939 0.366 18.031 0.753 18.889 1.611ZM5.25 4.5C4.968 4.5 4.71 4.658 4.582 4.909C4.454 5.159 4.477 5.461 4.642 5.689L8.462 10.978L4.72 14.72C4.427 15.013 4.427 15.487 4.72 15.78C5.013 16.073 5.487 16.073 5.78 15.78L9.351 12.209L11.864 15.689C12.005 15.884 12.231 16 12.472 16H15.25C15.532 16 15.79 15.842 15.918 15.591C16.046 15.341 16.023 15.039 15.858 14.811L12.038 9.522L15.78 5.78C16.073 5.487 16.073 5.013 15.78 4.72C15.487 4.427 15.013 4.427 14.72 4.72L11.149 8.291L8.636 4.811C8.495 4.616 8.269 4.5 8.028 4.5H5.25Z" fill="currentColor" />
      </svg>

    ),
  },
] as const;

export default function Footer() {
  return (
    <footer id="contacts" className="bg-white border-t border-gray-200 w-full justify-center items-center flex ">
      <div className="w-full py-12 md:py-16 max-w-7xl mx-auto">
        <div className="w-full flex justify-between items-start gap-8">
          {/* Column 1: Logo, description, social */}
          <div className="w-full flex flex-col gap-4 justify-start items-center">
            <Logo height={12} />
            <p className="max-w-md text-center text-base leading-relaxed text-gray-700">
              AI-powered social media management for creating, scheduling,
              tracking, and engaging — all from one place.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xl text-muted transition-colors hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-label={label}
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center [&>svg]:h-full [&>svg]:w-full" aria-hidden>
                    {icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Sections */}
          {/* <div className="w-full">
            <h3 className="mb-4 text-lg font-bold text-gray-900">
              Sections
            </h3>
            <ul className="space-y-3">
              {SECTIONS_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-base text-gray-700 transition-colors hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded px-1"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Column 3: Features */}
          {/* <div className="w-1/2">
            <h3 className="mb-4 text-lg font-bold text-gray-900">
              Features
            </h3>
            <ul className="space-y-3">
              {FEATURES_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-base text-gray-700 transition-colors hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded px-1"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        <div className="mt-12 flex justify-center items-center border-t border-gray-200 pt-8 md:mt-16">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} SocialEZ All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
