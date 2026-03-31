import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin";

export async function POST(req: Request) {
  await requireAdmin();

  const { userId, role } = await req.json();

  await prisma.user.update({
    where: { id: userId },
    data: { role },
  });

  return Response.json({ success: true });
}