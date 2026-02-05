export const privacyContent = {
  sectionTitle: "Privacy First. Always.",
  sectionSubtitle:
    "Your data is yours. We built Tōny with privacy as a foundation, not an afterthought.",
  trustPoints: [
    {
      icon: "ownership",
      title: "You Own Your Data",
      description:
        "Export or delete your data anytime. We never sell your information. Your professional profile belongs to you.",
    },
    {
      icon: "verified",
      title: "Verified Attendance",
      description:
        "Physical check-in means you only connect with people who are actually present. No bots. No spam accounts.",
    },
    {
      icon: "nospam",
      title: "Zero Spam Promise",
      description:
        "We don't flood your inbox. You control notification frequency. Unsubscribe means unsubscribe.",
    },
    {
      icon: "security",
      title: "Enterprise Security",
      description:
        "SOC 2 Type II compliant. End-to-end encryption. Regular third-party security audits.",
    },
  ],
  badges: [
    { label: "SOC 2 Certified", icon: "soc2" },
    { label: "GDPR Compliant", icon: "gdpr" },
    { label: "256-bit Encryption", icon: "encryption" },
  ],
} as const;

export type PrivacyContent = typeof privacyContent;
