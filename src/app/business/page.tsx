"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Car, Package, Users, Route } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function BusinessHomePage() {
  const services = [
    {
      title: "Corporate Rides",
      desc: "Safe and reliable corporate transport for staff and executives.",
      icon: Car,
      image: "/images/corporate-rides.png",
      link: "/business/business-dashboard/corporate-rides",
    },
    {
      title: "Logistics & Deliveries",
      desc: "Deliver parcels, documents, and goods across branches or cities.",
      icon: Package,
      image: "/images/delivery-logistics.png",
      link: "/business/business-dashboard/logistics",
    },
    {
      title: "Staff Transport",
      desc: "Move your staff safely with scheduled and on-demand rides.",
      icon: Users,
      image: "/images/staff-transport.png",
      link: "/business/business-dashboard/staff-transport",
    },
    {
      title: "Inter-Branch Deliveries",
      desc: "Move items quickly between your company branches.",
      icon: Route,
      image: "/images/inter-branch.png",
      link: "/business/business-dashboard/inter-branch",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 px-6 py-24">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center"
      >
        <h1 className="text-5xl font-bold mb-6 text-center">Business Solutions</h1>

        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl text-center">
          Explore WeAfrica’s business services — Corporate Rides, Logistics,
          Staff Transport, Inter-Branch Deliveries, and more.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        {services.map((service, index) => (
          <Link key={service.title} href={service.link}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="group cursor-pointer overflow-hidden 
                rounded-2xl border border-gray-200 dark:border-gray-800 
                shadow hover:shadow-xl bg-white dark:bg-neutral-900"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-all duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <service.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300 mt-2">
                  {service.desc}
                </p>

                <button className="mt-5 text-primary font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More →
                </button>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <Footer />
    </main>
  );
}
