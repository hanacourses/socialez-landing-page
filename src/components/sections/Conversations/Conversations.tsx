"use client";

import { SECTION } from "./constants";
import { InboxComponent } from "./InboxComponent";

export const Conversations = () => {
  return (
    <section
      id="conversations"
      className="relative z-10 scroll-mt-20 px-4 pt-10 pb-16 sm:px-6"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(255 255 255 / 0.95) 0%, color-mix(in srgb, var(--color-card) 95%, transparent) 100%), url("/BG_Pattern.png")`,
        backgroundSize: "100% 100%, auto",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat, repeat",
      }}
      aria-labelledby="conversations-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Two Column Layout */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12 xl:gap-16 ">
          {/* Left Column - Text Content */}
          <div className="flex-1 lg:flex lg:flex-col lg:justify-center lg:items-center">
            <div className="">
              <span
                className="inline-block rounded-full bg-success px-4 py-1.5 text-sm font-normal text-white"
                aria-hidden
              >
                {SECTION.badge}
              </span>
              <h2
                id="conversations-heading"
                className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                {SECTION.title}
              </h2>
              <p className="mt-3 text-base text-gray-600">
                {SECTION.subtitle}
              </p>
            </div>
          </div>

          {/* Right Column - Inbox Card */}
          <div className="flex-1">
            <div className="w-full">
              <img src="/conversations.png" alt="Conversations" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
