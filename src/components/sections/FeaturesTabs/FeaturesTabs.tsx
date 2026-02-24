"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FEATURES_SECTION, TABS } from "./constants";
import { FEATURE_TAB_ICONS as TabIcons } from "@/constant/featureTabIcons";

const TAB_COUNT = TABS.length;

/** One scroll gesture ≈ one tab: accumulate wheel delta until this threshold, then change tab once */
const WHEEL_DELTA_THRESHOLD = 80;

export const FeaturesTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const tablistRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const prevIndexRef = useRef(0);
  const deltaAccumRef = useRef(0);
  const touchStartY = useRef(0);

  // Scroll-lock: when this section is in viewport, main page scroll is frozen; scroll input cycles tabs. Released when on last tab (scroll down) or first tab (scroll up).
  const isFullyInView = useInView(stickyRef, { amount: 0.85 });
  const isFullyInViewRef = useRef(false);
  isFullyInViewRef.current = isFullyInView;

  activeIndexRef.current = activeIndex;
  const activeTab = TABS[activeIndex];

  // Scroll-lock behavior: freeze page scroll when section is in view; map scroll to tab changes; release when all tabs done.
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (!isFullyInViewRef.current) {
        deltaAccumRef.current = 0;
        return;
      }
      const idx = activeIndexRef.current;

      if (e.deltaY > 0) {
        // Scroll down: lock and go to next tab until last tab, then allow page scroll
        if (idx < TAB_COUNT - 1) {
          e.preventDefault();
          deltaAccumRef.current += e.deltaY;
          if (deltaAccumRef.current >= WHEEL_DELTA_THRESHOLD) {
            setActiveIndex((i) => Math.min(TAB_COUNT - 1, i + 1));
            deltaAccumRef.current = 0;
          }
        }
      } else if (e.deltaY < 0) {
        // Scroll up: lock and go to previous tab until first tab, then allow page scroll
        if (idx > 0) {
          e.preventDefault();
          deltaAccumRef.current += e.deltaY;
          if (deltaAccumRef.current <= -WHEEL_DELTA_THRESHOLD) {
            setActiveIndex((i) => Math.max(0, i - 1));
            deltaAccumRef.current = 0;
          }
        }
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isFullyInViewRef.current) return;
      const idx = activeIndexRef.current;
      const currentY = e.touches[0]?.clientY;
      if (currentY == null) return;
      const diff = touchStartY.current - currentY;
      // Release lock: allow touch scroll when on last tab swiping down or first tab swiping up
      const onLastAndSwipeDown = idx >= TAB_COUNT - 1 && diff > 0;
      const onFirstAndSwipeUp = idx <= 0 && diff < 0;
      if (onLastAndSwipeDown || onFirstAndSwipeUp) return;
      e.preventDefault();
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!isFullyInViewRef.current) return;
      const endY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - endY;
      const idx = activeIndexRef.current;
      if (Math.abs(diff) < 60) return;
      if (diff > 0 && idx < TAB_COUNT - 1) {
        setActiveIndex((i) => Math.min(TAB_COUNT - 1, i + 1));
      } else if (diff < 0 && idx > 0) {
        setActiveIndex((i) => Math.max(0, i - 1));
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  // Panel slide direction: 1 = from below, -1 = from above, 0 = no slide (so initial is correct when tab changes)
  const panelDirection = activeIndex > prevIndexRef.current ? 1 : activeIndex < prevIndexRef.current ? -1 : 0;
  useEffect(() => {
    prevIndexRef.current = activeIndex;
  }, [activeIndex]);

  // On mobile: scroll active tab into view when it changes (horizontal tab list). Scroll only the tab list to avoid document horizontal scroll.
  useEffect(() => {
    const tablist = tablistRef.current;
    if (!tablist) return;
    const activeTabId = TABS[activeIndex]?.id;
    if (!activeTabId) return;
    const btn = tablist.querySelector(`#tab-${activeTabId}`) as HTMLElement | null;
    if (!btn) return;
    const listWidth = tablist.clientWidth;
    const btnLeft = btn.offsetLeft;
    const btnWidth = btn.offsetWidth;
    const scrollLeft = btnLeft - listWidth / 2 + btnWidth / 2;
    tablist.scrollTo({ left: Math.max(0, scrollLeft), behavior: "smooth" });
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
      className="scroll-mt-20 min-h-screen bg-white snap-start snap-always overflow-x-hidden"
      aria-labelledby="features-tabs-heading"
    >
      {/* Sticky: scroll cycles through tabs when section is in view */}
      <div
        ref={stickyRef}
        className="sticky top-0 z-10 flex min-h-screen flex-col justify-center lg:px-12 px-4 lg:py-16 py-8 sm:px-12 md:py-24 items-center"
      >
        <div className="md:p-8 md:border md:border-slate-100 rounded-3xl  w-full">
          {/* Header with framer-motion entrance */}
          <div className="md:flex items-center justify-start gap-4">
            <div>
              <img src="/AI-Assist.gif" alt="" className="md:w-[250px] w-full h-auto" />
            </div>
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.15, once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
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
            </motion.div>
          </div>

          <motion.div
            className="mt-12 grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-12 lg:items-center"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.15, once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            {/* Left: Tabs — horizontal scroll on mobile, vertical stack on lg */}
            <div className="flex flex-col w-full lg:w-auto overflow-hidden">
              <div
                ref={tablistRef}
                className="rounded-2xl border border-gray-200/80 bg-[#F1F4F8] p-2 shadow-[0_4px_14px_rgba(0,0,0,0.06)] flex flex-row lg:flex-col flex-nowrap gap-2 lg:py-4 py-2 px-2 overflow-x-auto lg:overflow-visible scrollbar-hide snap-x snap-mandatory -mx-1 px-1"
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
                      className={`flex shrink-0 lg:w-full items-center lg:gap-3 gap-2 rounded-xl md:px-4 px-2 md:py-3 py-1 lg:py-1 text-left transition-colors focus:outline-none text-slate-500 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 snap-center lg:text-md text-sm md:min-w-[200px] ${isActive
                        ? " bg-white/90 shadow-xl font-bold  text-slate-900!"
                        : ""
                        }`}
                    >
                      <span
                        className={`flex md:h-10 h-8 md:w-10 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${isActive ? " text-slate-900" : " text-gray-500"
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

            {/* Right: Panel with framer-motion slide animation */}
            <div className="flex min-h-[400px] overflow-hidden rounded-2xl border border-gray-200/80 bg-gray-50 shadow-[0_4px_14px_rgba(0,0,0,0.06)] md:min-h-[300px] w-full ">
              <div className="relative flex-1 overflow-hidden">
                <motion.div
                  key={activeIndex}
                  ref={panelRef}
                  id={`panel-${activeTab.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${activeTab.id}`}
                  className="lg:flex h-full"
                  initial={{ y: `${panelDirection * 100}%` }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="border-t border-gray-100 bg-white p-6 flex flex-col gap-2 justify-center">
                    <span className="text-2xl text-[#0172F4] p-2 w-10 h-10 flex items-center justify-center bg-linear-to-b from-white to-slate-200 shadow rounded-lg">{TabIcons[activeTab.id]}</span>
                    <h3 className="text-lg font-bold text-gray-900">{activeTab.label}</h3>
                    <p className="mt-2 text-sm leading-snug text-gray-600">
                      {activeTab.description}
                    </p>
                  </div>
                  <div className="relative  shrink-0 overflow-hidden flex items-center object-cover justify-center bg-white p-6">

                    <div className="w-full  h-[350px] rounded-3xl overflow-hidden relative">
                      <div className="absolute w-3/4 h-3/4 rounded-t-2xl  bg-white/30 border-2 border-white bottom-0 left-1/2 -translate-x-1/2 p-4 overflow-hidden z-10">
                        <div className="flex items-start justify-start gap-2 pb-2">{Array.from({ length: 3 }).map((_, index) => (
                          <span key={index} className="w-3 h-3 rounded-full bg-white" ></span>
                        ))}</div>
                        <div className="bg-white w-full h-full rounded-t-2xl overflow-hidden ">
                          {activeTab?.mediaUrl && <img className="w-full h-full object-top object-contain" src={activeTab?.mediaUrl} alt="" />}
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
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
