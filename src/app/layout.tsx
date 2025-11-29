import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "WeAfrica – Mobility & Business Services",
  description: "Africa’s modern mobility and business service platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <header className="w-full fixed top-0 left-0 bg-black/80 backdrop-blur-md border-b border-yellow-500/20 z-50">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-yellow-500">WeAfrica</h1>

            <div className="flex space-x-6 text-white">
              <Link href="/">Home</Link>
              <Link href="/ride">Ride</Link>
              <Link href="/delivery">Delivery</Link>
              <Link href="/business">Business</Link>
              <Link href="/partners">Partners</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>
        </header>

        <main className="pt-24">{children}</main>

        <footer className="mt-20 py-10 text-center text-gray-400 border-t border-yellow-500/10">
          © {new Date().getFullYear()} WeAfrica. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
