"use client";

import Link from "next/link";
import { organizersContent } from "@/content/organizers";
import { useInView } from "@/hooks/useInView";

const icons = {
  event: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  attendees: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  matching: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  analytics: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
};

export function OrganizerSection() {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section id="organizers" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-violet-100/50 via-indigo-100/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={isVisible ? "animate-fade-in-up" : "opacity-0"}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{organizersContent.sectionTitle}</h2>
            <p className="text-lg text-slate-600 mb-6">{organizersContent.sectionSubtitle}</p>
            <p className="text-slate-600 mb-8">{organizersContent.description}</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {organizersContent.features.map((feature, index) => (
                <div key={feature.title} className="flex gap-3" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center text-white flex-shrink-0">
                    {icons[feature.icon as keyof typeof icons]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href={organizersContent.cta.href} className="btn btn-primary">
              {organizersContent.cta.label}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <p className="text-sm text-slate-500 mt-3">{organizersContent.cta.subtext}</p>
          </div>

          <div className={`${isVisible ? "animate-slide-in-right delay-200" : "opacity-0"}`}>
            <div className="dashboard-mock shadow-2xl">
              <div className="dashboard-mock-header">
                <div className="dashboard-mock-dot bg-red-400" />
                <div className="dashboard-mock-dot bg-yellow-400" />
                <div className="dashboard-mock-dot bg-green-400" />
                <span className="ml-3 text-white/60 text-sm">{organizersContent.dashboardPreview.eventName}</span>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-white/60 text-xs mb-1">Checked In</p>
                    <p className="text-2xl font-bold text-white">
                      {organizersContent.dashboardPreview.stats.checkedIn}
                      <span className="text-white/40 text-lg">/{organizersContent.dashboardPreview.stats.totalAttendees}</span>
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-white/60 text-xs mb-1">Matches Made</p>
                    <p className="text-2xl font-bold text-emerald-400">{organizersContent.dashboardPreview.stats.matchesMade}</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/60 text-xs mb-3">Recent Activity</p>
                  <div className="space-y-2">
                    {organizersContent.dashboardPreview.recentActivity.map((activity, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-white/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrganizerSection;
