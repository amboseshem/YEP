import Link from "next/link";

export default function Sidebar({ role }: { role: string }) {
  return (
    <aside className="w-72 bg-gradient-to-b from-blue-700 via-purple-700 to-indigo-900 text-white p-6">

      <h2 className="text-2xl font-bold mb-6">YEP Platform</h2>

      <nav className="space-y-2">

        <Link href="/dashboard" className="block p-3 rounded bg-white/10">Dashboard</Link>

        <Link href="/dashboard/wallet" className="block p-3 rounded bg-white/10">Wallet</Link>

        <Link href="/dashboard/transactions" className="block p-3 rounded bg-white/10">Transactions</Link>

        <Link href="/dashboard/commissions" className="block p-3 rounded bg-white/10">Commissions</Link>

        {role === "SUPER_ADMIN" && (
          <>
            <Link href="/dashboard/admin" className="block p-3 rounded bg-white/10">Admin</Link>
            <Link href="/dashboard/admin/analytics" className="block p-3 rounded bg-white/10">Analytics</Link>
            <Link href="/dashboard/admin/tree" className="block p-3 rounded bg-white/10">MLM</Link>
          </>
        )}

      </nav>
    </aside>
  );
}