export const testimonialsContent = {
  sectionTitle: "Trusted by Professionals",
  sectionSubtitle: "What attendees and organizers say about Tōny",
  testimonials: [
    {
      id: 1,
      quote:
        "I've been to hundreds of conferences. Tōny was the first time I left with five genuine connections instead of fifty forgettable handshakes. The matching was scary accurate.",
      author: "David Kim",
      role: "CTO",
      company: "Notion",
      avatar: "DK",
    },
    {
      id: 2,
      quote:
        "We used Tōny for our annual summit and the feedback was incredible. Attendees said the networking was the best part—which never happens. Our NPS jumped 23 points.",
      author: "Rachel Torres",
      role: "Head of Events",
      company: "Andreessen Horowitz",
      avatar: "RT",
    },
    {
      id: 3,
      quote:
        "As an introvert, networking events are exhausting. Tōny gave me specific people to find with specific reasons to talk. I actually enjoyed it for once.",
      author: "Michael Okonkwo",
      role: "Engineering Manager",
      company: "Figma",
      avatar: "MO",
    },
  ],
} as const;

export type TestimonialsContent = typeof testimonialsContent;
