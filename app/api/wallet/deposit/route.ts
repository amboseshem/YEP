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

  // 🔹 1. SAVE TRANSACTION
  await prisma.transaction.create({
    data: {
      userId,
      amount,
      type: "deposit",
      status: "completed",
    },
  });

  // 🔹 2. UPDATE USER WALLET
  await prisma.wallet.upsert({
    where: { userId },
    update: { balance: { increment: amount } },
    create: { userId, balance: amount },
  });

  // 🔥 3. MEMBERSHIP + MLM LOGIC (PASTE HERE — THIS IS THE PART YOU ASKED)

  const MEMBERSHIP_FEE = 500;

  if (amount === MEMBERSHIP_FEE) {
    // Activate membership
    await prisma.user.update({
      where: { id: userId },
      data: { membershipStatus: "ACTIVE" },
    });

    const userData = await prisma.user.findUnique({
      where: { id: userId },
      include: { referredBy: true },
    });

    let level1 = userData?.referredBy;

    let level2 = level1
      ? await prisma.user.findUnique({ where: { id: level1.referredById! } })
      : null;

    let level3 = level2
      ? await prisma.user.findUnique({ where: { id: level2.referredById! } })
      : null;

    // 🔹 COMPANY SHARE (300 KES)
    const COMPANY_ID = "873c850f-64b6-41ec-ad4d-58a52f3f34f3";

    await prisma.wallet.upsert({
      where: { userId: COMPANY_ID },
      update: { balance: { increment: 300 } },
      create: { userId: COMPANY_ID, balance: 300 },
    });

    // 🔹 LEVEL 1 → 100
    if (level1) {
      await prisma.wallet.upsert({
        where: { userId: level1.id },
        update: { balance: { increment: 100 } },
        create: { userId: level1.id, balance: 100 },
      });

      await prisma.commission.create({
        data: {
          userId: level1.id,
          fromUserId: userId,
          amount: 100,
          level: 1,
        },
      });
    }

    // 🔹 LEVEL 2 → 50
    if (level2) {
      await prisma.wallet.upsert({
        where: { userId: level2.id },
        update: { balance: { increment: 50 } },
        create: { userId: level2.id, balance: 50 },
      });

      await prisma.commission.create({
        data: {
          userId: level2.id,
          fromUserId: userId,
          amount: 50,
          level: 2,
        },
      });
    }

    // 🔹 LEVEL 3 → 50
    if (level3) {
      await prisma.wallet.upsert({
        where: { userId: level3.id },
        update: { balance: { increment: 50 } },
        create: { userId: level3.id, balance: 50 },
      });

      await prisma.commission.create({
        data: {
          userId: level3.id,
          fromUserId: userId,
          amount: 50,
          level: 3,
        },
      });
    }
  }

  return NextResponse.json({ success: true });
}