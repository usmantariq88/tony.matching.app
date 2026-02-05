"use client";

import { featuresContent } from "@/content/features";
import { useInView } from "@/hooks/useInView";

const icons = {
  ai: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  voice: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
      />
    </svg>
  ),
  qr: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
      />
    </svg>
  ),
  notes: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    </svg>
  ),
  reminder: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    </svg>
  ),
  analytics: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  ),
};

export function Features() {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section
      id="features"
      className="section-padding relative overflow-hidden"
      aria-labelledby="features-heading"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-indigo-50/50 via-violet-50/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            id="features-heading"
            className={`text-3xl md:text-4xl font-bold text-slate-900 mb-4 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            {featuresContent.sectionTitle}
          </h2>
          <p
            className={`text-lg text-slate-600 ${
              isVisible ? "animate-fade-in-up delay-100" : "opacity-0"
            }`}
          >
            {featuresContent.sectionSubtitle}
          </p>
        </div>

        {/* Features grid */}
        <div className="feature-grid">
          {featuresContent.features.map((feature, index) => (
            <article
              key={feature.title}
              className={`glass rounded-2xl p-6 card-hover ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white mb-4">
                {icons[feature.icon as keyof typeof icons]}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 mb-4">{feature.description}</p>

              {/* Micro example */}
              <div className="px-3 py-2 bg-slate-50 rounded-lg border border-slate-100">
                <p className="text-sm text-slate-500 italic">{feature.example}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
