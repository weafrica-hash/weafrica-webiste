"use client";

import { useState } from "react";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-black text-gray-200 py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Contact Us
        </h1>

        <p className="mt-6 text-lg text-gray-400 leading-relaxed">
          Need help? Want to partner with WeAfrica? Our support team is available 24/7.
        </p>

        {/* CONTACT DETAILS */}
        <div className="mt-16 bg-gray-900 p-8 rounded-2xl border border-gray-800">
          <h3 className="text-2xl font-bold text-white">Support Details</h3>

          <p className="mt-4 text-gray-300">
            Phone: <span className="text-yellow-400">+265 899 920 200</span>
          </p>

          <p className="mt-2 text-gray-300">
            Email: <span className="text-yellow-400">support@weafrica.net</span>
          </p>

          <p className="mt-2 text-gray-300">
            Address:{" "}
            <span className="text-yellow-400">
              Golden Peacock Hotel, City Centre, Lilongwe, Malawi
            </span>
          </p>
        </div>

        {/* CONTACT FORM */}
        <div className="mt-16 bg-gray-900 p-10 rounded-2xl border border-gray-800">
          <h3 className="text-2xl font-bold text-white">Send Us a Message</h3>

          {!submitted ? (
            <form className="mt-8 grid gap-6" onSubmit={handleSubmit}>
              <input
                type="text"
                required
                placeholder="Your Full Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-yellow-500 outline-none"
              />

              <input
                type="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-yellow-500 outline-none"
              />

              <textarea
                rows={5}
                required
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-yellow-500 outline-none"
              ></textarea>

              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          ) : (
            <p className="text-green-400 text-lg mt-6">
              Thank you! Your message has been sent.
            </p>
          )}
        </div>

        {/* GOOGLE MAP */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-gray-800 shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.751056933015!2d33.77022717506813!3d-13.963581787639534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x191e6d4b8a4b7077%3A0x5ce0f6cfafbe89ab!2sGolden%20Peacock%20Hotel!5e0!3m2!1sen!2smw!4v1700000000000!5m2!1sen!2smw"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>

      </div>

      {/* FOOTER */}
      <div className="mt-20">
        <Footer />
      </div>
    </main>
  );
}
