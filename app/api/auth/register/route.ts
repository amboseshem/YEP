import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request) {
  const { fullName, email, phone, password, referralCode } = await req.json();

  const hashed = await bcrypt.hash(password, 10);

  let referrer = null;

  if (referralCode) {
    referrer = await prisma.user.findUnique({
      where: { referralCode },
    });
  }

  const user = await prisma.user.create({
    data: {
      fullName,
      email,
      phone,
      passwordHash: hashed,
      referralCode: uuidv4(),
      referredById: referrer?.id,
    },
  });

  return NextResponse.json(user);
}