export const FEATURES_SECTION = {
  badge: "AI Assist",
  heading: "Meet Zee: Your AI Assistant",
  subheading: "Define your brand once and let Zee turn it into consistent, ready-to-publish content.",
} as const;

export const TABS = [
  {
    id: "brand-setup",
    label: "Brand Setup",
    description: "Add your brand name, industry, tone of voice, and audience to set the foundation.",
    /** Replace with your image or gif path */
    mediaUrl: "https://placehold.co/1000x500/e0f2fe/0172F4?text=Brand+Setup",
    mediaAlt: "Brand Setup",
  },
  {
    id: "brand-voice",
    label: "Zee Learns Your Brand Voice",
    description: "Our AI learns how you communicate and keeps your content on brand.",
    mediaUrl: "https://placehold.co/1000x500/dbeafe/1d4ed8?text=Brand+Voice",
    mediaAlt: "Brand Voice",
  },
  {
    id: "ai-content",
    label: "AI Content Creation",
    description: "Create posts, captions, and ideas in seconds with AI that knows your brand.",
    mediaUrl: "https://placehold.co/1000x500/fef3c7/f59e0b?text=AI+Content",
    mediaAlt: "AI Content Creation",
  },
  {
    id: "publishing",
    label: "Multi-Platform Publishing",
    description: "Schedule and publish to all your social channels from one place.",
    mediaUrl: "https://placehold.co/1000x500/d1fae5/059669?text=Publishing",
    mediaAlt: "Multi-Platform Publishing",
  },
] as const;
