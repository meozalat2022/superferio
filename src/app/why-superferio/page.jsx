import Section from "@/components/ui/Section";
import Link from "next/link";

export default function WhySuperferio() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-slate-50 border-b">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Why Superferio
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            More than a supplier — a reliable partner for refrigeration
            professionals.
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <Section title="Built for Refrigeration Professionals">
        <div className="max-w-3xl text-slate-600 space-y-4">
          <p>
            Superferio focuses exclusively on refrigeration products. This
            specialization allows us to understand technical requirements,
            operational challenges, and the importance of reliability in
            cooling systems.
          </p>
          <p>
            We work with contractors, service companies, and businesses that
            require dependable products and consistent supply.
          </p>
        </div>
      </Section>

      {/* Key Reasons */}
      <Section title="What Sets Us Apart">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Product Quality",
              text: "Carefully selected refrigeration gases and components that meet industry standards and professional expectations.",
            },
            {
              title: "Focused Product Range",
              text: "A clear, relevant selection without unnecessary products — only what refrigeration systems truly need.",
            },
            {
              title: "Availability & Reliability",
              text: "Products available when needed, reducing downtime and operational delays.",
            },
            {
              title: "Professional Understanding",
              text: "Built around real-world refrigeration applications, not generic distribution.",
            },
          ].map((item, i) => (
            <div key={i} className="p-8 border rounded-2xl bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Business Mindset */}
      <Section title="Our Business Approach">
        <div className="grid md:grid-cols-3 gap-6">
          {["Long-term partnerships", "Clear communication", "Consistent supply"].map(
            (item, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl">
                <p className="font-medium text-slate-800">{item}</p>
              </div>
            )
          )}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-slate-900 text-white mt-20">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Choose a supplier that understands refrigeration
          </h2>
          <p className="text-slate-300 mb-8">
            Explore our products and see how Superferio can support your
            business.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/Products/gases"
              className="bg-white text-slate-900 px-6 py-3 rounded-lg font-medium"
            >
              View Products
            </Link>
            <Link
              href="/contact"
              className="border border-white px-6 py-3 rounded-lg font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
