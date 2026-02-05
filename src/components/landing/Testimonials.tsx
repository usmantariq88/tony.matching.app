"use client";

import { testimonialsContent } from "@/content/testimonials";
import { useInView } from "@/hooks/useInView";

export function Testimonials() {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-900 mb-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            {testimonialsContent.sectionTitle}
          </h2>
          <p className={`text-lg text-slate-600 ${isVisible ? "animate-fade-in-up delay-100" : "opacity-0"}`}>
            {testimonialsContent.sectionSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsContent.testimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className={`testimonial-card glass rounded-2xl p-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <blockquote className="text-slate-700 mb-6 leading-relaxed">{testimonial.quote}</blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <cite className="font-semibold text-slate-900 not-italic block">{testimonial.author}</cite>
                  <p className="text-sm text-slate-500">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
