import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getUserFromToken } from "@/lib/auth";
import Sidebar from "@/components/Sidebar";

export default async function Layout({ children }: { children: ReactNode }) {
  const user: any = await getUserFromToken();

  if (!user) redirect("/login");

  return (
    <div className="flex min-h-screen">

      <Sidebar role={user.role} />

      <div className="flex-1">

        <header className="bg-white shadow p-4 flex justify-between">
          <h1>Dashboard</h1>

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