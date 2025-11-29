"use client";

import { useState } from "react";

export default function BusinessForm({ service }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Request submitted!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 border rounded-xl bg-gray-50 dark:bg-gray-900 dark:border-gray-800 mt-12"
    >
      <h2 className="text-2xl font-semibold mb-4">
        Request for {service}
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="p-3 rounded-lg border dark:bg-gray-800"
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="p-3 rounded-lg border dark:bg-gray-800"
        />
        <input
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="p-3 rounded-lg border dark:bg-gray-800"
        />
        <input
          name="company"
          placeholder="Company Name"
          onChange={handleChange}
          className="p-3 rounded-lg border dark:bg-gray-800"
        />
      </div>

      <textarea
        name="message"
        placeholder="Tell us more about your needs..."
        onChange={handleChange}
        className="w-full p-3 rounded-lg border dark:bg-gray-800 mt-4"
        rows={5}
      />

      <button
        type="submit"
        className="mt-4 px-6 py-3 bg-primary text-white rounded-lg"
      >
        Submit Request
      </button>
    </form>
  );
}
