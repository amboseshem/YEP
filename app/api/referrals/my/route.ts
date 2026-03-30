import { prisma } from "@/lib/prisma";
import { getUserFromToken } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const user: any = getUserFromToken();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const referrals = await prisma.user.findMany({
    where: { referredById: user.id },
  });

  return NextResponse.json(referrals);
}