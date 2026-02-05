export const navigationContent = {
  logo: {
    text: "Tōny",
    tagline: "Smart Networking",
  },
  links: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "For Organizers", href: "#organizers" },
    { label: "Trust & Privacy", href: "#privacy" },
  ],
  cta: {
    primary: {
      label: "Create Profile",
      href: "/signup",
    },
    secondary: {
      label: "Check In",
      href: "/checkin",
    },
  },
  mobileMenuLabel: "Open menu",
} as const;

export type NavigationContent = typeof navigationContent;
