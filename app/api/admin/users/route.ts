import { prisma } from "@/lib/prisma";
import { getUserFromToken } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const user: any = getUserFromToken();

  if (!user || user.role !== "ADMIN" && user.role !== "SUPER_ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const users = await prisma.user.findMany({
    include: {
      referredBy: true,
      wallet: true,
    },
  });

  return NextResponse.json(users);
}