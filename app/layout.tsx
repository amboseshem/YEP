import Link from "next/link";
import { ReactNode } from "react";
import { getUserFromToken } from "@/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user: any = await getUserFromToken();

  if (!user) {
    return <div className="p-10">Redirecting...</div>;
  }

  const role = user.role;

  const navItems = [
    { href: "/dashboard", label: "Dashboard", roles: ["SUPER_ADMIN","FINANCE","TRAINER","MEMBER"] },
    { href: "/dashboard/wallet", label: "Wallet", roles: ["SUPER_ADMIN","FINANCE","MEMBER"] },
    { href: "/dashboard/transactions", label: "Transactions", roles: ["SUPER_ADMIN","FINANCE","MEMBER"] },
    { href: "/dashboard/commissions", label: "Commissions", roles: ["SUPER_ADMIN","MEMBER"] },
    { href: "/dashboard/admin", label: "Admin Panel", roles: ["SUPER_ADMIN"] },
    { href: "/dashboard/admin/withdrawals", label: "Withdrawals", roles: ["SUPER_ADMIN","FINANCE"] },
    { href: "/dashboard/admin/analytics", label: "Analytics", roles: ["SUPER_ADMIN"] },
    { href: "/dashboard/admin/tree", label: "MLM Tree", roles: ["SUPER_ADMIN"] },
  ];

  const visibleNavItems = navItems.filter((item) =>
    item.roles.includes(role)
  );

  return (
    <div className="min-h-screen flex bg-slate-100">

      {/* SIDEBAR */}
      <aside className="w-72 bg-gradient-to-b from-blue-700 via-purple-700 to-indigo-900 text-white p-5">

        <h2 className="text-2xl font-bold mb-6">YEP System</h2>

        <div className="mb-6 text-sm">
          <p>{user.fullName}</p>
          <p className="text-blue-200">{user.role}</p>
        </div>

        <nav className="space-y-2">
          {visibleNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block p-3 rounded-lg bg-white/10 hover:bg-white/20"
            >
              {item.label}
            </Link>
          ))}
        </nav>

      </aside>

      {/* MAIN */}
      <div className="flex-1">

        <header className="bg-white shadow p-4 flex justify-between">
          <h1 className="font-bold">Dashboard</h1>

          <form action="/api/auth/logout" method="POST">
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              Logout
            </button>
          </form>
        </header>

        <main className="p-6">{children}</main>

      </div>
    </div>
  );
}