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
  signupLabel: "Signup",
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
  chartTitle: "Channel Statistics",
} as const;

export const SOCIAL_PLATFORMS = [
  { name: "Facebook", color: "bg-[#1877F2]" },
  { name: "Instagram", color: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]" },
  { name: "Pinterest", color: "bg-[#E60023]" },
  { name: "LinkedIn", color: "bg-[#0A66C2]" },
  { name: "X", color: "bg-gray-900" },
  { name: "YouTube", color: "bg-[#FF0000]" },
] as const;

/** Image assets in public folder for the section */
export const SECTION_IMAGES = {
  connectCard: "/connect_card.png",
  channelStatistics: "/channel_statistics.png",
  stepOneCard: "/step_one_card.png",
} as const;
