"use client";

import { useState } from "react";

export default function CourierRegistration() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    license: "",
  });

  return (
    <main className="max-w-xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold text-center">Become a Courier</h1>
      <p className="text-center text-gray-600 mt-2">
        Join WeAfrica and start delivering today.
      </p>

      <form className="mt-12 space-y-6">
        
        <input
          placeholder="Full Name"
          className="w-full p-4 border rounded-xl"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email Address"
          className="w-full p-4 border rounded-xl"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="Phone Number"
          className="w-full p-4 border rounded-xl"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <input
          placeholder="Driver’s License Number"
          className="w-full p-4 border rounded-xl"
          value={form.license}
          onChange={(e) => setForm({ ...form, license: e.target.value })}
        />

        <button className="w-full bg-black text-white py-4 rounded-xl hover:bg-gray-800 transition font-bold">
          Submit Application
        </button>

      </form>
    </main>
  );
}
