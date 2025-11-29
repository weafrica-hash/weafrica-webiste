"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white py-5">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-wide">
          WeAfrica
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-lg font-medium">
          <Link href="/about" className="hover:text-yellow-400">About</Link>
          <Link href="/services" className="hover:text-yellow-400">Services</Link>
          <Link href="/drivers" className="hover:text-yellow-400">Drivers</Link>
          <Link href="/business/business-dashboard" className="hover:text-yellow-400">Business</Link>
          <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black mt-3 px-6 pb-4 space-y-3 text-lg">
          <Link href="/about" className="block hover:text-yellow-400">About</Link>
          <Link href="/services" className="block hover:text-yellow-400">Services</Link>
          <Link href="/drivers" className="block hover:text-yellow-400">Drivers</Link>
          <Link href="/business/business-dashboard" className="block hover:text-yellow-400">Business</Link>
          <Link href="/contact" className="block hover:text-yellow-400">Contact</Link>
        </div>
      )}
    </nav>
  );
}
