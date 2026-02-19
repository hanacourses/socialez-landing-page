"use client";

import Image from "next/image";
import { SECTION, FEATURE_1, FEATURE_2, FEATURE_3 } from "./constants";

const TargetIcon = () => (
  <svg
    className="h-6 w-6 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" strokeWidth="2" />
    <circle cx="12" cy="12" r="6" strokeWidth="2" />
    <circle cx="12" cy="12" r="2" strokeWidth="2" />
  </svg>
);

const DashboardIcon = () => (
  <svg
    className="h-6 w-6 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
    />
  </svg>
);

const ChartIcon = () => (
  <svg
    className="h-6 w-6 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
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
      ? "bg-yellow-500"
      : icon === "dashboard"
      ? "bg-blue-400"
      : "bg-purple-500";

  return (
    <div className="min-w-0 rounded-xl border border-gray-200/80 bg-white p-4 shadow-[0_4px_14px_rgba(0,0,0,0.06)] sm:p-6">
      <div className={`${iconBgClass} mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg`}>
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
            className="inline-block rounded-full bg-yellow-400 px-4 py-1.5 text-sm font-normal text-gray-900"
            aria-hidden
          >
            {SECTION.badge}
          </span>
          <h2
            id="performance-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            {SECTION.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600">
            {SECTION.subtitle}
          </p>
        </div>

        <div className="mt-12">
          <div
            className="relative flex min-h-0 flex-col gap-8 rounded-3xl border border-gray-200/80 p-4 shadow-[0_4px_14px_rgba(0,0,0,0.06)] sm:p-6 md:min-h-[500px] lg:flex-row lg:items-start lg:gap-8 lg:p-8"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(255,255,255,0.9) 0%, rgba(227,235,255,1) 100%), url("/performance_Background_Image.png")`,
              backgroundSize: "100% 100%, cover",
              backgroundPosition: "center, center",
              backgroundRepeat: "no-repeat, no-repeat",
            }}
          >
            <div className="flex w-full min-w-0 flex-col gap-6 sm:grid sm:grid-cols-2 lg:w-[55%] lg:flex-none lg:flex-col lg:grid-cols-none">
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
            <div className="relative flex w-full min-w-0 items-center justify-center overflow-hidden rounded-xl lg:flex-1">
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
