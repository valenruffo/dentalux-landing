"use client";

import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const whatsappNumber = "5491112345678";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Casos Reales", href: "#casos" },
    { label: "Tratamientos", href: "#tratamientos" },
    { label: "FAQs", href: "#faqs" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-emerald" strokeWidth={1.5} />
            <span
              className="text-lg font-semibold tracking-tight"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              DentaLux
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-emerald transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hola%2C%20quiero%20agendar%20una%20evaluaci%C3%B3n`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-emerald hover:bg-emerald-dark text-white text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow-md">
                Agendar Evaluación
              </Button>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-64 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-3 pt-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-gray-600 py-2"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hola%2C%20quiero%20agendar%20una%20evaluaci%C3%B3n`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <Button className="w-full bg-emerald hover:bg-emerald-dark text-white text-sm font-medium px-5 py-2.5 rounded-full mt-2">
                Agendar Evaluación
              </Button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}