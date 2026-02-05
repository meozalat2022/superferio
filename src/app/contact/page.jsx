'use client';
import Section from "@/components/ui/Section";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("Message sent successfully ✔");
        e.target.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("Server error. Please try later.");
    }

    setLoading(false);
  }

  return (
    <main className="bg-white">
      <section className="bg-slate-50 border-b">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            We’re here to support your refrigeration business. Reach out and our
            team will respond as soon as possible.
          </p>
        </div>
      </section>

      <Section title="Get in Touch">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Business Inquiries
              </h3>
              <p className="text-slate-600">
                For product availability, pricing, and partnerships, contact us
                using the details below or the form.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <p className="font-medium text-slate-900">Phone</p>
                <p className="text-slate-600">+20 XXX XXX XXXX</p>
              </div>

              <div>
                <p className="font-medium text-slate-900">Email</p>
                <p className="text-slate-600">sales@superferio.com</p>
              </div>

              <div>
                <p className="font-medium text-slate-900">Location</p>
                <p className="text-slate-600">Cairo, Egypt</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-50 p-8 rounded-2xl space-y-6">
            <input name="name" required placeholder="Full Name" className="w-full border rounded-lg px-4 py-3" />
            <input name="company" placeholder="Company" className="w-full border rounded-lg px-4 py-3" />
            <input name="email" type="email" required placeholder="Email" className="w-full border rounded-lg px-4 py-3" />
            <input name="phone" placeholder="Phone" className="w-full border rounded-lg px-4 py-3" />
            <textarea name="message" required rows="4" placeholder="Message" className="w-full border rounded-lg px-4 py-3" />

            <button disabled={loading} className="bg-slate-900 text-white px-6 py-3 rounded-lg w-full">
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && <p className="text-sm text-center">{status}</p>}
          </form>
        </div>
      </Section>

      <section className="bg-slate-900 text-white mt-20">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Explore our products</h2>
          <Link href="/Products/gases" className="bg-white text-slate-900 px-6 py-3 rounded-lg font-medium">
            View Products
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ================= API ROUTE =================
Create this file:

src/app/api/contact/route.js

Paste this code there:

import { NextResponse } from 'next/server'

export async function POST(req) {
  const body = await req.json()

  console.log('NEW CONTACT MESSAGE:', body)

  // Later we will send email using Resend or Nodemailer

  return NextResponse.json({ success: true })
}
*/
