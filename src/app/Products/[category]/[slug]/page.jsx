import { products } from "@/data/products";
import { notFound } from "next/navigation";

/* ================================
   Find product helper
================================ */
function getProduct(category, slug) {
  return products.find(
    (p) => p.category === category && p.slug === slug
  );
}

/* ================================
   Metadata (NOW ASYNC)
================================ */
export async function generateMetadata({ params }) {
  const { category, slug } = await params;   // ⭐ NEW

  const product = getProduct(category, slug);

  if (!product) {
    return {
      title: "Product Not Found | Superferio",
    };
  }

  return {
    title: `${product.name} | Superferio`,
    description: product.shortDescription,
  };
}

/* ================================
   Page (NOW ASYNC)
================================ */
export default async function ProductDetailsPage({ params }) {
  const { category, slug } = await params;   // ⭐ NEW

  const product = getProduct(category, slug);

  if (!product) return notFound();

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      
      {/* Title + Image */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        
        {/* Image */}
        <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Basic Info */}
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">
            {product.name}
          </h1>

          <p className="mt-4 text-slate-600">
            {product.description}
          </p>

          <div className="mt-6 text-sm text-slate-500">
            Availability:{" "}
            <span className="font-medium">
              {product.availability}
            </span>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-slate-900 mb-6">
          Specifications
        </h2>

        <div className="border rounded-xl divide-y">
          {Object.entries(product.specs).map(([key, value]) => (
            <div key={key} className="flex justify-between p-4">
              <span className="text-slate-500 capitalize">
                {key}
              </span>
              <span className="font-medium text-slate-900">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
