export const footerContent = {
  cta: {
    headline: "Ready to network smarter?",
    subheadline:
      "Create your profile in 2 minutes. Free to start.",
    button: {
      label: "Get Started Free",
      href: "/signup",
    },
  },
  links: {
    product: {
      title: "Product",
      items: [
        { label: "How It Works", href: "#how-it-works" },
        { label: "Features", href: "#features" },
        { label: "For Organizers", href: "#organizers" },
        { label: "Pricing", href: "/pricing" },
      ],
    },
    company: {
      title: "Company",
      items: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
    legal: {
      title: "Legal",
      items: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "Security", href: "/security" },
      ],
    },
  },
  social: [
    { platform: "twitter", href: "https://twitter.com/tonynetwork", label: "Twitter" },
    { platform: "linkedin", href: "https://linkedin.com/company/tony", label: "LinkedIn" },
    { platform: "github", href: "https://github.com/tony-network", label: "GitHub" },
  ],
  copyright: "© 2024 Tōny. All rights reserved.",
  tagline: "Smart networking for meaningful connections.",
} as const;

export type FooterContent = typeof footerContent;
