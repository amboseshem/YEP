import { prisma } from "@/lib/prisma";

type TransactionType = {
  id: string;
  amount: number;
  type: string;
  status: string;
};

export default async function TransactionsPage() {
  const transactions = await prisma.transaction.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>

      <div className="space-y-2">
        {transactions.map((t: TransactionType) => (
          <div key={t.id} className="bg-white p-3 rounded shadow">
            <p>
              {t.type} - {t.amount}
            </p>
            <p className="text-sm text-gray-500">{t.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}