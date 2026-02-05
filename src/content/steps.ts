export const stepsContent = {
  sectionTitle: "How It Works",
  sectionSubtitle: "Three simple steps to meaningful connections",
  steps: [
    {
      number: 1,
      icon: "profile",
      title: "Create Your Profile",
      description:
        "Tell us your goals, expertise, and what you're looking for. Takes 2 minutes—or just speak and we'll transcribe.",
    },
    {
      number: 2,
      icon: "qr",
      title: "Check In at the Event",
      description:
        "Scan the QR code when you arrive. This verifies you're actually there and activates your matches.",
    },
    {
      number: 3,
      icon: "match",
      title: "Get Smart Matches",
      description:
        "Receive curated introductions with context on why you should meet. Save notes, set reminders, follow up later.",
    },
  ],
} as const;

export type StepsContent = typeof stepsContent;
