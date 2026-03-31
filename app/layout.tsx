import Link from "next/link";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getUserFromToken } from "@/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user: any = await getUserFromToken();

  if (!user) {
    redirect("/login");
  }

  const role = user.role;

  const navItems = [
    { href: "/dashboard", label: "Dashboard", roles: ["SUPER_ADMIN","FINANCE","TRAINER","MEMBER"] },
    { href: "/dashboard/wallet", label: "Wallet", roles: ["SUPER_ADMIN","MEMBER"] },
    { href: "/dashboard/transactions", label: "Transactions", roles: ["SUPER_ADMIN","MEMBER"] },
    { href: "/dashboard/commissions", label: "Commissions", roles: ["SUPER_ADMIN","MEMBER"] },
    { href: "/dashboard/admin", label: "Admin", roles: ["SUPER_ADMIN"] },
    { href: "/dashboard/admin/withdrawals", label: "Withdrawals", roles: ["SUPER_ADMIN","FINANCE"] },
    { href: "/dashboard/admin/analytics", label: "Analytics", roles: ["SUPER_ADMIN"] },
    { href: "/dashboard/admin/tree", label: "MLM Tree", roles: ["SUPER_ADMIN"] },
  ];

  const visibleNavItems = navItems.filter((item) =>
    item.roles.includes(role)
  );

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-72 bg-gradient-to-b from-blue-700 via-purple-700 to-indigo-900 text-white p-6 shadow-lg">

        <h2 className="text-2xl font-bold mb-6">YEP Admin</h2>

        <div className="mb-6 text-sm bg-white/10 p-3 rounded-lg">
          <p className="font-semibold">{user.fullName}</p>
          <p className="text-blue-200">{user.role}</p>
        </div>

        <nav className="space-y-2">
          {visibleNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

      </aside>

      {/* MAIN */}
      <div className="flex-1">

        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-700">
            Youth Empowerment Platform
          </h1>

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