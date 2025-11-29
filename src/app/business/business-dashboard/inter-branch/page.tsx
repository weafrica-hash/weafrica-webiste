"use client";

import { Building, ArrowLeftRight, Clock, Boxes } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function InterBranchDeliveriesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <section className="relative h-[60vh]">
        <Image
          src="/images/inter-branch.jpg"
          alt="Inter-Branch Deliveries"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white"
          >
            Inter-Branch Deliveries
          </motion.h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          Seamlessly move goods between your business branches — scheduled or on-demand — with complete visibility.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: Building, title: "Multi-Branch Support", desc: "Manage deliveries across all branches." },
            { icon: Boxes, title: "Bulk Transport", desc: "Send goods in batches or single packages." },
            { icon: ArrowLeftRight, title: "Bidirectional Routing", desc: "Branch ↔ Branch delivery tracking." },
            { icon: Clock, title: "Smart Scheduling", desc: "Automated or manual scheduling options." }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
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
