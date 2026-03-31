import { prisma } from "@/lib/prisma";
import { getUserFromToken } from "@/lib/auth";

export default async function CommissionPage() {
  const user: any = await getUserFromToken();

  const commissions = await prisma.commission.findMany({
    where: { userId: user.id },
  });

  return (
    <div>

      <h1 className="text-xl font-bold mb-4">My Earnings</h1>

      {commissions.map((c) => (
        <div key={c.id} className="bg-green-100 p-2 mb-2 rounded">
          Level {c.level} → {c.amount}
        </div>
      ))}

    </div>
  );
}