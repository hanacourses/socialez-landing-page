export const SECTION = {
  badge: "Dashboard",
  title: "One dashboard. All platforms.",
  subtitle:
    "Connect your accounts once to SocialEZ and manage everything from one dashboard.",
} as const;

export const CARD_1 = {
  title: "Create your SocialEZ account",
  description:
    "Sign up in a minute and access your SocialEZ dashboard to get started.",
} as const;

export const CARD_2 = {
  title: "Connect your accounts",
  description:
    "Link your social accounts to SocialEZ and post everywhere from a single dashboard.",
} as const;

export const CARD_3 = {
  title: "See what performs best",
  description:
    "Track results across platforms, understand what's working, and improve your next posts.",
} as const;

/** Step labels image (Step One, Step Two, Step Three) in public folder */
export const STEP_LABELS_IMAGE = ["/Step1.png", "/Step2.png", "/Step3.png"] as const;

/** Step card images in public folder */
export const STEP_IMAGES = ["/Step_One_Card_Content1.png", "/Step_One_Card_Content2.png", "/statistics.gif"] as const;

/** Social platforms for the connect-accounts slider (name, bg, ariaLabel, icon path in public) */
export const SOCIAL_PLATFORMS = [
  { name: "YouTube", bg: "bg-[#FF0000]", ariaLabel: "YouTube", icon: "/youtube.svg" },
  { name: "Google", bg: "bg-[#4285F4]", ariaLabel: "Google My Business", icon: "/google%20my%20business.svg" },
  { name: "Facebook", bg: "bg-[#1877F2]", ariaLabel: "Facebook", icon: "/Facebook%20(1).svg" },
  { name: "Instagram", bg: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]", ariaLabel: "Instagram", icon: "/instagram.svg" },
  { name: "Pinterest", bg: "bg-[#E60023]", ariaLabel: "Pinterest", icon: "/pinterest.svg" },
  { name: "LinkedIn", bg: "bg-[#0A66C2]", ariaLabel: "LinkedIn", icon: "/linkedin.svg" },
  { name: "X", bg: "bg-[#000000]", ariaLabel: "X (Twitter)", icon: "/X.svg" },
] as const;
