import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getUserFromToken } from "@/lib/auth";

export async function POST(req: Request) {
  const user: any = getUserFromToken();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { amount } = await req.json();
  const userId = user.id;

  const wallet = await prisma.wallet.findUnique({
    where: { userId },
  });

  if (!wallet || wallet.balance < amount) {
    return NextResponse.json(
      { error: "Insufficient balance" },
      { status: 400 }
    );
  }

  await prisma.wallet.update({
    where: { userId },
    data: { balance: { decrement: amount } },
  });

  await prisma.withdrawal.create({
    data: { userId, amount },
  });

  await prisma.transaction.create({
    data: {
      userId,
      amount,
      type: "withdraw",
      status: "pending",
    },
  });

  return NextResponse.json({ message: "Withdrawal requested" });
}