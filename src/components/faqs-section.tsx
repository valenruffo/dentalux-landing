"use client";

import { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Los tratamientos duelen?",
    answer:
      "No. Utilizamos tecnología de última generación que permite realizar todos los tratamientos de forma prácticamente indolora. Contamos con sistema de sedación consciente y anestesia local de última generación. La mayoría de nuestros pacientes quedan sorprendidos de lo cómodo que fue el procedimiento.",
  },
  {
    question: "¿Cuánto tiempo lleva un diseño de sonrisa completo?",
    answer:
      "Un diseño de sonrisa tradicional puede llevar entre 2 a 4 semanas desde la primera consulta hasta la colocación final. Con nuestra tecnología de diseño digital 3D y fresado CAD/CAM, podemos reducir ese tiempo significativamente. En muchos casos, el resultado final se logra en solo 2 sesiones.",
  },
  {
    question: "¿Trabajan con tarjetas o financiación?",
    answer:
      "Sí. Aceptamos todas las tarjetas de crédito y débito (hasta 12 cuotas sin interés). También ofrecemos planes de financiación personalizados sin interés adicionales. Consultanos por el plan que mejor se adapte a tu presupuesto.",
  },
  {
    question: "¿Tengo que ir a una consulta presencial primero?",
    answer:
      "Para una evaluación inicial podés enviar fotos de tu sonrisa y te asesoramos virtualmente. Sin embargo, para el tratamiento definitivo siempre requerimos una consulta presencial donde realizamos un escaneo 3D de tu boca, diagnóstico completo y plan de tratamiento personalizado.",
  },
];

export function FAQsSection() {
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
    <section id="faqs" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-12">
          <span className="text-emerald font-medium text-sm tracking-wide uppercase mb-4 block">
            Preguntas Frecuentes
          </span>
          <h2
            className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            ¿Tenés Alguna Duda?
          </h2>
          <p className="text-gray-500 text-lg">
            Resolvé las preguntas más comunes antes de contactarnos.
          </p>
        </div>

        <Accordion className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-gray-200 rounded-2xl px-6 overflow-hidden data-[state=open]:shadow-sm"
            >
              <AccordionTrigger className="py-5 hover:no-underline group">
                <span
                  className="text-left font-semibold text-gray-900 text-base"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-0 pb-5 text-gray-500 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}