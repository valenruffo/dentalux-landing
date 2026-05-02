"use client";

import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.42 0.11 170) 1px, transparent 0)`,
        backgroundSize: "32px 32px"
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="animate-hero inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 mb-8 justify-center lg:justify-start">
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
              className="animate-hero animate-hero-delay-200 text-gray-500 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Especialistas en Carillas de Porcelana, Ortodoncia Invisible y
              Blanqueamiento Premium. Resultados naturales y sin dolor.
            </p>

            {/* CTA */}
            <div className="animate-hero animate-hero-delay-300 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
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
            <div className="animate-hero animate-hero-delay-400 mt-12 pt-8 border-t border-gray-100">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-400 text-sm">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Certificados
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  +15 años
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  +500 pacientes
                </span>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="animate-hero animate-hero-delay-200 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-emerald/10" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl shadow-emerald/10">
                {/* Placeholder gradient - replace with real image */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald/20 via-gray-100 to-champagne/20" />
                
                {/* Smile icon placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-32 h-32 text-emerald/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" strokeLinecap="round" />
                    <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2" strokeLinecap="round" />
                    <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                
                {/* TODO: Replace with real image */}
                {/* <img 
                  src="/hero-smile.jpg" 
                  alt="Sonrisa perfecta - resultado de tratamiento" 
                  className="absolute inset-0 w-full h-full object-cover"
                /> */}
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-2 -left-2 bg-white rounded-2xl shadow-lg px-4 py-3 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-emerald/20 flex items-center justify-center text-xs font-semibold text-emerald">M</div>
                    <div className="w-8 h-8 rounded-full bg-champagne/30 flex items-center justify-center text-xs font-semibold text-gray-600">C</div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">+500 pacientes</p>
                    <p className="text-[10px] text-gray-500">satisfechos</p>
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