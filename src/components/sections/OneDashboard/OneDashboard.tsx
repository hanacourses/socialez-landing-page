"use client";

import { useState } from "react";
import { SECTION, CARD_1, CARD_2, CARD_3, SOCIAL_PLATFORMS, SECTION_IMAGES } from "./constants";

const IconPerson = () => (
  <svg className="h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const IconEnvelope = () => (
  <svg className="h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const IconChevronDown = () => (
  <svg className="h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const IconBriefcase = () => (
  <svg className="h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const IconLock = () => (
  <svg className="h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const STEP_LABELS = ["Step One", "Step Two", "Step Three"] as const;

const CardBase = ({
  stepIndex,
  children,
  title,
  description,
}: {
  stepIndex: number;
  children: React.ReactNode;
  title: string;
  description: string;
}) => (
  <article className="flex flex-col">
    <span
      className="mb-2 block text-sm font-medium italic text-blue-600"
      aria-hidden
    >
      {STEP_LABELS[stepIndex]}
    </span>
    <div className="flex flex-1 flex-col rounded-2xl border border-gray-200/80 bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.06)]">
      {children}
      <h3 className="mt-6 text-lg font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-snug text-gray-600">{description}</p>
    </div>
  </article>
);

const ConnectCardFallback = () => (
  <div className="relative flex min-h-[220px] flex-col items-center justify-center">
    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_4px_14px_rgba(37,99,235,0.4)]">
      <img
        src="/socialez_logo.png"
        alt=""
        className="h-10 w-10 object-contain"
        aria-hidden
      />
    </div>
    <svg
      className="h-10 w-full max-w-[260px] shrink-0 text-gray-300"
      viewBox="0 0 260 40"
      fill="none"
      aria-hidden
    >
      <path
        d="M130 0 Q 30 22 0 40"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M130 0 Q 230 22 260 40"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
    <div className="mt-1 flex flex-wrap justify-center gap-4">
      {SOCIAL_PLATFORMS.map(({ name, color }) => (
        <div
          key={name}
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white ${color} text-white shadow-md`}
          title={name}
        >
          {name === "Facebook" && <span className="text-sm font-bold">f</span>}
          {name === "Instagram" && (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          )}
          {name === "Pinterest" && <span className="text-sm font-bold">P</span>}
          {name === "LinkedIn" && <span className="text-xs font-bold">in</span>}
          {name === "X" && <span className="text-sm font-bold">X</span>}
          {name === "YouTube" && (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          )}
        </div>
      ))}
    </div>
  </div>
);

const ChannelStatsFallback = () => (
  <div className="space-y-4">
    <p className="text-sm font-bold text-gray-900">{CARD_3.chartTitle}</p>
    <div className="relative h-36 w-full rounded-lg border border-gray-200 bg-gray-50/60">
      <div className="absolute left-0 top-0 flex h-full flex-col justify-between border-r border-gray-200 py-2 pr-2 text-[10px] text-gray-500">
        <span>40</span>
        <span>30</span>
        <span>20</span>
        <span>10</span>
        <span>0</span>
      </div>
      <div className="absolute inset-0 ml-8 flex flex-col justify-between">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-0 w-full border-b border-dashed border-gray-300"
          />
        ))}
      </div>
    </div>
    <div className="flex flex-wrap items-center justify-center gap-2">
      {SOCIAL_PLATFORMS.map(({ name, color }) => (
        <div
          key={name}
          className={`flex h-8 w-8 items-center justify-center rounded-full ${color} text-white text-[10px] font-bold shadow-sm`}
          title={name}
        >
          {name === "Facebook" && "f"}
          {name === "Instagram" && "ig"}
          {name === "Pinterest" && "P"}
          {name === "LinkedIn" && "in"}
          {name === "X" && "X"}
          {name === "YouTube" && "yt"}
        </div>
      ))}
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0A66C2] text-white shadow-sm" title="More">
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </div>
    </div>
  </div>
);

export const OneDashboard = () => {
  const [connectImgError, setConnectImgError] = useState(false);
  const [channelImgError, setChannelImgError] = useState(false);

  const useConnectImage = !connectImgError;
  const useChannelImage = !channelImgError;

  return (
    <section
      className="bg-white px-4 py-16 sm:px-6 md:py-24"
      aria-labelledby="one-dashboard-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-sky-100 px-4 py-1.5 text-sm font-medium text-sky-700">
            {SECTION.badge}
          </span>
          <h2
            id="one-dashboard-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            {SECTION.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600">
            {SECTION.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-8">
          {/* Card 1: Signup form */}
          <CardBase stepIndex={0} title={CARD_1.title} description={CARD_1.description}>
            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
              noValidate
            >
              <div className="grid grid-cols-2 gap-3">
                <label className="sr-only" htmlFor="first-name">First name</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2">
                    <IconPerson />
                  </span>
                  <input
                    id="first-name"
                    type="text"
                    placeholder="First name"
                    className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50/50 pl-10 pr-3 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    aria-label="First name"
                  />
                </div>
                <label className="sr-only" htmlFor="last-name">Last name</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2">
                    <IconPerson />
                  </span>
                  <input
                    id="last-name"
                    type="text"
                    placeholder="Last name"
                    className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50/50 pl-10 pr-3 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    aria-label="Last name"
                  />
                </div>
              </div>
              <label className="sr-only" htmlFor="email">Email address</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <IconEnvelope />
                </span>
                <input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50/50 pl-10 pr-3 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  aria-label="Email address"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <label className="sr-only" htmlFor="role">What describes you</label>
                <div className="relative">
                  <span className="absolute right-3 top-1/2 -translate-y-1/2">
                    <IconChevronDown />
                  </span>
                  <select
                    id="role"
                    className="h-10 w-full appearance-none rounded-lg border border-gray-200 bg-gray-50/50 pl-3 pr-10 text-sm text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    aria-label="What describes you"
                  >
                    <option value="">What Describes...</option>
                    <option value="creator">Creator</option>
                    <option value="business">Business</option>
                    <option value="agency">Agency</option>
                  </select>
                </div>
                <label className="sr-only" htmlFor="company">Company name</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2">
                    <IconBriefcase />
                  </span>
                  <input
                    id="company"
                    type="text"
                    placeholder="Company Name"
                    className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50/50 pl-10 pr-3 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    aria-label="Company name"
                  />
                </div>
              </div>
              <label className="sr-only" htmlFor="password">Password</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <IconLock />
                </span>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50/50 pl-10 pr-3 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  aria-label="Password"
                />
              </div>
              <button
                type="submit"
                className="mt-1 flex h-11 w-full items-center justify-center rounded-xl bg-blue-600 text-sm font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                {CARD_1.signupLabel}
              </button>
            </form>
          </CardBase>

          {/* Card 2: Connect accounts – use image from public or fallback */}
          <CardBase stepIndex={1} title={CARD_2.title} description={CARD_2.description}>
            {useConnectImage ? (
              <div className="relative min-h-[220px] w-full">
                <img
                  src={SECTION_IMAGES.connectCard}
                  alt="Connect your social accounts to SocialEZ"
                  className="h-auto w-full object-contain"
                  onError={() => setConnectImgError(true)}
                />
              </div>
            ) : (
              <ConnectCardFallback />
            )}
          </CardBase>

          {/* Card 3: Channel statistics – use image from public or fallback */}
          <CardBase stepIndex={2} title={CARD_3.title} description={CARD_3.description}>
            {useChannelImage ? (
              <div className="w-full">
                <img
                  src={SECTION_IMAGES.channelStatistics}
                  alt="Channel statistics across platforms"
                  className="h-auto w-full rounded-lg object-contain"
                  onError={() => setChannelImgError(true)}
                />
              </div>
            ) : (
              <ChannelStatsFallback />
            )}
          </CardBase>
        </div>
      </div>
    </section>
  );
};
