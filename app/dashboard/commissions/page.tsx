import { prisma } from "@/lib/prisma";

export default async function CommissionPage() {
  const commissions = await prisma.commission.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Commissions</h1>

      {commissions.map((c) => (
        <div key={c.id} className="bg-white p-3 rounded shadow mb-2">
          <p>Earned: {c.amount}</p>
          <p className="text-sm text-gray-500">Level {c.level}</p>
        </div>
      ))}
    </div>
  );
}