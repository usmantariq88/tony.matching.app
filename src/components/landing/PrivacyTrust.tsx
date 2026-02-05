"use client";

import { privacyContent } from "@/content/privacy";
import { useInView } from "@/hooks/useInView";

const icons = {
  ownership: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  verified: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  nospam: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
    </svg>
  ),
  security: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
};

const badgeIcons = {
  soc2: "🛡️",
  gdpr: "🇪🇺",
  encryption: "🔐",
};

export function PrivacyTrust() {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section id="privacy" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-teal-100/40 via-cyan-100/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-900 mb-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            {privacyContent.sectionTitle}
          </h2>
          <p className={`text-lg text-slate-600 ${isVisible ? "animate-fade-in-up delay-100" : "opacity-0"}`}>
            {privacyContent.sectionSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {privacyContent.trustPoints.map((point, index) => (
            <article
              key={point.title}
              className={`glass rounded-2xl p-6 text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white mx-auto mb-4">
                {icons[point.icon as keyof typeof icons]}
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{point.title}</h3>
              <p className="text-sm text-slate-600">{point.description}</p>
            </article>
          ))}
        </div>

        <div className={`flex flex-wrap justify-center gap-4 ${isVisible ? "animate-fade-in-up delay-500" : "opacity-0"}`}>
          {privacyContent.badges.map((badge) => (
            <div key={badge.label} className="trust-badge">
              <span>{badgeIcons[badge.icon as keyof typeof badgeIcons]}</span>
              {badge.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PrivacyTrust;
