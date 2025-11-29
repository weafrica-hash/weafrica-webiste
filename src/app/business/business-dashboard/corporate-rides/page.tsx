"use client";

import { Briefcase, Users, Clock, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CorporateRidesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <section className="relative h-[60vh]">
        <Image
          src="/images/corporate-rides.jpg"
          alt="Corporate Rides"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white"
          >
            Corporate Rides
          </motion.h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          Give your team a reliable on-demand or scheduled transport solution — secure, efficient, and trackable.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: Briefcase, title: "Business Travel", desc: "Seamlessly move staff for meetings & operations." },
            { icon: Users, title: "Team Transport", desc: "Move multiple employees across branches or locations." },
            { icon: Clock, title: "Scheduled Trips", desc: "Pre-book rides for staff or executives." },
            { icon: ShieldCheck, title: "Safe & Secure", desc: "Verified drivers and 24/7 live tracking." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="p-6 border rounded-xl bg-gray-50 dark:bg-gray-900 dark:border-gray-800"
            >
              <item.icon className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
