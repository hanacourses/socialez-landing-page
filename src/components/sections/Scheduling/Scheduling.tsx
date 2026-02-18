"use client";

import Image from "next/image";
import { SECTION, CARD_1, CARD_2, CARD_3 } from "./constants";

const CheckIcon = () => (
  <svg
    className="h-5 w-5 flex-shrink-0 text-primary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const ScheduleCard = () => (
  <div className="flex flex-col gap-6 rounded-2xl border border-gray-200/80 bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.06)] md:flex-row md:items-center md:gap-8 lg:p-8">
    <div className="flex-1">
      <h3 className="text-xl font-bold text-gray-900 md:text-2xl">{CARD_1.title}</h3>
      <p className="mt-2 text-base text-gray-600">{CARD_1.description}</p>
      <ul className="mt-4 space-y-3">
        {CARD_1.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <CheckIcon />
            <span className="text-sm text-gray-700 md:text-base">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="flex flex-1 items-center justify-center rounded-xl bg-gray-100 p-8 md:min-h-[300px]">
      <div className="text-center">
        <div className="mx-auto mb-4 h-24 w-24 rounded-lg bg-primary/20 flex items-center justify-center">
          <svg
            className="h-12 w-12 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <p className="text-sm text-gray-500">Schedule Preview</p>
        <p className="mt-1 text-xs text-gray-400">Dummy image placeholder</p>
      </div>
    </div>
  </div>
);

const CalendarCard = () => (
  <div className="flex flex-col gap-6 rounded-2xl border border-gray-200/80 bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.06)] lg:p-8">
    <div className="">
      <h3 className="text-xl font-bold text-gray-900 md:text-2xl">{CARD_2.title}</h3>
      <p className="mt-2 text-base text-gray-600">{CARD_2.description}</p>
    </div>
    <div className="flex items-center justify-center overflow-hidden">
      <img
        src="/Calender View 1.png"
        alt="Calendar Preview"
        width={800}
        height={600}
        className="w-full h-auto object-contain rounded-lg"
      />
    </div>
  </div>
);

const RescheduleCard = () => (
  <div className="flex flex-col gap-6 rounded-2xl border border-gray-200/80 bg-white p-6 shadow-[0_4px_14px_rgba(0,0,0,0.06)] lg:p-8">
    <div className="">
      <h3 className="text-xl font-bold text-gray-900 md:text-2xl">{CARD_3.title}</h3>
      <p className="mt-2 text-base text-gray-600">{CARD_3.description}</p>
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
            className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
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
