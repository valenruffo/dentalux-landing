"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { MessageCircle, Check } from "lucide-react";

const improvements = [
  { value: "color", label: "Color", description: "Dientes manchados o amarillos" },
  { value: "alineacion", label: "Alineación", description: "Dientes torcidos o apiñados" },
  { value: "forma", label: "Forma", description: "Dientes desgastados o irregulares" },
  { value: "todo", label: "Todo", description: "Quiero una sonrisa completa" },
];

const timelines = [
  { value: "urgente", label: "Lo antes posible", description: "Quiero empezar ya" },
  { value: "flexible", label: "En unos meses", description: "Tengo tiempo para planificar" },
];

export function LeadFormSection() {
  const [improvement, setImprovement] = useState("");
  const [timeline, setTimeline] = useState("");
  const [isReady, setIsReady] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsReady(improvement !== "" && timeline !== "");
  }, [improvement, timeline]);

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

  const handleWhatsApp = () => {
    const phone = "5491112345678";
    const text = encodeURIComponent(
      `Hola! Quiero evaluar mi sonrisa.\n\n` +
        `¿Qué me gustaría mejorar?: ${improvements.find((i) => i.value === improvement)?.label}\n` +
        `¿Para cuándo?: ${timelines.find((t) => t.value === timeline)?.label}\n\n` +
        `Me gustaría agendar una evaluación.`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <section id="evaluacion" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-12">
          <span className="text-emerald font-medium text-sm tracking-wide uppercase mb-4 block">
            Pre-Evaluación
          </span>
          <h2
            className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Comenzá tu Transformación
          </h2>
          <p className="text-gray-500 text-lg">
            Respondé 2 preguntas y te contactamos con un especialista.
          </p>
        </div>

        <Card className="bg-white rounded-3xl shadow-sm border-0 overflow-hidden">
          <CardContent className="p-8 lg:p-10">
            <div className="space-y-10">
              {/* Question 1 */}
              <div>
                <Label className="text-gray-900 font-semibold text-base mb-4 block">
                  ¿Qué te gustaría mejorar de tu sonrisa?
                </Label>
                <RadioGroup
                  value={improvement}
                  onValueChange={setImprovement}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {improvements.map((item) => {
                    const isSelected = improvement === item.value;
                    return (
                      <div key={item.value}>
                        <RadioGroupItem
                          value={item.value}
                          id={item.value}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={item.value}
                          className={`flex flex-col p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                            isSelected
                              ? "border-emerald bg-emerald/5"
                              : "border-gray-200 hover:border-emerald/30"
                          }`}
                        >
                          <span className="font-medium text-gray-900">{item.label}</span>
                          <span className="text-sm text-gray-500 mt-1">{item.description}</span>
                        </Label>
                      </div>
                    );
                  })}
                </RadioGroup>
              </div>

              {/* Question 2 */}
              <div>
                <Label className="text-gray-900 font-semibold text-base mb-4 block">
                  ¿Para cuándo te gustaría empezar?
                </Label>
                <RadioGroup
                  value={timeline}
                  onValueChange={setTimeline}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {timelines.map((item) => {
                    const isSelected = timeline === item.value;
                    return (
                      <div key={item.value}>
                        <RadioGroupItem
                          value={item.value}
                          id={item.value}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={item.value}
                          className={`flex flex-col p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                            isSelected
                              ? "border-emerald bg-emerald/5"
                              : "border-gray-200 hover:border-emerald/30"
                          }`}
                        >
                          <span className="font-medium text-gray-900">{item.label}</span>
                          <span className="text-sm text-gray-500 mt-1">{item.description}</span>
                        </Label>
                      </div>
                    );
                  })}
                </RadioGroup>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Button
                  onClick={handleWhatsApp}
                  disabled={!isReady}
                  className={`w-full py-6 rounded-2xl text-base font-semibold transition-all duration-300 ${
                    isReady
                      ? "bg-emerald hover:bg-emerald-dark text-white shadow-lg hover:shadow-xl"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {isReady ? "Enviar a WhatsApp" : "Completá las preguntas"}
                </Button>

                {isReady && (
                  <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
                    <Check className="w-4 h-4 text-emerald" />
                    <span>Tu mensaje está listo con tus respuestas</span>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trust note */}
        <div className="text-center mt-8 text-sm text-gray-400">
          <p>
            Tu información es confidencial. Solo la usamos para contactarte y
            brindarte una atención personalizada.
          </p>
        </div>
      </div>
    </section>
  );
}