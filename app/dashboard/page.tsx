import { prisma } from "@/lib/prisma";

export default async function Dashboard() {
  const users = await prisma.user.count();
  const transactions = await prisma.transaction.count();

  return (
    <div className="grid grid-cols-3 gap-4">

      <div className="bg-blue-500 text-white p-6 rounded-xl shadow">
        Users: {users}
      </div>

      <div className="bg-green-500 text-white p-6 rounded-xl shadow">
        Transactions: {transactions}
      </div>

      <div className="bg-purple-500 text-white p-6 rounded-xl shadow">
        System Active
      </div>

    </div>
  );
}