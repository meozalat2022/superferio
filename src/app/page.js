// src/app/page.jsx
import Hero from "@/components/home/Hero";
import Section from "@/components/ui/Section";
import ProductCard from "@/components/ui/ProductCard";
import CTA from "@/components/ui/CTA";
import CategoryCard from "@/components/ui/CategoryCard";

export default function HomePage() {
  return (
    
   
    
    <>
      <Hero />

      {/* Trust Indicators */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm text-slate-600">
          <div>✔ HVAC Professionals</div>
          <div>✔ Commercial & Industrial</div>
          <div>✔ Local Availability</div>
          <div>✔ Quality Focused</div>
        </div>
      </Section>

      {/* Products Overview */}
     <Section
  title="Our Products"
  subtitle="Reliable refrigeration supplies for professional use"
>
  <div className="grid md:grid-cols-2 gap-8">
    <CategoryCard
      title="Refrigeration Gases"
      description="Certified refrigerants suitable for commercial and industrial systems."
      href="/Products/gases"
    />

    <CategoryCard
      title="Refrigeration Spare Parts"
      description="Essential spare parts to keep refrigeration systems running efficiently."
      href="/Products/spare-parts"
    />
  </div>
</Section>

      {/* Industries */}
      <Section
        title="Industries We Serve"
        subtitle="Supporting a wide range of refrigeration applications"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-700">
          <div>Cold Storage</div>
          <div>Supermarkets</div>
          <div>Restaurants</div>
          <div>Factories</div>
          <div>Maintenance Companies</div>
          <div>Food Processing</div>
        </div>
      </Section>

      {/* Why Superferio */}
      <Section
        title="Why Superferio"
        subtitle="A partner you can rely on"
      >
        <ul className="space-y-4 text-slate-700 max-w-3xl">
          <li>• Carefully selected and reliable suppliers</li>
          <li>• Consistent availability of essential products</li>
          <li>• Practical understanding of HVAC and refrigeration needs</li>
          <li>• Friendly, responsive communication</li>
        </ul>
      </Section>

      {/* Final CTA */}
      <CTA />
    </>
  );
}
