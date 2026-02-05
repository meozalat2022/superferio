import { products } from "../../../data/products";
import ProductCard from "../../../components/ui/ProductCard";

export const metadata = {
  title: "Refrigeration Spare Parts | Superferio",
  description:
    "Reliable refrigeration spare parts for maintenance and service professionals.",
};

export default function SparePartsPage() {
  const spareParts = products.filter(
    (product) => product.category === "spare-parts"
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Page Header */}
      <div className="mb-12 max-w-2xl">
        <h1 className="text-3xl font-semibold text-slate-900">
          Refrigeration Spare Parts
        </h1>
        <p className="mt-4 text-slate-600">
          Essential components and spare parts to keep
          refrigeration systems running efficiently.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {spareParts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}
