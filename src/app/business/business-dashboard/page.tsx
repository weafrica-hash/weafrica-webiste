"use client";

import { BarChart3, Users, Building2, CreditCard, Settings } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BusinessDashboardPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <section className="relative h-[60vh]">
        <Image
          src="/images/business-dashboard.jpg"
          alt="Business Dashboard"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white"
          >
            Business Dashboard
          </motion.h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          Manage trips, branches, payments, staff, and analytics — all from a single powerful dashboard.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: BarChart3, title: "Real-time Analytics", desc: "See trips, spending & trends." },
            { icon: Users, title: "User Management", desc: "Add & control staff accounts." },
            { icon: Building2, title: "Branch Control", desc: "Manage multiple business branches." },
            { icon: CreditCard, title: "Payment Insights", desc: "Track all payments & invoices." },
            { icon: Settings, title: "Full Customisation", desc: "Set rules & policies for teams." }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="p-6 border rounded-2xl bg-gray-50 dark:bg-gray-900 dark:border-gray-800"
            >
              <item.icon className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
