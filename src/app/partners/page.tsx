"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function PartnersPage() {
  const partners = [
    {
      name: "ROSAF",
      logo: "/images/rosaf.png",
      desc: "Road Safety Awareness Federation — promoting safe mobility in Malawi.",
    },
    {
      name: "Miss Malawi",
      logo: "/images/miss-malawi.png",
      desc: "Official partner supporting national events and campaigns.",
    },
    {
      name: "Liberty Insurance Company",
      logo: "/images/liberty-insurance.png",
      desc: "Providing insurance cover and corporate support across Malawi.",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 py-24 px-6 flex flex-col">
      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-6">Our Partners</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          WeAfrica is proud to collaborate with trusted brands and national
          organizations to deliver safe, secure, and reliable services across Malawi.
        </p>
      </motion.div>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-20 flex-grow">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl transition-all cursor-pointer text-center"
          >
            {/* Logo */}
            <div className="relative w-full h-40 mb-6">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>

            {/* Text */}
            <h3 className="text-2xl font-semibold mb-3">{partner.name}</h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              {partner.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
