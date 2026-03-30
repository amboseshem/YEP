"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-white shadow p-4 flex justify-between">
      <h1 className="font-bold text-blue-600">YEP System</h1>

      <div className="space-x-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/home">Home</Link>
      </div>
    </div>
  );
}
<Link href="/dashboard/wallet">Wallet</Link>
<Link href="/dashboard/transactions">Transactions</Link>
<Link href="/dashboard/referrals">Referrals</Link>
<Link href="/dashboard/commissions">Commissions</Link>
<Link href="/dashboard/membership">Membership</Link>