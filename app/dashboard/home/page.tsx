import { getUserFromToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function HomePage() {
  const user: any = getUserFromToken();

  if (!user) {
    return <div className="text-red-500">Unauthorized</div>;
  }

  if (user.role === "SUPER_ADMIN" || user.role === "ADMIN") {
    const users = await prisma.user.count();
    const transactions = await prisma.transaction.count();

    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <p>Total Users: {users}</p>
        <p>Total Transactions: {transactions}</p>
      </div>
    );
  }

  // MEMBER VIEW
  const myTransactions = await prisma.transaction.findMany({
    where: { userId: user.id },
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Dashboard</h1>
      <p>Total Transactions: {myTransactions.length}</p>
    </div>
  );
}
if (user.membershipStatus === "FREE") {
  return (
    <div>
      <h1 className="text-xl font-bold">Welcome</h1>
      <p>You are on FREE plan</p>
      <p>Upgrade to access business features</p>
    </div>
  );
}