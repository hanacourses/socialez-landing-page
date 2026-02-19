"use client";

import { useState, useCallback } from "react";
import { FEATURES_SECTION, TABS } from "./constants";

const TabIcons = {
  "brand-setup": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  "brand-voice": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  ),
  "ai-content": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  ),
  "publishing": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
  ),
} as const;

export const FeaturesTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = TABS[activeIndex];

  const handleTabClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleTabKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setActiveIndex(index);
      }
    },
    []
  );

  const handleCalButtonKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const button = e.currentTarget as HTMLButtonElement;
      button.click();
    }
  }, []);

  return (
    <section
      id="features"
      className="scroll-mt-20 bg-white px-4 py-16 sm:px-6 md:py-24"
      aria-labelledby="features-tabs-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span
            className="inline-block rounded-full bg-yellow px-4 py-1.5 text-sm font-normal text-ai-assist-text"
            aria-hidden
          >
            {FEATURES_SECTION.badge}
          </span>
          <h2
            id="features-tabs-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            {FEATURES_SECTION.heading}
          </h2>
          <p className="mt-3 text-base text-gray-600">
            {FEATURES_SECTION.subheading}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-12 items-center">
          {/* Left: Tabs */}
          <div className="flex flex-col">
            <div
              className="rounded-2xl border border-gray-200/80 bg-white p-2 shadow-card"
              role="tablist"
              aria-label="Feature steps"
            >
              {TABS.map((tab, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${tab.id}`}
                    id={`tab-${tab.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => handleTabClick(index)}
                    onKeyDown={(e) => handleTabKeyDown(e, index)}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                      isActive
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                        isActive ? "bg-primary text-white" : "bg-gray-200 text-gray-500"
                      }`}
                      aria-hidden
                    >
                      {TabIcons[tab.id]}
                    </span>
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Image / Gif (one per tab) */}
          <div className="flex min-h-[400px] flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-gray-50 shadow-card md:min-h-[480px]">
            <div className="relative flex-1 overflow-hidden">
              <img
                key={activeTab.id}
                src={activeTab.mediaUrl}
                alt={activeTab.mediaAlt}
                className="h-full w-full object-cover object-top transition-opacity duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="border-t border-gray-100 bg-white p-6">
              <h3 className="text-lg font-bold text-gray-900">{activeTab.label}</h3>
              <p className="mt-2 text-sm leading-snug text-gray-600">
                {activeTab.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
