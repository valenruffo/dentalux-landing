"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkle, AlignJustify, Sun } from "lucide-react";

const treatments = [
  {
    icon: Sparkle,
    title: "Carillas Estéticas",
    description:
      "Laminas ultrafinas de porcelana que transforman forma, color y posición. Resultados naturales y duraderos en solo 2 sesiones.",
    benefit: "Sonrisa perfecta en tiempo récord",
  },
  {
    icon: AlignJustify,
    title: "Ortodoncia Invisible",
    description:
      "Aligners transparentes y removibles que corrigen la alineación sin brackets visibles. Cómodo, discreto y efectivo.",
    benefit: "Sin brackets, sin compromisos",
  },
  {
    icon: Sun,
    title: "Blanqueamiento Láser",
    description:
      "Tecnología de última generación para blanquear dientes varios tonos en una sola sesión. Seguro y sin sensibilidad.",
    benefit: "Dientes 4 tonos más blancos",
  },
];

export function TreatmentsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tratamientos" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={ref} className="text-center mb-16">
          <span className="text-emerald font-medium text-sm tracking-wide uppercase mb-4 block">
            Tratamientos
          </span>
          <h2
            className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Soluciones Personalizadas para Tu Sonrisa
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Cada tratamiento está diseñado para lograr resultados excepcionales
            con el mínimo intervenciones y máximo confort.
          </p>
        </div>

        {/* Treatments grid */}
        <div className="stagger-children grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <Card
              key={index}
              className="group border border-gray-100 hover:border-emerald/30 transition-all duration-300 bg-white rounded-2xl overflow-hidden"
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-emerald/5 flex items-center justify-center mb-6 group-hover:bg-emerald/10 transition-colors">
                  <treatment.icon className="w-7 h-7 text-emerald" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-semibold text-gray-900 mb-3"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {treatment.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 leading-relaxed mb-6">
                  {treatment.description}
                </p>

                {/* Benefit badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-champagne/10 border border-champagne/20">
                  <svg
                    className="w-4 h-4 text-champagne"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    {treatment.benefit}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}