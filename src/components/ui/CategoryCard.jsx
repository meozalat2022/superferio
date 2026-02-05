import Link from "next/link";

export default function CategoryCard({ title, description, href }) {
  return (
    <Link
      href={href}
      className="block rounded-xl border border-slate-200 bg-white p-8 transition hover:shadow-lg"
    >
      <h3 className="text-lg font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-slate-600">
        {description}
      </p>

      <span className="mt-6 inline-block text-sm font-medium text-blue-600">
        Explore →
      </span>
    </Link>
  );
}
