import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top section */}
        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="text-lg font-semibold text-white">
              Superferio
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Supplying reliable refrigeration gases and spare parts
              for HVAC and refrigeration professionals.
            </p>
          </div>

          {/* Company */}
          <div>
            <div className="text-sm font-semibold text-white">
              Company
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/why-superferio" className="hover:text-white">
                  Why Superferio
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <div className="text-sm font-semibold text-white">
              Products
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/Products/gases" className="hover:text-white">
                  Refrigeration Gases
                </Link>
              </li>
              <li>
                <Link href="/Products/spare-parts" className="hover:text-white">
                  Spare Parts
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm font-semibold text-white">
              Contact
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>📍 Local B2B Supply</li>
              <li>📞 +20 XXX XXX XXXX</li>
              <li>✉️ info@superferio.com</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-400 flex flex-col md:flex-row justify-between gap-4">
          <span>
            © {new Date().getFullYear()} Superferio. All rights reserved.
          </span>
          <span>
            Built for professional refrigeration supply.
          </span>
        </div>

      </div>
    </footer>
  );
}