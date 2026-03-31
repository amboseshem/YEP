import { prisma } from "@/lib/prisma";

export default async function WithdrawalsPage() {
  const requests = await prisma.transaction.findMany({
    where: { type: "withdraw", status: "pending" },
  });

  return (
    <div>
      <h1 className="text-xl font-bold">Withdraw Requests</h1>

      {requests.map((r: any) => (
        <div key={r.id} className="border p-2 mb-2">

          <p>{r.amount}</p>

          <form action={`/api/admin/approve?id=${r.id}`} method="POST">
            <button className="bg-green-600 text-white px-2 py-1 rounded">
              Approve
            </button>
          </form>

        </div>
      ))}
    </div>
  );
}