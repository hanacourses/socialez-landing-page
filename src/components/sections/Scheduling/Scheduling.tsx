"use client";

import Image from "next/image";
import { SECTION, CARD_1, CARD_2, CARD_3 } from "./constants";

const CheckIcon = () => (
  <span
    className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary text-white"
    aria-hidden
  >
    <svg
      className="h-3 w-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  </span>
);

const ScheduleCard = () => (
  <div className="flex flex-col gap-6 rounded-2xl border border-gray-200/80 bg-white p-6 shadow-card md:flex-row md:items-center md:gap-8 lg:p-8">
    <div className="flex-1">
      <h3 className="text-lg font-bold text-gray-900">{CARD_1.title}</h3>
      <p className="mt-2 text-sm leading-snug text-gray-600">{CARD_1.description}</p>
      <ul className="mt-4 space-y-4" role="list">
        {CARD_1.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <CheckIcon />
            <span className="text-sm text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="flex flex-1 items-center justify-center overflow-hidden rounded-xl bg-gray-100 p-4 md:min-h-[300px]">
      <Image
        src="/Schedule_posts.gif"
        alt="Schedule posts preview"
        width={800}
        height={600}
        className="w-full h-auto object-contain rounded-lg"
        unoptimized
      />
    </div>
  </div>
);

const CalendarCard = () => (
  <div className="flex flex-col gap-6 rounded-2xl border border-gray-200/80 bg-white p-6 shadow-card lg:p-8">
    <div className="">
      <h3 className="text-lg font-bold text-gray-900">{CARD_2.title}</h3>
      <p className="mt-2 text-sm leading-snug text-gray-600">{CARD_2.description}</p>
    </div>
    <div className="flex items-center justify-center overflow-hidden">
      <img
        src="/Calender_View1.png"
        alt="Calendar Preview"
        width={800}
        height={600}
        className="w-full h-auto object-contain rounded-lg"
      />
    </div>
  </div>
);

const RescheduleCard = () => (
  <div className="flex flex-col gap-6 rounded-2xl border border-gray-200/80 bg-white p-6 shadow-card lg:p-8">
    <div className="">
      <h3 className="text-lg font-bold text-gray-900">{CARD_3.title}</h3>
      <p className="mt-2 text-sm leading-snug text-gray-600">{CARD_3.description}</p>
    </div>
    <div className="flex items-center justify-center overflow-hidden">
      <Image
        src="/Modal.png"
        alt="Reschedule Form Preview"
        width={800}
        height={600}
        className="w-full h-auto object-contain rounded-lg"
      />
    </div>
  </div>
);

export const Scheduling = () => {
  return (
    <section
      id="scheduling"
      className="relative z-10 scroll-mt-20 px-4 pt-10 pb-16 sm:px-6 md:pt-14 md:pb-24"
      style={{
        background: "linear-gradient(to bottom, #ffffff 0%, color-mix(in srgb, var(--color-primary) 15%, transparent) 50%, #ffffff 100%)",
      }}
      aria-labelledby="scheduling-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span
            className="inline-block rounded-full bg-mint px-4 py-1.5 text-sm font-normal text-gray-900"
            aria-hidden
          >
            {SECTION.badge}
          </span>
          <h2
            id="scheduling-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            {SECTION.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600">
            {SECTION.subtitle}
          </p>
        </div>

        <div className="mt-12 space-y-10">
          <ScheduleCard />
          
          <div className="grid gap-10 md:grid-cols-2 md:gap-6 lg:gap-8">
            <CalendarCard />
            <RescheduleCard />
          </div>
        </div>
      </div>
    </section>
  );
};
