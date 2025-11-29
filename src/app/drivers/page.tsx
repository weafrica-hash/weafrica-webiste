export default function DriversPage() {
  return (
    <div className="bg-black text-gray-200 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Become a WeAfrica Driver
        </h1>

        <p className="mt-6 text-lg text-gray-400 leading-relaxed">
          Earn more with flexible hours, weekly payouts, and world-class safety
          features. Join thousands of drivers moving Africa forward.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold text-white">High Earnings</h3>
            <p className="mt-3 text-gray-400">
              Keep more of what you earn with competitive driver commissions.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold text-white">Flexible Hours</h3>
            <p className="mt-3 text-gray-400">
              Drive full-time or part-time — your schedule, your choice.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold text-white">Safety First</h3>
            <p className="mt-3 text-gray-400">
              24/7 support, in-app safety tools, and rider verification.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
