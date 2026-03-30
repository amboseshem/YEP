import { prisma } from "@/lib/prisma";
import Card from "@/components/Card";

export default async function DashboardPage() {
  const totalUsers = await prisma.user.count();
  const totalTransactions = await prisma.transaction.count();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card title="Users" value={totalUsers} />
        <Card title="Transactions" value={totalTransactions} />
      </div>
    </div>
  );
}