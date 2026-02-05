export default function CTA() {
  return (
    <section className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold">
          Need refrigeration gas or spare parts?
        </h2>
        <p className="mt-4 text-blue-100">
          Talk to our team and get the right solution for your business.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/contact"
            className="px-6 py-3 bg-white text-blue-600 rounded-md font-medium"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
