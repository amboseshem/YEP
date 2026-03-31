import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password, portal } = await req.json();

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) return NextResponse.json({ error: "User not found" }, { status: 401 });

  const valid = await bcrypt.compare(password, user.passwordHash);

  if (!valid) return NextResponse.json({ error: "Wrong password" }, { status: 401 });

  if (portal === "admin" && user.role === "MEMBER") {
    return NextResponse.json({ error: "Access denied" }, { status: 403 });
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET!,
    { expiresIn: "7d" }
  );

  const res = NextResponse.json({ success: true });

  res.cookies.set("token", token, {
    httpOnly: true,
    secure: true,
    path: "/",
  });

  return res;
}