"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navigationContent } from "@/content/navigation";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/95 backdrop-blur-xl shadow-lg"
          : "py-5 bg-transparent"
      }`}
      role="banner"
    >
      <div className="container-custom">
        <nav
          className="flex items-center justify-between"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label={`${navigationContent.logo.text} - ${navigationContent.logo.tagline}`}
          >
            <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-none transition-colors duration-300 ${isScrolled ? "text-slate-900" : "text-white"}`}>
                {navigationContent.logo.text}
              </span>
              <span className={`text-[10px] leading-none mt-0.5 hidden sm:block transition-colors duration-300 ${isScrolled ? "text-slate-500" : "text-slate-400"}`}>
                {navigationContent.logo.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationContent.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? "text-slate-600 hover:text-indigo-600" 
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={navigationContent.cta.secondary.href}
              className={`text-sm font-medium py-2.5 px-5 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? "text-slate-700 bg-slate-100 hover:bg-slate-200"
                  : "text-white bg-white/10 border border-white/20 hover:bg-white/20"
              }`}
            >
              {navigationContent.cta.secondary.label}
            </Link>
            <Link
              href={navigationContent.cta.primary.href}
              className="btn btn-primary text-sm py-2.5 px-5"
            >
              {navigationContent.cta.primary.label}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 -mr-2 transition-colors ${isScrolled ? "text-slate-600 hover:text-slate-900" : "text-white hover:text-slate-200"}`}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={navigationContent.mobileMenuLabel}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl py-4"
            role="menu"
          >
            <div className="container-custom flex flex-col gap-2">
              {navigationContent.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3 px-4 text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors font-medium"
                  role="menuitem"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-slate-100 mt-2 pt-4 flex flex-col gap-2">
                <Link
                  href={navigationContent.cta.secondary.href}
                  className="btn btn-secondary w-full justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navigationContent.cta.secondary.label}
                </Link>
                <Link
                  href={navigationContent.cta.primary.href}
                  className="btn btn-primary w-full justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navigationContent.cta.primary.label}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
