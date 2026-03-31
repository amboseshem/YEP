import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin";

export default async function AdminPage() {
  await requireAdmin();

  const users = await prisma.user.findMany({
    include: { wallet: true },
  });

  const totalMoney = await prisma.transaction.aggregate({
    _sum: { amount: true },
  });

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold text-purple-700">
        Admin Control Panel
      </h1>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-4">

        <div className="bg-blue-500 text-white p-4 rounded shadow">
          Users: {users.length}
        </div>

        <div className="bg-green-500 text-white p-4 rounded shadow">
          Total Money: {totalMoney._sum.amount || 0}
        </div>

        <div className="bg-purple-500 text-white p-4 rounded shadow">
          Active System
        </div>

      </div>

      {/* USERS TABLE */}
      <div className="bg-white p-4 rounded shadow">

        <h2 className="font-bold mb-4">All Users</h2>

        {users.map((u) => (
          <div key={u.id} className="border p-2 mb-2 rounded">

            <p>{u.fullName}</p>
            <p className="text-sm text-gray-500">{u.email}</p>
            <p>Role: {u.role}</p>
            <p>Status: {u.membershipStatus}</p>
            <p>Wallet: {u.wallet?.balance || 0}</p>

          </div>
        ))}

      </div>

    </div>
  );
}