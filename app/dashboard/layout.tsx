import { ReactNode } from "react";
import FloatingButton from "@/components/FloatingButton";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <Navbar />
      <div className="p-4">{children}</div>
      <FloatingButton />
    </div>
  );
}