export const organizersContent = {
  sectionTitle: "For Event Organizers",
  sectionSubtitle:
    "Give your attendees a premium networking experience they'll remember",
  description:
    "Tōny transforms your event from a sea of strangers into a curated networking experience. Attendees leave with meaningful connections, not just a stack of forgettable business cards.",
  features: [
    {
      icon: "event",
      title: "Easy Event Setup",
      description:
        "Create your event in minutes. Define attendee categories, matching preferences, and event schedule.",
    },
    {
      icon: "attendees",
      title: "Attendee Management",
      description:
        "Import attendee lists, track check-ins in real-time, and manage networking sessions from one dashboard.",
    },
    {
      icon: "matching",
      title: "Matching Engine Control",
      description:
        "Configure matching rules. Prioritize cross-company connections. Ensure sponsors meet their target audience.",
    },
    {
      icon: "analytics",
      title: "Post-Event Analytics",
      description:
        "See engagement metrics, connection rates, and attendee satisfaction. Prove networking ROI to stakeholders.",
    },
  ],
  dashboardPreview: {
    eventName: "Tech Leaders Summit 2024",
    stats: {
      totalAttendees: 342,
      checkedIn: 298,
      matchesMade: 1247,
      avgMatchScore: 87,
    },
    recentActivity: [
      "Sarah C. checked in 2 min ago",
      "James P. connected with Elena R.",
      "New match: Aisha P. & Marcus W. (94%)",
    ],
  },
  cta: {
    label: "Start Organizing",
    href: "/organizers",
    subtext: "Free for events under 100 attendees",
  },
} as const;

export type OrganizersContent = typeof organizersContent;
