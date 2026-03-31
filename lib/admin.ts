import { getUserFromToken } from "./auth";

export async function requireAdmin() {
  const user: any = await getUserFromToken();

  if (!user || user.role !== "SUPER_ADMIN") {
    throw new Error("Unauthorized");
  }

  return user;
}