export const heroContent = {
  headline: "Meet the right people.",
  subheadline:
    "Smart AI matching for professional events. No awkward small talk. No missed connections. Just meaningful conversations with people who matter to your goals.",
  benefits: [
    "AI-powered matching based on goals, expertise, and intent",
    "Verified physical attendance—no ghost profiles",
    "Private notes and follow-up reminders built in",
  ],
  cta: {
    primary: {
      label: "Create Your Profile",
      href: "/signup",
    },
    secondary: {
      label: "See How It Works",
      href: "#how-it-works",
    },
  },
  trustCopy:
    "Trusted by 2,400+ professionals at 180+ events. Your data stays yours.",
  matchCards: [
    {
      name: "Sarah Chen",
      role: "Product Lead at Figma",
      matchScore: 94,
      reason: "Both focused on design systems",
    },
    {
      name: "Marcus Williams",
      role: "Founder, Stealth AI",
      matchScore: 89,
      reason: "Shared interest in ML infrastructure",
    },
    {
      name: "Priya Sharma",
      role: "Engineering Manager",
      matchScore: 87,
      reason: "Looking for technical co-founders",
    },
  ],
} as const;

export type HeroContent = typeof heroContent;
