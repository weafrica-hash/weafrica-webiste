export default function Footer() {
  const phone = process.env.NEXT_PUBLIC_SUPPORT_PHONE;
  const email = process.env.NEXT_PUBLIC_SUPPORT_EMAIL;
  const address = process.env.NEXT_PUBLIC_COMPANY_ADDRESS;

  return (
    <footer className="bg-black text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-white text-2xl font-bold">WeAfrica</h3>
          <p className="mt-3 text-gray-400">
            Africa’s fastest growing mobility & delivery super-app.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white text-xl font-semibold">Explore</h4>
          <ul className="mt-3 space-y-2">
            <li>Ride-Hailing</li>
            <li>Food Delivery</li>
            <li>Grocery</li>
            <li>Courier</li>
            <li>Waste Management</li>
            <li>Business Tools</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-xl font-semibold">Contact</h4>
          <p className="mt-3">Email: {email}</p>
          <p className="mt-1">Phone: {phone}</p>
          <p className="mt-1">{address}</p>
        </div>

      </div>

      <p className="text-center text-gray-500 mt-10">
        © {new Date().getFullYear()} WeAfrica. All Rights Reserved.
      </p>
    </footer>
  );
}
