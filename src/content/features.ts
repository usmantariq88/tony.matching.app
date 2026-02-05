export const featuresContent = {
  sectionTitle: "Built for Real Connections",
  sectionSubtitle:
    "Every feature designed to help you network smarter, not harder",
  features: [
    {
      icon: "ai",
      title: "AI-Powered Matching",
      description:
        "Our matching engine analyzes goals, expertise, and networking intent to surface the most relevant connections.",
      example: "\"Sarah is a good match because you're both exploring B2B SaaS.\"",
    },
    {
      icon: "voice",
      title: "Voice Profile Intake",
      description:
        "Don't like typing? Just speak. Our voice-to-profile feature captures your background and goals in natural conversation.",
      example: "\"Tell me about your work...\" → Full profile in 60 seconds.",
    },
    {
      icon: "qr",
      title: "QR Check-In Verification",
      description:
        "Physical attendance confirmation means you only see people who are actually at the event. No ghost profiles.",
      example: "Scan → Verified → Matches activated instantly.",
    },
    {
      icon: "notes",
      title: "Post-Event Notes",
      description:
        "Add private notes to any connection right after you meet. Never forget context or next steps again.",
      example: "\"Discussed partnership. Follow up Tuesday.\"",
    },
    {
      icon: "reminder",
      title: "Smart Reminders",
      description:
        "Set follow-up reminders that arrive when you need them. Stay on top of relationships without the mental load.",
      example: "\"Remind me to email Marcus in 3 days.\"",
    },
    {
      icon: "analytics",
      title: "Networking Analytics",
      description:
        "See patterns in your connections. Track follow-through rates. Understand your networking ROI.",
      example: "You've made 24 connections this quarter, 18 with follow-ups.",
    },
  ],
} as const;

export type FeaturesContent = typeof featuresContent;
