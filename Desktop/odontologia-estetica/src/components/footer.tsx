import { Sparkles } from "lucide-react";
import Link from "next/link";

const whatsappNumber = "5491112345678";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald" strokeWidth={1.5} />
            <span
              className="text-lg font-semibold tracking-tight"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              DentaLux
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-8">
            <Link href="#casos" className="text-sm text-gray-400 hover:text-white transition-colors">
              Casos Reales
            </Link>
            <Link href="#tratamientos" className="text-sm text-gray-400 hover:text-white transition-colors">
              Tratamientos
            </Link>
            <Link href="#faqs" className="text-sm text-gray-400 hover:text-white transition-colors">
              FAQs
            </Link>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-emerald hover:text-emerald/80 transition-colors"
            >
              WhatsApp
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} DentaLux. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}