import { prisma } from "@/lib/prisma";

export default async function AnalyticsPage() {
  const users = await prisma.user.count();
  const transactions = await prisma.transaction.count();

  return (
    <div className="space-y-4">

      <h1 className="text-xl font-bold">Analytics</h1>

      <div className="bg-blue-200 p-4 rounded">
        Total Users: {users}
      </div>

      <div className="bg-green-200 p-4 rounded">
        Transactions: {transactions}
      </div>

    </div>
  );
}