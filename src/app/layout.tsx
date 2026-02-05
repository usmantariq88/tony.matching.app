import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tōny | Smart Networking for Professional Events",
  description:
    "AI-powered matching for professional events. Meet the right people with verified attendance, smart matching, and post-event relationship tools. No awkward small talk. Just meaningful connections.",
  keywords: [
    "networking",
    "professional events",
    "AI matching",
    "event networking",
    "business networking",
    "conferences",
    "meetups",
  ],
  authors: [{ name: "Tōny" }],
  openGraph: {
    title: "Tōny | Smart Networking for Professional Events",
    description:
      "AI-powered matching for professional events. Meet the right people with verified attendance and smart matching.",
    type: "website",
    locale: "en_US",
    siteName: "Tōny",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tōny | Smart Networking for Professional Events",
    description:
      "AI-powered matching for professional events. Meet the right people with verified attendance and smart matching.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
