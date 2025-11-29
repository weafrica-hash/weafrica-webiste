"use client";

import { useState } from "react";

const VEHICLES = [
  { id: "x", name: "WEAFRICA X", icon: "🚗", base: 1.5, per_km: 0.6, eta: 4 },
  { id: "xl", name: "WEAFRICA XL", icon: "🚙", base: 2.0, per_km: 0.8, eta: 5 },
  { id: "black", name: "WEAFRICA BLACK", icon: "🖤", base: 4.5, per_km: 1.6, eta: 3 },
  { id: "van", name: "WEAFRICA VAN", icon: "🚚", base: 3.5, per_km: 1.2, eta: 7 },
  { id: "shuttle", name: "WEAFRICA SHUTTLE", icon: "🚌", base: 6.0, per_km: 2.0, eta: 10 },
];

export default function RidePage() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [distanceKm, setDistanceKm] = useState<number | "">("");
  const [vehicle, setVehicle] = useState("x");
  const [scheduled, setScheduled] = useState("");
  const [note, setNote] = useState("");
  const [requested, setRequested] = useState(false);

  const selectedVehicle = VEHICLES.find((v) => v.id === vehicle) ?? VEHICLES[0];

  const calcFare = () => {
    if (!distanceKm || Number.isNaN(Number(distanceKm))) return null;
    const km = Number(distanceKm);
    const fare = selectedVehicle.base + selectedVehicle.per_km * km;
    return Math.round(fare * 100) / 100;
  };

  const fare = calcFare();

  const handleRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickup || !dropoff || !distanceKm) {
      alert("Please fill all required fields.");
      return;
    }

    setRequested(true);

    setTimeout(() => {
      setRequested(false);
      alert("Ride requested! Driver is on the way (demo mode).");
    }, 1400);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO SECTION */}
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Book a Ride with WeAfrica
            </h1>
            <p className="mt-4 text-gray-300">
              Safe, reliable and affordable mobility across Africa.  
              Choose your preferred ride category and book instantly.
            </p>
          </div>

          {/* BOOKING CARD */}
          <div className="bg-white p-6 rounded-2xl shadow-lg text-black">
            <form onSubmit={handleRequest} className="space-y-4">

              <div>
                <label className="text-sm font-medium">Pickup location</label>
                <input
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  placeholder="e.g. Area 10, Lilongwe"
                  className="mt-1 w-full rounded-md border p-3 text-sm"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Dropoff location</label>
                <input
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  placeholder="e.g. City Mall"
                  className="mt-1 w-full rounded-md border p-3 text-sm"
                />
              </div>

              {/* Distance + Vehicle */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Distance (km)</label>
                  <input
                    value={distanceKm}
                    onChange={(e) => {
                      const v = e.target.value;
                      if (v === "") return setDistanceKm("");
                      const n = Number(v);
                      if (!Number.isNaN(n)) setDistanceKm(n);
                    }}
                    placeholder="e.g. 6"
                    className="mt-1 w-full rounded-md border p-3 text-sm"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Vehicle Type</label>
                  <select
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    className="mt-1 w-full rounded-md border p-3 text-sm"
                  >
                    {VEHICLES.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Schedule (optional)</label>
                <input
                  type="datetime-local"
                  value={scheduled}
                  onChange={(e) => setScheduled(e.target.value)}
                  className="mt-1 w-full rounded-md border p-3 text-sm"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Note for driver</label>
                <input
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Building, gate code, directions"
                  className="mt-1 w-full rounded-md border p-3 text-sm"
                />
              </div>

              {/* Fare + ETA */}
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xs text-gray-500">Estimated Fare</div>
                  <div className="text-xl font-bold">
                    {fare !== null ? `MK ${fare}` : "—"}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Driver ETA</div>
                  <div className="text-lg font-semibold">
                    {selectedVehicle.eta} min
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-xl hover:bg-yellow-400 transition"
              >
                {requested ? "Requesting..." : "Request Ride"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* VEHICLE OPTIONS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold">Vehicle Categories</h2>
          <p className="text-gray-600 mt-2">Choose what suits your travel needs</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {VEHICLES.map((v) => (
              <div
                key={v.id}
                className="border p-6 rounded-xl shadow-sm hover:shadow-lg transition"
              >
                <div className="text-4xl">{v.icon}</div>
                <h3 className="mt-4 font-bold">{v.name}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Base MK {v.base} • MK {v.per_km}/km
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  ETA: {v.eta} minutes
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-gray-300 py-16 mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {/* LOGO */}
          <div>
            <h2 className="text-2xl font-extrabold text-white">WeAfrica</h2>
            <p className="mt-3 text-gray-400">
              Smart mobility, delivery & technology for Africa.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-yellow-400">Home</a></li>
              <li><a href="/ride" className="hover:text-yellow-400">Ride</a></li>
              <li><a href="/delivery" className="hover:text-yellow-400">Delivery</a></li>
              <li><a href="/about" className="hover:text-yellow-400">About Us</a></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="mt-3 space-y-2 text-gray-400">
              <li><a href="/ride" className="hover:text-yellow-400">Ride Hailing</a></li>
              <li><a href="/delivery" className="hover:text-yellow-400">Delivery</a></li>
              <li><a href="/business" className="hover:text-yellow-400">Business Solutions</a></li>
              <li><a href="/drivers" className="hover:text-yellow-400">Drivers & Couriers</a></li>
            </ul>
          </div>

          {/* SOCIALS */}
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <ul className="mt-3 space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-yellow-400">Facebook</a></li>
              <li><a href="#" className="hover:text-yellow-400">Instagram</a></li>
              <li><a href="#" className="hover:text-yellow-400">Twitter</a></li>
              <li><a href="#" className="hover:text-yellow-400">LinkedIn</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500">
          © {new Date().getFullYear()} WeAfrica Technologies. All rights reserved.
        </div>
      </footer>

    </main>
  );
}
