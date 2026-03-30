import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import FloatingButton from "@/components/FloatingButton";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Top Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 p-6 bg-gray-100">
        {children}
      </main>

      {/* Floating Actions */}
      <FloatingButton />
    </div>
  );
}