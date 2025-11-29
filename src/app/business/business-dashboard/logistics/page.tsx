export default function LogisticsPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Delivery & Logistics</h1>
      <p className="mt-3 text-gray-600">
        Submit your logistics requests here. Our team will respond shortly.
      </p>

      <form action="/api/logistics" method="POST" className="mt-10 max-w-xl space-y-4">
        
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="w-full p-3 border rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 border rounded"
          required
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className="w-full p-3 border rounded"
        />

        <textarea
          name="details"
          placeholder="Describe your logistics request"
          className="w-full p-3 h-32 border rounded"
          required
        />

        <button type="submit" className="bg-black text-white px-5 py-3 rounded">
          Submit Request
        </button>
      </form>
    </div>
  );
}
