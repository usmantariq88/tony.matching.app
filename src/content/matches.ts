export const matchesContent = {
  sectionTitle: "Not Just Connections. The Right Connections.",
  sectionSubtitle:
    "See exactly why someone is a great match—and how to start the conversation",
  sampleMatches: [
    {
      id: 1,
      name: "Elena Rodriguez",
      role: "VP of Engineering",
      company: "Stripe",
      avatar: "ER",
      matchScore: 96,
      matchReasons: [
        "You're both scaling engineering teams",
        "Shared background in fintech infrastructure",
        "She's looking for technical advisors",
      ],
      suggestedOpener:
        "I noticed you've scaled Stripe's platform team. I'm facing similar challenges at my startup—would love to hear how you approached hiring for specialized roles.",
      tags: ["Engineering Leadership", "Fintech", "Scaling"],
    },
    {
      id: 2,
      name: "James Park",
      role: "Founder & CEO",
      company: "Lumina Health",
      avatar: "JP",
      matchScore: 91,
      matchReasons: [
        "Both focused on healthcare tech",
        "Complementary skills: you're technical, he's commercial",
        "Looking for a technical co-founder",
      ],
      suggestedOpener:
        "Saw that Lumina is tackling patient data interoperability. That's exactly the problem space I've been researching. What's been your biggest technical hurdle?",
      tags: ["Healthcare", "Startups", "Co-founder Search"],
    },
    {
      id: 3,
      name: "Aisha Patel",
      role: "Partner",
      company: "Sequoia Capital",
      avatar: "AP",
      matchScore: 88,
      matchReasons: [
        "Actively investing in your space",
        "Portfolio overlap with your target customers",
        "Recently wrote about AI infrastructure",
      ],
      suggestedOpener:
        "Your piece on AI infrastructure resonated—especially the point about developer experience as a moat. We're building in that space and I'd value your perspective.",
      tags: ["Investor", "AI/ML", "Series A"],
    },
  ],
  features: {
    saveNote: "Save private notes after meeting",
    setReminder: "Schedule follow-up reminders",
    connect: "Send connection request",
  },
} as const;

export type MatchesContent = typeof matchesContent;
