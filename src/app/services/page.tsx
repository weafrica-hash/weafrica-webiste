export default function ServicesPage() {
  return (
    <div className="bg-black text-gray-200 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Our Services
        </h1>

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold text-white">Ride-Hailing</h3>
            <p className="mt-3 text-gray-400">
              Fast, reliable rides for everyday movement. Choose from economy,
              XL, premium, or shuttle options.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold text-white">Food Delivery</h3>
            <p className="mt-3 text-gray-400">
              Order from your favourite restaurants and get food delivered
              fresh and fast.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold text-white">Grocery Delivery</h3>
            <p className="mt-3 text-gray-400">
              Get groceries delivered straight to your door in minutes.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold text-white">Courier & Cargo</h3>
            <p className="mt-3 text-gray-400">
              Send packages, business deliveries, documents, or cargo with
              trusted riders and drivers.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
