import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import rideData from "@/config/rideTypes.json";

export default function Home() {
  return (
    <main className="bg-white">

      <Navbar />

      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              WeAfrica – Mobility & Delivery for Africa
            </h1>
            <p className="text-gray-300 text-lg mt-4">
              Rides • Food • Grocery • Courier • Waste • Business Logistics  
              — All in one powerful platform.
            </p>

            <div className="mt-8 flex space-x-4">
              <button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition">
                Book a Ride
              </button>
              <button className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-xl hover:bg-yellow-600 hover:text-black transition">
                Become a Driver
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/hero-mockup.png"
              alt="WeAfrica App Mockup"
              className="rounded-3xl shadow-2xl w-full max-w-md"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-black text-center">
            Our Services
          </h2>
          <p className="text-gray-600 text-center mt-3">
            One platform. Multiple solutions designed for Africa.
          </p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Ride-Hailing",
                desc: "Fast, affordable rides anywhere",
                icon: "🚗",
              },
              {
                title: "Food Delivery",
                desc: "Order meals from top restaurants",
                icon: "🍔",
              },
              {
                title: "Grocery Delivery",
                desc: "Fresh groceries delivered to you",
                icon: "🛒",
              },
              {
                title: "Courier",
                desc: "Send parcels safely & quickly",
                icon: "📦",
              },
              {
                title: "Business Services",
                desc: "WeAfrica for Business logistics & tools",
                icon: "🏢",
              },
              {
                title: "Waste Management",
                desc: "Reliable waste collection",
                icon: "🗑️",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all cursor-pointer"
              >
                <div className="text-5xl">{item.icon}</div>
                <h3 className="text-2xl font-bold mt-4 text-black">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>

                <button className="mt-5 text-yellow-600 font-bold hover:underline">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-black text-center">
            Choose Your Ride
          </h2>
          <p className="text-gray-600 text-center mt-3">
            Different ride categories built for African cities.
          </p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {rideData.map((ride) => (
              <div
                key={ride.id}
                className="border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all cursor-pointer bg-white"
              >
                <img
                  src={ride.icon}
                  alt={ride.name}
                  className="w-20 h-20 mb-4"
                />

                <h3 className="text-2xl font-bold text-black">{ride.name}</h3>
                <p className="text-gray-600 mt-2">{ride.description}</p>

                <p className="mt-4 text-sm text-gray-500">
                  Capacity: {ride.capacity} passengers
                </p>

                <div className="mt-4 text-sm text-gray-700">
                  <p>Base Fare: R{ride.baseFare}</p>
                  <p>Cost per km: R{ride.costPerKm}</p>
                  <p>Cost per min: R{ride.costPerMin}</p>
                </div>

                <button className="mt-5 text-yellow-600 font-bold hover:underline">
                  Select →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
