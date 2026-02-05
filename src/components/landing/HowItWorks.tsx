"use client";

import { stepsContent } from "@/content/steps";
import { useInView } from "@/hooks/useInView";

const icons = {
  profile: (
    <svg
      className="w-7 h-7"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  ),
  qr: (
    <svg
      className="w-7 h-7"
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
  match: (
    <svg
      className="w-7 h-7"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  ),
};

export function HowItWorks() {
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  return (
    <section
      id="how-it-works"
      className="section-padding bg-white"
      aria-labelledby="how-it-works-heading"
      ref={ref}
    >
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            id="how-it-works-heading"
            className={`text-3xl md:text-4xl font-bold text-slate-900 mb-4 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            {stepsContent.sectionTitle}
          </h2>
          <p
            className={`text-lg text-slate-600 ${
              isVisible ? "animate-fade-in-up delay-100" : "opacity-0"
            }`}
          >
            {stepsContent.sectionSubtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {stepsContent.steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Connector line (hidden on mobile and for last item) */}
              {index < stepsContent.steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[2px] bg-gradient-to-r from-indigo-200 to-violet-200"
                  aria-hidden="true"
                />
              )}

              <div className="flex flex-col items-center text-center">
                {/* Step number and icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center text-white shadow-lg animate-pulse-glow">
                    {icons[step.icon as keyof typeof icons]}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                    <span className="text-sm font-bold gradient-text">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 max-w-xs">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
