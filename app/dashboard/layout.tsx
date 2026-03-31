import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getUserFromToken } from "@/lib/auth";
import Navbar from "@/components/Navbar";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const user: any = await getUserFromToken();

  if (!user) {
    redirect("/login");
  }

  return (
    <div>
      <Navbar />
      <div className="p-6">{children}</div>
    </div>
  );
}