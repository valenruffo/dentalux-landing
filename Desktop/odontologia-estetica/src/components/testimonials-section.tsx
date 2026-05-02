"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    location: "Capital Federal",
    quote:
      "No puedo creer lo indoloro que fue el proceso. Pensé que iba a ser horrible pero no sentí NADA. La atención de lujo desde el primer minuto.",
    rating: 5,
    treatment: "Carillas de Porcelana",
  },
  {
    name: "Carlos Rodríguez",
    location: "Nordelta",
    quote:
      "Me molestaban mis dientes torcidos desde siempre. Con la ortodoncia invisible nadie notó que estaba en tratamiento. Resultados en 8 meses.",
    rating: 5,
    treatment: "Ortodoncia Invisible",
  },
  {
    name: "Ana Martínez",
    location: "Palermo",
    quote:
      "El blanqueamiento fue una locura, 4 tonos más blanco en una sesión. Y lo mejor es que no me sensibilizó. Totalmente recomendado.",
    rating: 5,
    treatment: "Blanqueamiento Láser",
  },
  {
    name: "Roberto Sánchez",
    location: "Tigre",
    quote:
      "Diseño de sonrisa completo. Cambiaron mi forma de ver la vida. Ya no me tapo la boca al reír. El equipo es increíble, muy profesional.",
    rating: 5,
    treatment: "Rehabilitación Estética",
  },
];

export function TestimonialsSection() {
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
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={ref} className="text-center mb-16">
          <span className="text-emerald font-medium text-sm tracking-wide uppercase mb-4 block">
            Testimonios
          </span>
          <h2
            className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Lo que Dicen Nuestros Pacientes
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Más de 500 personas ya transformaron su sonrisa con nosotros.
            Conocé sus experiencias.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="stagger-children grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all duration-300"
            >
              <CardContent className="p-0">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#C9A962] text-[#C9A962]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald/20 to-champagne/20 flex items-center justify-center">
                    <span className="text-emerald font-semibold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {testimonial.location} · {testimonial.treatment}
                    </p>
                  </div>
                  {/* Google badge */}
                  <div className="ml-auto">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200">
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      <span className="text-xs font-medium text-gray-600">5.0</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}