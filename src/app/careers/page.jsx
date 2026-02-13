import Section from "@/components/ui/Section";
import Link from "next/link";

export default function CareersPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-slate-50 border-b">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Careers at Superferio
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Join a growing refrigeration supply company focused on quality,
            reliability, and long-term partnerships.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <Section title="Why Work With Us">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Growth",
              text: "Be part of a growing company in the refrigeration industry.",
            },
            {
              title: "Impact",
              text: "Your work directly supports real businesses and industries.",
            },
            {
              title: "Stability",
              text: "Work in a practical, essential and reliable sector.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Open Positions */}
      <Section title="Open Positions">
        <div className="border rounded-2xl p-10">
          <h3 className="text-2xl font-semibold mb-4">
            Sales Representative
          </h3>
          
          <div className="space-y-4 text-slate-600 max-w-3xl">
            <p>
              We are currently looking for motivated sales representatives to
              help expand our customer base in the refrigeration and HVAC
              sector.
            </p>

            <div>
              <p className="font-semibold text-slate-800 mb-2">Key Responsibilities</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Develop and maintain relationships with contractors and businesses</li>
                <li>Promote refrigeration gases and spare parts</li>
                <li>Identify new sales opportunities</li>
                <li>Provide professional customer support</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-slate-800 mb-2">How to Apply</p>
              <p>
                Send your CV to:
                <a
                  href="mailto:careers@superferio.com"
                  className="text-slate-900 font-medium ml-2 underline"
                >
                  careers@superferio.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-slate-900 text-white mt-20">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want to grow with Superferio?
          </h2>
          <p className="text-slate-300 mb-8">
            Send your CV and we will contact you when a suitable role becomes
            available.
          </p>
          <a
            href="mailto:careers@superferio.com"
            className="bg-white text-slate-900 px-6 py-3 rounded-lg font-medium"
          >
            Send Your CV
          </a>
        </div>
      </section>
    </main>
  );
}
