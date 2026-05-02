"use client";

import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.42 0.11 170) 1px, transparent 0)`,
        backgroundSize: "32px 32px"
      }} />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 opacity-40" style={{
        background: `radial-gradient(ellipse at 70% 50%, oklch(0.42 0.11 170 / 0.08) 0%, transparent 60%)`
      }} />

      {/* Decorative smile SVG */}
      <div className="absolute bottom-10 right-10 opacity-[0.06] pointer-events-none hidden lg:block">
        <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Smile arc */}
          <path d="M60 120C60 120 100 200 140 200C180 200 220 120 220 120" stroke="oklch(0.42 0.11 170)" strokeWidth="8" strokeLinecap="round"/>
          {/* Teeth hints */}
          <path d="M90 145L95 160" stroke="oklch(0.42 0.11 170)" strokeWidth="4" strokeLinecap="round"/>
          <path d="M115 155L118 170" stroke="oklch(0.42 0.11 170)" strokeWidth="4" strokeLinecap="round"/>
          <path d="M140 158L140 173" stroke="oklch(0.42 0.11 170)" strokeWidth="4" strokeLinecap="round"/>
          <path d="M165 155L162 170" stroke="oklch(0.42 0.11 170)" strokeWidth="4" strokeLinecap="round"/>
          <path d="M190 145L185 160" stroke="oklch(0.42 0.11 170)" strokeWidth="4" strokeLinecap="round"/>
          {/* Sparkles */}
          <circle cx="80" cy="80" r="3" fill="oklch(0.78 0.08 85)"/>
          <circle cx="200" cy="90" r="2" fill="oklch(0.78 0.08 85)"/>
          <circle cx="230" cy="160" r="2.5" fill="oklch(0.78 0.08 85)"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="animate-hero inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 mb-8">
          <span className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#C9A962] text-[#C9A962]" />
            ))}
          </span>
          <span className="text-xs font-medium text-gray-500">
            Más de +500 sonrisas transformadas
          </span>
        </div>

        {/* Title */}
        <h1
          className="animate-hero animate-hero-delay-100 font-semibold tracking-tight text-gray-900 mb-6"
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
            lineHeight: 1.1,
          }}
        >
          Diseñamos la Sonrisa que{" "}
          <span className="text-emerald">Siempre Quisiste</span> Tener
        </h1>

        {/* Subtitle */}
        <p
          className="animate-hero animate-hero-delay-200 text-gray-500 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Especialistas en Carillas de Porcelana, Ortodoncia Invisible y
          Blanqueamiento Premium. Resultados naturales y sin dolor.
        </p>

        {/* CTA */}
        <div className="animate-hero animate-hero-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#evaluacion">
            <Button className="bg-emerald hover:bg-emerald-dark text-white font-semibold px-8 py-3.5 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2">
              Quiero Evaluar mi Sonrisa
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
          <a href="#casos">
            <Button
              variant="ghost"
              className="text-gray-600 font-medium px-6 py-3.5 rounded-full text-base hover:bg-gray-50"
            >
              Ver casos reales
            </Button>
          </a>
        </div>

        {/* Trust indicators */}
        <div className="animate-hero animate-hero-delay-400 mt-16 pt-10 border-t border-gray-100">
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Certificados internacionalmente
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              +15 años de experiencia
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              +500 pacientes satisfechos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}