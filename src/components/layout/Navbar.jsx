"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="text-xl font-semibold text-slate-900">
            Superferio
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">

            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>

            <Link href="/about" className="hover:text-slate-900">
              About
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="hover:text-slate-900">
                Products
              </button>

              {productsOpen && (
                <div className="absolute top-full  w-56 bg-white border rounded-lg shadow-sm">
                  <Link
                    href="/Products/gases"
                    className="block px-4 py-3 hover:bg-slate-50"
                  >
                    Refrigeration Gases
                  </Link>
                  <Link
                    href="/Products/spare-parts"
                    className="block px-4 py-3 hover:bg-slate-50"
                  >
                    Spare Parts
                  </Link>
                </div>
              )}
            </div>

            <Link href="/why-superferio" className="hover:text-slate-900">
              Why Superferio
            </Link>

            {/* <Link href="/contact" className="hover:text-slate-900">
              Contact
            </Link> */}

          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-slate-700"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="px-6 py-6 space-y-4 text-sm font-medium">

            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>

            <div>
              <div className="text-slate-500 text-xs mb-2">
                Products
              </div>
              <div className="space-y-2 pl-4">
                <Link
                  href="/products/gases"
                  onClick={() => setMenuOpen(false)}
                >
                  Refrigeration Gases
                </Link>
                <Link
                  href="/products/spare-parts"
                  onClick={() => setMenuOpen(false)}
                >
                  Spare Parts
                </Link>
              </div>
            </div>

            <Link href="/why-superferio" onClick={() => setMenuOpen(false)}>
              Why Superferio
            </Link>

            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>

            <Link
              href="/contact"
              className="block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md text-center"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}