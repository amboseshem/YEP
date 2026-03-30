import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center space-y-6 bg-gradient-to-br from-blue-100 to-blue-300">
      <h1 className="text-4xl font-bold text-blue-700">
        YEP System
      </h1>

      <p className="text-gray-700">
        Empowering Youth Through Faith, Growth & Opportunities
      </p>

      <div className="flex gap-4">
        <Link href="/login" className="bg-blue-600 text-white px-5 py-2 rounded shadow">
          Login
        </Link>

        <Link href="/register" className="bg-green-600 text-white px-5 py-2 rounded shadow">
          Register
        </Link>

        <Link href="/dashboard" className="bg-black text-white px-5 py-2 rounded shadow">
          Dashboard
        </Link>
      </div>
    </div>
  );
}