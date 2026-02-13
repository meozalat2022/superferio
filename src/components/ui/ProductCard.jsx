import Link from "next/link";

export default function ProductCard({ product }) {

   if (!product) {
    console.error("ProductCard rendered without product");
    return null;
  }
  
  const {
    name,
    shortDescription,
    image,
    availability,
    slug,
    category,
  } = product;


  return (
    <div className="group rounded-xl border border-slate-200 bg-white transition hover:shadow-lg">
      {/* Image */}
      <div className="aspect-4/3 overflow-hidden rounded-t-xl bg-slate-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-base font-semibold text-slate-900">
          {name}
        </h3>

        <p className="mt-2 text-sm text-slate-600 line-clamp-3">
          {shortDescription}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs font-medium text-slate-500">
            {availability}
          </span>

          <Link
            href={`/Products/${category}/${slug}`}
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            View details →
          </Link>
        </div>
      </div>
    </div>
  );
}
