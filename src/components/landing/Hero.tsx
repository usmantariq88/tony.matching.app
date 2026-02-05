"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { heroContent } from "@/content/hero";

function MatchCard({
  name,
  role,
  matchScore,
  reason,
  index,
  isVisible,
}: {
  name: string;
  role: string;
  matchScore: number;
  reason: string;
  index: number;
  isVisible: boolean;
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div
      className={`
        relative bg-white/10 backdrop-blur-xl rounded-2xl p-5 shadow-2xl
        border border-white/20 max-w-xs
        transition-all duration-700 ease-out
        ${isVisible 
          ? "opacity-100 translate-y-0 translate-x-0" 
          : "opacity-0 translate-y-10 translate-x-10"
        }
      `}
      style={{
        transitionDelay: `${800 + index * 200}ms`,
      }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex items-start gap-4 relative z-10">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/30">
          <span className="text-white font-semibold text-sm">{initials}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h4 className="font-semibold text-white truncate">{name}</h4>
            <span className="flex-shrink-0 px-2.5 py-1 text-xs font-bold text-emerald-300 bg-emerald-500/20 border border-emerald-500/30 rounded-full">
              {matchScore}%
            </span>
          </div>
          <p className="text-sm text-slate-300 mb-2 truncate">{role}</p>
          <p className="text-xs text-indigo-300 font-medium">✨ {reason}</p>
        </div>
      </div>
    </div>
  );
}

function FloatingParticle({ delay, size, x, y }: { delay: number; size: number; x: number; y: number }) {
  return (
    <div
      className="absolute rounded-full bg-gradient-to-br from-indigo-400/30 to-violet-500/20 animate-float-particle"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${4 + Math.random() * 3}s`,
      }}
    />
  );
}

function GridPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.03]" aria-hidden="true">
      <defs>
        <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-grid)" />
    </svg>
  );
}

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const particles = [
    { delay: 0, size: 6, x: 15, y: 20 },
    { delay: 1.5, size: 4, x: 85, y: 15 },
    { delay: 0.8, size: 8, x: 70, y: 60 },
    { delay: 2, size: 5, x: 25, y: 75 },
    { delay: 1, size: 6, x: 90, y: 80 },
    { delay: 0.5, size: 4, x: 10, y: 50 },
    { delay: 1.8, size: 7, x: 55, y: 10 },
    { delay: 2.5, size: 5, x: 40, y: 85 },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-slate-950"
      aria-labelledby="hero-heading"
    >
      {/* Dark gradient background */}
      <div className="absolute inset-0 -z-10">
        {/* Primary gradient orbs */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-bl from-indigo-600/40 via-violet-600/20 to-transparent rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-violet-600/30 via-fuchsia-600/15 to-transparent rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-gradient-to-br from-cyan-500/20 via-teal-500/10 to-transparent rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: "4s" }} />
        
        {/* Grid pattern */}
        <GridPattern />
        
        {/* Floating particles */}
        {particles.map((particle, i) => (
          <FloatingParticle key={i} {...particle} />
        ))}
        
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-sm font-medium text-slate-300">Now matching at 180+ events</span>
            </div>

            <h1
              id="hero-heading"
              className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <span className="text-white">Meet the</span>
              <br />
              <span className="relative">
                <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent animate-gradient-x">
                  right people.
                </span>
                {/* Underline decoration */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-indigo-500/50"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,6 Q50,0 100,6 T200,6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="animate-draw-line"
                  />
                </svg>
              </span>
            </h1>

            <p
              className={`text-lg md:text-xl text-slate-400 mb-8 max-w-xl leading-relaxed transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              {heroContent.subheadline}
            </p>

            <ul
              className={`space-y-4 mb-10 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "500ms" }}
              role="list"
            >
              {heroContent.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-slate-300 group"
                  style={{ transitionDelay: `${550 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mt-0.5 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="group-hover:text-white transition-colors">{benefit}</span>
                </li>
              ))}
            </ul>

            <div
              className={`flex flex-col sm:flex-row gap-4 mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <Link
                href={heroContent.cta.primary.href}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                {/* Button gradient background */}
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 animate-gradient-x" />
                {/* Shine effect */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </span>
                <span className="relative">{heroContent.cta.primary.label}</span>
                <svg className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href={heroContent.cta.secondary.href}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-300 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
              >
                {heroContent.cta.secondary.label}
                <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
            </div>

            <div
              className={`flex items-center gap-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              {/* Avatar stack */}
              <div className="flex -space-x-2">
                {["SC", "MW", "PS"].map((initials, i) => (
                  <div
                    key={initials}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-white text-xs font-semibold ring-2 ring-slate-950"
                    style={{ zIndex: 3 - i }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-400">
                <span className="text-emerald-400 font-semibold">2,400+</span> professionals matched
              </p>
            </div>
          </div>

          {/* Right visual - Match cards */}
          <div className="relative hidden lg:flex items-center justify-center" aria-hidden="true">
            {/* Orbital ring */}
            <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full animate-spin-slow" />
            <div className="absolute w-[400px] h-[400px] border border-white/5 rounded-full animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "25s" }} />
            <div className="absolute w-[300px] h-[300px] border border-indigo-500/10 rounded-full" />
            
            {/* Center glow */}
            <div className="absolute w-32 h-32 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full blur-[60px] opacity-60 animate-pulse-slow" />
            
            {/* Match cards stacked */}
            <div className="relative">
              {heroContent.matchCards.map((card, index) => (
                <div
                  key={card.name}
                  className="absolute hover:z-50 transition-all duration-300 hover:scale-105"
                  style={{
                    top: `${-60 + index * 100}px`,
                    left: `${-20 + index * 30}px`,
                    transform: `rotate(${-5 + index * 5}deg)`,
                    zIndex: 3 - index,
                  }}
                >
                  <MatchCard {...card} index={index} isVisible={isVisible} />
                </div>
              ))}
            </div>
            
            {/* Floating icons */}
            <div className={`absolute top-10 right-10 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 border border-emerald-500/20 flex items-center justify-center backdrop-blur-sm transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`} style={{ transitionDelay: "1200ms" }}>
              <span className="text-2xl">🎯</span>
            </div>
            <div className={`absolute bottom-20 left-5 w-12 h-12 rounded-xl bg-gradient-to-br from-violet-400/20 to-fuchsia-500/20 border border-violet-500/20 flex items-center justify-center backdrop-blur-sm transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`} style={{ transitionDelay: "1400ms" }}>
              <span className="text-2xl">⚡</span>
            </div>
            <div className={`absolute top-1/2 right-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center backdrop-blur-sm transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`} style={{ transitionDelay: "1600ms" }}>
              <span className="text-2xl">🤝</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "1500ms" }}>
        <div className="flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-slate-500 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
