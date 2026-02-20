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
    mediaUrl: "",
    mediaAlt: "Brand Setup",
  },
  {
    id: "brand-voice",
    label: "Zee Learns Your Brand Voice",
    description: "Our AI learns how you communicate and keeps your content on brand.",
    mediaUrl: "",
    mediaAlt: "Brand Voice",
  },
  {
    id: "ai-content",
    label: "AI Content Creation",
    description: "Create posts, captions, and ideas in seconds with AI that knows your brand.",
    mediaUrl: "./featuretab-aicontent.png",
    mediaAlt: "AI Content Creation",
  },
  {
    id: "publishing",
    label: "Multi-Platform Publishing",
    description: "Schedule and publish to all your social channels from one place.",
    mediaUrl: "",
    mediaAlt: "Multi-Platform Publishing",
  },
] as const;
