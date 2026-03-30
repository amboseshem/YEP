"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between items-center shadow">
      <h1 className="font-bold text-lg">YEP System</h1>

      <div className="flex gap-4 text-sm">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/home">Home</Link>
        <Link href="/dashboard/wallet">Wallet</Link>
        <Link href="/dashboard/transactions">Transactions</Link>
        <Link href="/dashboard/referrals">Referrals</Link>
        <Link href="/dashboard/commissions">Commissions</Link>
        <Link href="/dashboard/membership">Membership</Link>
      </div>
    </div>
  );
}