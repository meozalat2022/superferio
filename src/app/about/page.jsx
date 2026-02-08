import React from 'react'
import Section from "@/components/ui/Section";
import Link from "next/link";

const About = () => {
  return (
     <main className="bg-white">
      {/* Hero */}
      <section className="bg-slate-50 border-b">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About Superferio
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Reliable refrigeration supplies for commercial and industrial
            applications.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <Section title="Who We Are">
        <div className="max-w-3xl text-slate-600 leading-relaxed space-y-4">
          <p>
            Superferio is a specialized supplier of refrigeration gases, spare
            parts, and essential components for commercial and industrial
            cooling systems.
          </p>
          <p>
            We serve contractors, maintenance companies, and businesses that
            depend on efficient and reliable refrigeration solutions in their
            daily operations.
          </p>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section title="Our Mission & Vision">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-slate-50 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3 text-slate-900">
              Our Mission
            </h3>
            <p className="text-slate-600">
              To provide high-quality refrigeration products that ensure system
              efficiency, safety, and long-term performance.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3 text-slate-900">
              Our Vision
            </h3>
            <p className="text-slate-600">
              To become a trusted regional partner for refrigeration
              professionals through product quality, availability, and technical
              understanding.
            </p>
          </div>
        </div>
      </Section>

      {/* Why Superferio */}
      <Section title="Why Superferio">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Carefully selected, certified refrigeration products",
            "Reliable sourcing and consistent availability",
            "Understanding of real-world refrigeration needs",
            "Focus on long-term partnerships, not one-time sales",
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 border rounded-xl bg-white shadow-sm"
            >
              <p className="text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What We Supply */}
      <Section title="What We Supply">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-50 rounded-2xl">
            <h3 className="font-semibold text-lg mb-2">Refrigeration Gases</h3>
            <p className="text-slate-600 text-sm">
              Certified refrigerants suitable for commercial and industrial
              systems.
            </p>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl">
            <h3 className="font-semibold text-lg mb-2">
              Spare Parts & Components
            </h3>
            <p className="text-slate-600 text-sm">
              Essential parts to keep refrigeration systems running efficiently.
            </p>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl">
            <h3 className="font-semibold text-lg mb-2">
              Accessories & Equipment
            </h3>
            <p className="text-slate-600 text-sm">
              Supporting tools and components for installation and maintenance.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-slate-900 text-white mt-20">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Looking for reliable refrigeration supplies?
          </h2>
          <p className="text-slate-300 mb-8">
            Explore our products or contact us for professional support.
          </p>

          <div className="flex gap-4 justify-center">
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
  )
}

export default About