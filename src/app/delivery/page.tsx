import Link from "next/link";
import Footer from "@/components/Footer";

export default function DeliveryPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* ================= HERO ================= */}
      <section className="bg-black text-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Fast & Reliable Delivery Services
            </h1>
            <p className="text-gray-300 text-lg mt-5">
              From food to groceries to parcels — WeAfrica Delivery brings speed,
              safety, and convenience across Africa.
            </p>

            <div className="mt-8 flex space-x-4">
              <Link href="/delivery/order">
                <button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition">
                  Order Delivery
                </button>
              </Link>

              <Link href="/delivery/courier">
                <button className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition">
                  Become a Courier
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/images/hero-mockup.png"
              alt="WeAfrica Delivery"
              className="rounded-3xl shadow-2xl w-full max-w-md"
            />
          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-black">
            What We Deliver
          </h2>
          <p className="text-gray-600 text-center mt-3">
            WeAfrica connects customers and businesses through fast delivery.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-14">

            {/* Food Delivery Card */}
            <div className="p-8 border border-gray-200 rounded-2xl shadow-lg hover:-translate-y-2 transition-all">
              <div className="text-5xl">🍔</div>
              <h3 className="text-2xl font-bold mt-4 text-black">Food Delivery</h3>
              <p className="mt-2 text-gray-600">
                Order meals from top restaurants, delivered hot and fast.
              </p>
              <Link href="/delivery/order">
                <button className="mt-5 text-yellow-600 font-bold hover:underline">
                  Order Food →
                </button>
              </Link>
            </div>

            {/* Grocery Delivery Card */}
            <div className="p-8 border border-gray-200 rounded-2xl shadow-lg hover:-translate-y-2 transition-all">
              <div className="text-5xl">🛒</div>
              <h3 className="text-2xl font-bold mt-4 text-black">Groceries</h3>
              <p className="mt-2 text-gray-600">
                Fresh groceries delivered straight to your doorstep.
              </p>
              <Link href="/delivery/order">
                <button className="mt-5 text-yellow-600 font-bold hover:underline">
                  Get Groceries →
                </button>
              </Link>
            </div>

            {/* Courier Card */}
            <div className="p-8 border border-gray-200 rounded-2xl shadow-lg hover:-translate-y-2 transition-all">
              <div className="text-5xl">📦</div>
              <h3 className="text-2xl font-bold mt-4 text-black">Courier</h3>
              <p className="mt-2 text-gray-600">
                Send parcels safely and quickly anywhere in your city.
              </p>
              <Link href="/delivery/order">
                <button className="mt-5 text-yellow-600 font-bold hover:underline">
                  Send Parcel →
                </button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-black">
            Why Choose WeAfrica Delivery?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">

            <div className="p-8 rounded-2xl shadow bg-white text-center">
              <div className="text-5xl mb-3">⚡</div>
              <h3 className="text-xl font-bold">Super Fast</h3>
              <p className="text-gray-600 mt-2">
                We optimize routes to ensure your items arrive quickly.
              </p>
            </div>

            <div className="p-8 rounded-2xl shadow bg-white text-center">
              <div className="text-5xl mb-3">🔒</div>
              <h3 className="text-xl font-bold">Safe & Secure</h3>
              <p className="text-gray-600 mt-2">
                Your items stay protected from pickup to delivery.
              </p>
            </div>

            <div className="p-8 rounded-2xl shadow bg-white text-center">
              <div className="text-5xl mb-3">📍</div>
              <h3 className="text-xl font-bold">Real-Time Tracking</h3>
              <p className="text-gray-600 mt-2">
                Track your delivery live on the map.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />

    </main>
  );
}
