"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const cases = [
  {
    title: "Diseño con Carillas de Porcelana",
    sessions: "2 sesiones",
    description:
      "Transformación completa de sonrisa con diseño digital 3D. Paciente recuperó confianza para sonreír libremente.",
  },
  {
    title: "Carillas + Blanqueamiento",
    sessions: "3 sesiones",
    description:
      "Combinación de tratamientos para lograr un resultado natural y luminoso. Cambio radical sin intervenciones invasivas.",
  },
  {
    title: "Ortodoncia Invisible",
    sessions: "6 meses",
    description:
      "Alineación dental con aligners transparentes. Casi imperceptible, máximo confort y resultados predecibles.",
  },
  {
    title: "Rehabilitación Estética Total",
    sessions: "4 sesiones",
    description:
      "Diseño de sonrisa completo combinando carillas, blanqueamiento y ajustes menores. Sonrisa de magazine.",
  },
];

export function CasesSection() {
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
    <section id="casos" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={ref} className="text-center mb-16">
          <span className="text-emerald font-medium text-sm tracking-wide uppercase mb-4 block">
            Casos Reales
          </span>
          <h2
            className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Resultados que Hablan por Sí Solos
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Cada sonrisa es única. Conocé cómo transformamos la vida de nuestros
            pacientes con técnicas de odontología estética de vanguardia.
          </p>
        </div>

        {/* Cases grid */}
        <div className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((caseItem, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white rounded-2xl"
            >
              <CardContent className="p-0">
                {/* Before/After Image Placeholder */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 flex">
                    {/* Before half */}
                    <div className="w-1/2 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          className="w-16 h-16 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <span className="absolute top-3 left-3 text-xs font-medium text-gray-500 bg-white/80 px-2 py-1 rounded">
                        Antes
                      </span>
                    </div>
                    {/* After half */}
                    <div className="w-1/2 bg-gradient-to-br from-emerald/20 to-emerald/30 flex items-center justify-center relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          className="w-16 h-16 text-emerald/60"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <span className="absolute top-3 right-3 text-xs font-medium text-emerald bg-white/80 px-2 py-1 rounded">
                        Después
                      </span>
                    </div>
                  </div>

                  {/* Divider line */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white z-10" />
                </div>

                {/* Card content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-champagne bg-champagne/10 px-2 py-1 rounded-full">
                      {caseItem.sessions}
                    </span>
                  </div>
                  <h3
                    className="font-semibold text-gray-900 text-sm mb-2"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {caseItem.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {caseItem.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}