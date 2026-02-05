"use client";

import { matchesContent } from "@/content/matches";
import { useInView } from "@/hooks/useInView";

function MatchCard({
  match,
  index,
  isVisible,
}: {
  match: (typeof matchesContent.sampleMatches)[number];
  index: number;
  isVisible: boolean;
}) {
  return (
    <article
      className={`glass rounded-2xl p-6 shadow-lg card-hover ${
        isVisible ? "animate-slide-in-right" : "opacity-0"
      }`}
      style={{ animationDelay: `${(index + 1) * 150}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
            <span className="text-white font-semibold text-sm">{match.avatar}</span>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">{match.name}</h4>
            <p className="text-sm text-slate-500">{match.role} at {match.company}</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-2xl font-bold gradient-text">{match.matchScore}%</span>
          <span className="text-xs text-slate-400">match</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {match.tags.map((tag) => (
          <span key={tag} className="px-2 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      <div className="mb-4">
        <h5 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Why you should meet</h5>
        <ul className="space-y-1.5">
          {match.matchReasons.map((reason, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
              <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {reason}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-3 bg-gradient-to-r from-indigo-50 to-violet-50 rounded-xl mb-4">
        <h5 className="text-xs font-semibold text-indigo-600 mb-1.5">💬 Suggested opener</h5>
        <p className="text-sm text-slate-700 italic">"{match.suggestedOpener}"</p>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 py-2 px-3 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">Note</button>
        <button className="flex-1 py-2 px-3 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">Remind</button>
        <button className="flex-1 py-2 px-3 text-sm font-medium text-white gradient-bg hover:opacity-90 rounded-lg transition-opacity">Connect</button>
      </div>
    </article>
  );
}

export function MatchesPreview() {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section className="section-padding bg-white" aria-labelledby="matches-heading" ref={ref}>
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 id="matches-heading" className={`text-3xl md:text-4xl font-bold text-slate-900 mb-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            {matchesContent.sectionTitle}
          </h2>
          <p className={`text-lg text-slate-600 ${isVisible ? "animate-fade-in-up delay-100" : "opacity-0"}`}>
            {matchesContent.sectionSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matchesContent.sampleMatches.map((match, index) => (
            <MatchCard key={match.id} match={match} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MatchesPreview;
