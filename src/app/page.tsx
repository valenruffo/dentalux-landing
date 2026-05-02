import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { CasesSection } from "@/components/cases-section";
import { TreatmentsSection } from "@/components/treatments-section";
import { LeadFormSection } from "@/components/lead-form-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQsSection } from "@/components/faqs-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CasesSection />
        <TreatmentsSection />
        <LeadFormSection />
        <TestimonialsSection />
        <FAQsSection />
      </main>
      <Footer />
    </>
  );
}