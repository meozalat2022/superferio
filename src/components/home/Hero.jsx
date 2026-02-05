import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
            Reliable Refrigeration Gases & Spare Parts
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            Supplying certified refrigerants and high-quality spare parts
            for HVAC and refrigeration professionals.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
            >
              Contact Sales
            </a>
            <a
              href="/Products/gases"
              className="px-6 py-3 border border-slate-300 rounded-md text-sm font-medium hover:bg-white transition"
            >
              View Products
            </a>
          </div>
        </div>

        {/* Visual Placeholder */}
        <div className="hidden md:block h-80 bg-white border rounded-xl">
          <Image src="/superferio_hero.png" alt="Hero Image" width={600} height={400} className="w-full h-full object-cover rounded-xl" />
        </div>
      </div>
    </section>
  );
}
