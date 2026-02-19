"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import gsap from "gsap";
import { FEATURES_SECTION, TABS } from "./constants";
import { FEATURE_TAB_ICONS as TabIcons } from "@/constant/featureTabIcons";


const TAB_COUNT = TABS.length;

/** Throttle: min ms between scroll-driven tab changes (reduces sensitivity) */
const TAB_CHANGE_INTERVAL_MS = 600;

export const FeaturesTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const prevIndexRef = useRef(0);
  const lastScrollTabChangeAt = useRef(0);
  const touchStartY = useRef(0);

  activeIndexRef.current = activeIndex;
  const activeTab = TABS[activeIndex];

  // Entrance: animate in when section enters viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasEntered(true);
      },
      { threshold: 0.15, rootMargin: "0px" }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Wheel/touch: when section is in view, scroll changes tabs (no pin — no extra space). After last tab, page scrolls.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Only capture scroll when the section is fully (or nearly fully) visible on screen
    const isSectionFullyVisible = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const margin = Math.min(80, vh * 0.08);
      return rect.top <= margin && rect.bottom >= vh - margin;
    };

    const onWheel = (e: WheelEvent) => {
      if (!isSectionFullyVisible()) return;
      const idx = activeIndexRef.current;
      const now = Date.now();
      const canChange = now - lastScrollTabChangeAt.current >= TAB_CHANGE_INTERVAL_MS;

      if (e.deltaY > 0) {
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
      if (!isSectionFullyVisible()) return;
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

  // GSAP: page swipe up/down — animate a stable wrapper (no key) to avoid removeChild conflicts
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const prevIndex = prevIndexRef.current;
    const isForward = activeIndex > prevIndex;
    prevIndexRef.current = activeIndex;

    if (prevIndex === activeIndex) {
      gsap.set(panel, { yPercent: 0 });
      return;
    }

    const fromYPercent = isForward ? 100 : -100;
    gsap.fromTo(
      panel,
      { yPercent: fromYPercent },
      {
        yPercent: 0,
        duration: 0.6,
        ease: "power3.out",
        overwrite: true,
      }
    );

    return () => {
      if (panel && document.contains(panel)) gsap.killTweensOf(panel);
    };
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

  const handleCalButtonKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const button = e.currentTarget as HTMLButtonElement;
      button.click();
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="scroll-mt-20 min-h-screen bg-white"
      aria-labelledby="features-tabs-heading"
    >
      {/* One viewport: sticky so content stays visible; wheel/touch switch tabs, page scrolls only after last tab */}
      <div className="sticky top-0 z-10 flex min-h-screen flex-col justify-center px-12 py-16 sm:px-12 md:py-24 items-center">
        <div className="p-8 border rounded-3xl  w-full">
          {/* Header with entrance animation */}
          <div
            className={`max-w-2xl transition-all duration-700 ease-out ${hasEntered
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
              }`}
          >
            <span
              className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-normal text-gray-900"
              aria-hidden
            >
              {FEATURES_SECTION.badge}
            </span>
            <h2
              id="features-tabs-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              {FEATURES_SECTION.heading}
            </h2>
            <p className="mt-3 text-base text-gray-600">
              {FEATURES_SECTION.subheading}
            </p>
          </div>

          <div
            className={`mt-12 grid gap-8 transition-all duration-700 ease-out delay-200 lg:grid-cols-[320px_1fr] lg:gap-12 lg:items-center ${hasEntered
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
              }`}
          >
            {/* Left: Tabs — fixed while scrolling (parent is sticky) */}
            <div className="flex flex-col">
              <div
                className="rounded-2xl border border-gray-200/80 bg-[#F1F4F8] p-2 shadow-[0_4px_14px_rgba(0,0,0,0.06)] flex flex-col gap-2 py-4"
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
                      className={`flex w-full items-center gap-3 rounded-xl px-4 py-1 text-left transition-colors focus:outline-none text-slate-500 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${isActive
                        ? " bg-white/90 shadow-xl font-bold text-md text-slate-900!"
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
                      <span className="font-medium">{tab.label}</span>
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
                  className="flex h-full"
                >
                  <div className="border-t border-gray-100 bg-white p-6 flex flex-col gap-2 justify-center">
                    <span className="text-2xl text-[#0172F4] p-2 w-10 h-10 flex items-center justify-center bg-linear-to-b from-white to-slate-200 shadow rounded-lg">{TabIcons[activeTab.id]}</span>
                    <h3 className="text-lg font-bold text-gray-900">{activeTab.label}</h3>
                    <p className="mt-2 text-sm leading-snug text-gray-600">
                      {activeTab.description}
                    </p>
                  </div>
                  <div className="relative  shrink-0 overflow-hidden flex items-center object-cover justify-center bg-white p-6">
                    <img className="w-full h-full object-top object-cover rounded-xl" src="./featureTabsbg.png" alt="" />
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
