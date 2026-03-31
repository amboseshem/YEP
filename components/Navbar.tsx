"use client";

import Link from "next/link";

export default function Navbar() {
  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/login";
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="font-bold text-lg">YEP System</h1>

      <div className="flex gap-4 text-sm items-center">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/wallet">Wallet</Link>
        <Link href="/dashboard/transactions">Transactions</Link>
        <Link href="/dashboard/referrals">Referrals</Link>
        <Link href="/dashboard/commissions">Commissions</Link>
        <Link href="/dashboard/admin">Admin</Link>
        <Link href="/dashboard/mlm">MLM</Link>
        <Link href="/dashboard/analytics">Analytics</Link>
        <button
          onClick={logout}
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}