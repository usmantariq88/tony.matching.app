import {
  Header,
  Hero,
  HowItWorks,
  Features,
  MatchesPreview,
  OrganizerSection,
  Testimonials,
  PrivacyTrust,
  Footer,
} from "@/components/landing";

export default function Home() {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <HowItWorks />
        <Features />
        <MatchesPreview />
        <OrganizerSection />
        <Testimonials />
        <PrivacyTrust />
      </main>

      <Footer />
    </>
  );
}
