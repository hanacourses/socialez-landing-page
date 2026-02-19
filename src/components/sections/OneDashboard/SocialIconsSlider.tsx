"use client";

import { useRef, useEffect } from "react";
import { SOCIAL_PLATFORMS } from "./constants";

const ICON_SIZE = 48;
const SCROLL_SPEED_PX_PER_MS = 0.015;
const SLIDER_ITEM_CLASS =
  "flex shrink-0 items-center justify-center rounded-full border-2 border-white text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)] transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary";

const ICON_INNER_SIZE = 28;

const IconItem = ({
  platform,
  size,
}: {
  platform: (typeof SOCIAL_PLATFORMS)[number];
  size: number;
}) => (
  <div
    className={SLIDER_ITEM_CLASS}
    style={{ width: size, height: size, minWidth: size, minHeight: size }}
    role="listitem"
  >
    <span
      className="flex h-full w-full items-center justify-center rounded-full bg-white/25 p-1.5 shadow-[0_2px_12px_rgba(255,255,255,0.25)] backdrop-blur-md"
      aria-label={platform.ariaLabel}
      title={platform.ariaLabel}
    >
      <img
        src={platform.icon}
        alt=""
        width={ICON_INNER_SIZE}
        height={ICON_INNER_SIZE}
        className="h-full w-full object-contain"
        loading="lazy"
        decoding="async"
      />
    </span>
  </div>
);

export const SocialIconsSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = scrollRef.current;
    if (!track) return;

    let rafId: number;
    let lastTime = 0;

    const tick = (now: number) => {
      const delta = lastTime ? now - lastTime : 0;
      lastTime = now;
      const totalWidth = track.scrollWidth;
      const segmentWidth = totalWidth / 2; // two identical copies
      if (segmentWidth <= 0) {
        rafId = requestAnimationFrame(tick);
        return;
      }
      const next = track.scrollLeft + SCROLL_SPEED_PX_PER_MS * delta;
      track.scrollLeft = next >= segmentWidth ? next - segmentWidth : next;
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div
      className="w-full overflow-hidden py-4"
      aria-label="Social platforms you can connect"
    >
      <div
        ref={scrollRef}
        className="flex overflow-x-auto overflow-y-hidden pb-2 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{
          scrollBehavior: "auto",
          WebkitOverflowScrolling: "touch",
          msOverflowStyle: "none",
        }}
        role="list"
      >
        <div
          className="flex shrink-0 gap-4 md:gap-5"
          style={{ width: "max-content" }}
        >
          {[1, 2].map((copy) =>
            SOCIAL_PLATFORMS.map((platform) => (
              <IconItem
                key={`${platform.name}-${copy}`}
                platform={platform}
                size={ICON_SIZE}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
