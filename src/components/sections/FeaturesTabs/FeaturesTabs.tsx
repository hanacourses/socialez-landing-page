"use client";

import { useState, useCallback, useRef, useEffect, useLayoutEffect } from "react";
import { FEATURES_SECTION, TABS } from "./constants";
import { FEATURE_TAB_ICONS as TabIcons } from "@/constant/featureTabIcons";


const TAB_COUNT = TABS.length;

/** Throttle: min ms between scroll-driven tab changes (reduces sensitivity) */
const TAB_CHANGE_INTERVAL_MS = 600;

export const FeaturesTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const tabsListRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const prevIndexRef = useRef(0);
  const lastScrollTabChangeAt = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  activeIndexRef.current = activeIndex;
  const activeTab = TABS[activeIndex];

  // Wheel/touch: when section is in view, block page scroll until user has passed through all tabs (one per interval); then allow next section.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Capture scroll when section occupies most of the viewport so we can force tab sequence before next section
    const isSectionInView = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const overlap = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
      return overlap >= vh * 0.6;
    };

    const onWheel = (e: WheelEvent) => {
      if (!isSectionInView()) return;
      const idx = activeIndexRef.current;
      const now = Date.now();
      const canChange = now - lastScrollTabChangeAt.current >= TAB_CHANGE_INTERVAL_MS;

      if (e.deltaY > 0) {
        // Scroll down: block page scroll until we're on the last tab so user must pass through all tabs
        if (idx < TAB_COUNT - 1) {
          e.preventDefault();
          if (canChange) {
            lastScrollTabChangeAt.current = now;
            setActiveIndex((i) => Math.min(TAB_COUNT - 1, i + 1));
          }
        }
      } else if (e.deltaY < 0) {
        if (idx > 0) {
          e.preventDefault();
          if (canChange) {
            lastScrollTabChangeAt.current = now;
            setActiveIndex((i) => Math.max(0, i - 1));
          }
        }
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!isSectionInView()) return;
      const now = Date.now();
      if (now - lastScrollTabChangeAt.current < TAB_CHANGE_INTERVAL_MS) return;
      const endY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - endY;
      const idx = activeIndexRef.current;
      if (Math.abs(diff) < 60) return;
      lastScrollTabChangeAt.current = now;
      if (diff > 0) {
        if (idx < TAB_COUNT - 1) setActiveIndex((i) => Math.min(TAB_COUNT - 1, i + 1));
      } else {
        if (idx > 0) setActiveIndex((i) => Math.max(0, i - 1));
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  // Simple CSS transform animation (replaces GSAP)
  useLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const prev = prevIndexRef.current;
    const isForward = activeIndex > prev;
    prevIndexRef.current = activeIndex;

    // No-op if same index
    if (prev === activeIndex) {
      panel.style.transition = "";
      panel.style.transform = "translateY(0)";
      return;
    }

    const from = isForward ? "100%" : "-100%";
    // Prepare starting position without transition
    panel.style.transition = "none";
    panel.style.transform = `translateY(${from})`;

    // Trigger reflow then animate to 0
    requestAnimationFrame(() => {
      panel.style.transition = "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
      panel.style.transform = "translateY(0)";
    });

    // cleanup: remove inline transition after animation
    const t = setTimeout(() => {
      if (panel) panel.style.transition = "";
    }, 700);
    return () => clearTimeout(t);
  }, [activeIndex]);

  const handleTabClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleTabKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleTabClick(index);
      }
    },
    [handleTabClick]
  );

  // Ensure active tab is visible in horizontal overflow on small screens
  useEffect(() => {
    if (typeof window === "undefined") return;
    const lgBreakpoint = 1024; // Tailwind lg breakpoint
    if (window.innerWidth >= lgBreakpoint) return;
    const tabsList = tabsListRef.current;
    if (!tabsList) return;
    const activeEl = tabsList.querySelector(`#tab-${activeTab.id}`) as HTMLElement | null;
    if (!activeEl) return;
    // Smoothly scroll active tab into view (centered)
    try {
      activeEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    } catch {
      // Fallback: adjust scrollLeft to center element
      const rect = activeEl.getBoundingClientRect();
      const containerRect = tabsList.getBoundingClientRect();
      const offset = rect.left - containerRect.left - (containerRect.width / 2 - rect.width / 2);
      tabsList.scrollBy({ left: offset, behavior: "smooth" });
    }
  }, [activeIndex, activeTab.id]);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="scroll-mt-20 min-h-screen bg-white"
      aria-labelledby="features-tabs-heading"
    >
      <style>{`.tabs-scrollbar-hide{ -ms-overflow-style: none; scrollbar-width: none; scrollbar-color: transparent transparent; } .tabs-scrollbar-hide::-webkit-scrollbar{ height: 8px; width: 8px; } .tabs-scrollbar-hide::-webkit-scrollbar-track{ background: transparent; } .tabs-scrollbar-hide::-webkit-scrollbar-thumb{ background: transparent; border-radius: 8px; }`}</style>
      {/* Sticky: scroll down cycles through all tabs (blocked until last tab), then page scrolls to next section */}
      <div className="sticky top-0 z-10 flex min-h-screen flex-col justify-center lg:px-12  md:px-6 px-2 items-center">
        <div className="lg:p-8 md:p-4 p-2 border border-slate-100 rounded-3xl  w-full">
          <div className="max-w-2xl">
            <span
              className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-normal text-gray-900"
              aria-hidden
            >
              {FEATURES_SECTION.badge}
            </span>
            <h2
              id="features-tabs-heading"
              className="mt-4 text-[24px] font-bold tracking-tight text-gray-900 md:text-[32px]"
            >
              {FEATURES_SECTION.heading}
            </h2>
            <p className="mt-3 text-base text-gray-600">
              {FEATURES_SECTION.subheading}
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-12 lg:items-center">
            {/* Left: Tabs — fixed while scrolling (parent is sticky) */}
            <div className="flex flex-col overflow-x-auto tabs-scrollbar-hide">
              <div
                ref={tabsListRef}
                className="rounded-2xl border border-gray-200/80 bg-[#F1F4F8] p-2 shadow-[0_4px_14px_rgba(0,0,0,0.06)] flex flex-row items-center lg:gap-2 gap-0 py-4 overflow-x-auto lg:flex-col lg:items-stretch"
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
                      className={`flex w-auto lg:w-full items-center gap-3 rounded-xl lg:px-4  px-2 py-1 text-left transition-colors focus:outline-none text-slate-500 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 min-w-[190px] ${isActive
                        ? " bg-white/90 shadow-xl font-bold text-md text-slate-900! "
                        : ""
                        }`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${isActive ? " text-slate-900" : " text-gray-500"
                          }`}
                        aria-hidden
                      >
                        {TabIcons[tab.id]}
                      </span>
                      <span className="font-medium text-sm lg:text-base">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Stable wrapper (ref, no key) — GSAP animates it; inner content switches by tab to avoid removeChild */}
            <div className="flex min-h-[400px] overflow-hidden rounded-2xl border border-gray-200/80 bg-gray-50 shadow-[0_4px_14px_rgba(0,0,0,0.06)] md:min-h-[300px] w-full ">
              <div className="relative flex-1 overflow-hidden">
                <div
                  ref={panelRef}
                  id={`panel-${activeTab.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${activeTab.id}`}
                  className="flex h-full flex-col xl:flex-row"
                >
                  <div className="border-t border-gray-100 bg-white lg:p-6 p-4 flex flex-col gap-2 justify-center">
                    <span className="text-2xl text-[#0172F4] p-2 w-10 h-10 flex items-center justify-center bg-linear-to-b from-white to-slate-200 shadow rounded-lg">{TabIcons[activeTab.id]}</span>
                    <h3 className="text-lg font-bold text-gray-900">{activeTab.label}</h3>
                    <p className="mt-2 text-sm leading-snug text-gray-600">
                      {activeTab.description}
                    </p>
                  </div>
                  <div className="relative  shrink-0 overflow-hidden flex items-center object-cover justify-center bg-white xl:p-6 py-1 p-4">

                    <div className="w-full  xl:h-[350px] lg:h-[250px] h-[200px] rounded-3xl overflow-hidden relative">
                      <div className="absolute lg:w-3/4 lg:h-3/4 w-full h-full  rounded-t-2xl  bg-white/30 border-2 border-white bottom-0 left-1/2 -translate-x-1/2 p-4 overflow-hidden z-10">
                        <div className="flex items-start justify-start gap-2 pb-2">{Array.from({ length: 3 }).map((_, index) => (
                          <span key={index} className="w-3 h-3 rounded-full bg-white" ></span>
                        ))}</div>
                        <div className="bg-white w-full h-full rounded-t-2xl overflow-hidden ">
                          {activeTab?.mediaUrl &&
                            (/\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(activeTab.mediaUrl) ? (
                              <video
                                className="w-full h-full object-top object-cover"
                                src={activeTab.mediaUrl}
                                autoPlay
                                muted
                                loop
                                playsInline
                                aria-hidden
                              />
                            ) : (
                              <img
                                className="w-full h-full object-top object-contain"
                                src={activeTab.mediaUrl}
                                alt={activeTab.mediaAlt || ""}
                                loading="lazy"
                                decoding="async"
                              />
                            ))}
                        </div>
                      </div>
                      <img className="w-full h-full object-top object-cover opacity-50 scale-150" src="./featureTabsbg.png" alt="" />
                    </div>
                    {/* <img
                      key={activeTab.id}
                      src={activeTab.mediaUrl}
                      alt={activeTab.mediaAlt}
                      className="h-[250px] w-full object-cover object-top rounded-xl"
                      loading="lazy"
                      decoding="async"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};