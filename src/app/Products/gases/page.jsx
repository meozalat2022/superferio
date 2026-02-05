import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

export const metadata = {
  title: "Refrigeration Gases | Superferio",
  description:
    "Explore Superferio refrigeration gases for commercial and industrial HVAC applications.",
};
console.log(" products:", products);

export default function GasesPage() {
  const gases = products.filter(
    (product) => product.category === "gases"
  );



  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Page Header */}
      <div className="mb-12 max-w-2xl">
        <h1 className="text-3xl font-semibold text-slate-900">
          Refrigeration Gases
        </h1>
        <p className="mt-4 text-slate-600">
          High-quality refrigerants designed for professional
          refrigeration and HVAC systems.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {gases.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}
