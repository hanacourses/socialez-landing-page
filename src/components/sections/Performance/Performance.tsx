"use client";

import Image from "next/image";
import { SECTION, FEATURE_1, FEATURE_2, FEATURE_3 } from "./constants";

const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<rect width="40" height="40" rx="12" fill="#FFD86F"/>
<path d="M19.9998 10C14.4798 10 10 14.4798 10 19.9998C10 25.5198 14.4798 30.0002 19.9998 30.0002C25.5198 30.0002 30.0002 25.5198 30.0002 19.9998C30.0002 14.4798 25.5198 10 19.9998 10ZM19.9998 16.75C19.5903 16.75 19.2498 16.4103 19.2498 16C19.2498 15.5897 19.5903 15.25 19.9998 15.25C21.2592 15.2512 22.4667 15.752 23.3573 16.6424C24.2479 17.5329 24.7489 18.7403 24.7502 19.9998C24.7491 21.2593 24.2482 22.4669 23.3575 23.3575C22.4669 24.2482 21.2593 24.7491 19.9998 24.7502C19.5903 24.7502 19.2498 24.4097 19.2498 24.0002C19.2498 23.59 19.5903 23.2502 19.9998 23.2502C20.8613 23.2487 21.6872 22.9057 22.2964 22.2964C22.9057 21.6872 23.2487 20.8613 23.2502 19.9998C23.2485 19.1383 22.9054 18.3126 22.2962 17.7035C21.687 17.0945 20.8612 16.7516 19.9998 16.75ZM19.9998 27.7502C15.73 27.7502 12.25 24.2703 12.25 19.9998C12.25 19.5903 12.5897 19.2498 13 19.2498C13.4102 19.2498 13.75 19.5903 13.75 19.9998C13.75 23.4497 16.5498 26.2502 19.9998 26.2502C23.4497 26.2502 26.2502 23.4497 26.2502 19.9998C26.2502 16.5498 23.4497 13.75 19.9998 13.75C19.5903 13.75 19.2498 13.4102 19.2498 13C19.2498 12.5897 19.5903 12.25 19.9998 12.25C24.2703 12.25 27.7502 15.73 27.7502 19.9998C27.7502 24.2703 24.2703 27.7502 19.9998 27.7502Z" fill="white"/>
</svg>
);

const DashboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<rect width="40" height="40" rx="12" fill="#7CE1FF"/>
<path d="M16.2498 10V30.0002H15.8102C12.1697 30.0002 10 27.8298 10 24.19V15.8102C10 12.1697 12.1697 10 15.8102 10H16.2498ZM29.9995 15.8102V19.2498H17.7498V10H24.19C27.8298 10 29.9995 12.1697 29.9995 15.8102ZM29.9995 20.7498V24.19C29.9995 27.8298 27.8298 29.9995 24.19 29.9995H17.7498V20.7498H29.9995Z" fill="white"/>
</svg>
);

const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<rect width="40" height="40" rx="12" fill="#9886FE"/>
<path d="M14 21H10C9.4 21 9 21.4 9 22V30C9 30.6 9.4 31 10 31H14C14.6 31 15 30.6 15 30V22C15 21.4 14.6 21 14 21ZM30 17H26C25.4 17 25 17.4 25 18V30C25 30.6 25.4 31 26 31H30C30.6 31 31 30.6 31 30V18C31 17.4 30.6 17 30 17ZM22 9H18C17.4 9 17 9.4 17 10V30C17 30.6 17.4 31 18 31H22C22.6 31 23 30.6 23 30V10C23 9.4 22.6 9 22 9Z" fill="white"/>
</svg>
);

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: "target" | "dashboard" | "chart";
  title: string;
  description: string;
}) => {
  const IconComponent =
    icon === "target"
      ? TargetIcon
      : icon === "dashboard"
      ? DashboardIcon
      : ChartIcon;

  const iconBgClass =
    icon === "target"
      ? "bg-yellow"
      : icon === "dashboard"
      ? "bg-primary"
      : "bg-card";

  return (
    <div className="min-w-0 rounded-xl border border-gray-200/80 bg-white p-4 shadow-card sm:p-6">
      <div className={` mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg`}>
        <IconComponent />
      </div>
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
};

export const Performance = () => {
  return (
    <section
      id="performance"
      className="relative z-10 scroll-mt-20 bg-white px-4 pt-10 pb-16 sm:px-6 md:pt-14 md:pb-24"
      aria-labelledby="performance-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span
            className="inline-block rounded-full bg-yellow px-4 py-1.5 text-sm font-normal text-gray-900"
            aria-hidden
          >
            {SECTION.badge}
          </span>
          <h2
            id="performance-heading"
            className="mt-4 text-[24px] font-bold tracking-tight text-gray-900 md:text-[32px]"
          >
            {SECTION.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600">
            {SECTION.subtitle}
          </p>
        </div>

        <div className="mt-12">
          <div className="relative flex min-h-[600px] flex-col gap-8 overflow-hidden rounded-3xl border border-gray-200/80 p-4 shadow-card sm:p-6 md:min-h-[500px] lg:flex-row lg:items-start lg:gap-8 lg:p-8"  style={{
                background:
                  "linear-gradient(to top, rgb(255 255 255 / 0.9) 0%, var(--color-card) 100%)",
              }}>
            {/* Background image - absolute layer (same method as Hero) */}
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 overflow-hidden" aria-hidden>
              <img src="/Analytics_bg.png" alt="" className="h-full w-full object-cover object-center" />
            </div>
            
            
            <div className="relative z-10 flex w-full min-w-0 flex-col gap-6 lg:w-[65%] lg:flex-row lg:self-center">
              <FeatureCard
                icon="target"
                title={FEATURE_1.title}
                description={FEATURE_1.description}
              />
              <FeatureCard
                icon="dashboard"
                title={FEATURE_2.title}
                description={FEATURE_2.description}
              />
              <FeatureCard
                icon="chart"
                title={FEATURE_3.title}
                description={FEATURE_3.description}
              />
            </div>
            <div className="relative z-10 flex items-center justify-center overflow-hidden rounded-xl lg:absolute lg:right-0 lg:top-1/2 lg:w-[30%] lg:-translate-y-1/2">
              <Image
                src="/performance.png"
                alt="Performance analytics dashboard"
                width={800}
                height={600}
                className="h-auto w-full max-w-md object-contain lg:max-w-none"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
