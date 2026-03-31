import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const users = await prisma.user.count();
  const transactions = await prisma.transaction.count();

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold text-gray-700">Dashboard</h1>

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-xl shadow">
          <h2>Users</h2>
          <p className="text-3xl font-bold">{users}</p>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-xl shadow">
          <h2>Transactions</h2>
          <p className="text-3xl font-bold">{transactions}</p>
        </div>

      </div>

    </div>
  );
}