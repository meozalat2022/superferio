export default function Section({ title, subtitle, children }) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {title && (
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-semibold text-slate-900">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-slate-600">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
