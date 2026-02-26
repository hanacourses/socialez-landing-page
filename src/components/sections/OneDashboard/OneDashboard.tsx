"use client";

import SectionBadge from "@/components/UI/SectionBadge";
import { SECTION, CARD_1, CARD_2, CARD_3, STEP_IMAGES, STEP_LABELS_IMAGE } from "./constants";
import { SocialIconsSlider } from "./SocialIconsSlider";

const CARDS = [
  { title: CARD_1.title, description: CARD_1.description, image: STEP_IMAGES[0], alt: "Create your SocialEZ account" },
  { title: CARD_2.title, description: CARD_2.description, image: STEP_IMAGES[1], alt: "Connect your accounts" },
  { title: CARD_3.title, description: CARD_3.description, image: STEP_IMAGES[2], alt: "See what performs best" },
] as const;

const STEP_LABEL_ALTS = ["Step One", "Step Two", "Step Three"] as const;

const StepLabelImg = ({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <img
    src={src}
    alt={alt}
    className={`h-[56px] w-[96px] object-contain object-left ${className}`.trim()}
    loading="lazy"
    decoding="async"
  />
);

const CardBase = ({
  stepLabelSrc,
  stepLabelAlt,
  imageSrc,
  imageAlt,
  title,
  description,
  stepLabelAtBottom,
  imageOverlay,
  imageClassName = "",
}: {
  stepLabelSrc: string;
  stepLabelAlt: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  stepLabelAtBottom?: boolean;
  imageOverlay?: React.ReactNode;
  imageClassName?: string;
}) => (
  <article className="flex flex-col items-center gap-5">
    {!stepLabelAtBottom && (
      <StepLabelImg src={stepLabelSrc} alt={stepLabelAlt} className="mb-2" />
    )}
    <div className="flex w-full flex-1 flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-linear-to-b from-primary/10 to-white shadow-card">
      <div className="relative w-full overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`h-auto w-full object-cover ${imageClassName ? "object-center" : "object-top"} ${imageClassName}`.trim()}
          loading="lazy"
          decoding="async"
        />
        {imageOverlay != null && (
          <div className="absolute bottom-6 left-0 right-0 z-10 mx-auto w-[min(92%,250px)] min-h-16 overflow-hidden sm:bottom-8 sm:w-[260px] md:bottom-10 md:w-[320px] md:min-h-[88px] lg:bottom-12 lg:w-[350px]">
            {imageOverlay}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-center text-gray-900">{title}</h3>
        <p className="mt-2 text-sm leading-snug text-center text-gray-600">{description}</p>
      </div>
    </div>
    {stepLabelAtBottom && (
      <StepLabelImg src={stepLabelSrc} alt={stepLabelAlt} className="mt-2" />
    )}
  </article>
);

export const OneDashboard = () => {
  return (
    <section
      id="one-dashboard"
      className="relative z-10 scroll-mt-20 bg-white px-4 pt-10 pb-16 sm:px-6 md:pt-14 md:pb-24"
      aria-labelledby="one-dashboard-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <SectionBadge variant="cyan">{SECTION.badge}</SectionBadge>
          <h2
            id="one-dashboard-heading"
            className="mt-4 text-[24px] font-bold tracking-tight text-gray-900 md:text-[32px]"
          >
            {SECTION.title}
          </h2>
          <p className="mx-auto max-w-lg mt-3 text-base text-gray-600">
            {SECTION.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-8">
          {CARDS.map((card, index) => (
            <CardBase
              key={card.title}
              stepLabelSrc={STEP_LABELS_IMAGE[index]}
              stepLabelAlt={STEP_LABEL_ALTS[index]}
              imageSrc={card.image}
              imageAlt={card.alt}
              title={card.title}
              description={card.description}
              stepLabelAtBottom={index === 1}
              imageOverlay={index === 1 ? <SocialIconsSlider /> : undefined}
              imageClassName={index === 2 ? "scale-125" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
