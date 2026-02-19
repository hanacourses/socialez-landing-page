"use client";

import Marquee from "react-fast-marquee";
import { SOCIAL_PLATFORMS } from "./constants";

const ICON_SIZE = 48;
const SLIDER_ITEM_CLASS =
  "flex shrink-0 items-center justify-center rounded-full border-2 border-white text-white shadow-icon transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary";

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
      className="flex h-full w-full items-center justify-center rounded-full bg-white/25 p-1.5 shadow-[var(--shadow-icon-inner)] backdrop-blur-md"
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
  return (
    <div
      className="w-full overflow-hidden py-4"
      aria-label="Social platforms you can connect"
    >
      <Marquee
        speed={24}
        direction="left"
        gradient={false}
        pauseOnHover
        className="[&>.overflow-hidden]:overflow-visible!"
      >
        <div className="flex shrink-0 gap-4 pr-4 md:gap-5 md:pr-5" role="list">
          {SOCIAL_PLATFORMS.map((platform) => (
            <IconItem
              key={platform.name}
              platform={platform}
              size={ICON_SIZE}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};
