export function requireActiveMember(user: any) {
  if (user.membershipStatus !== "ACTIVE") {
    throw new Error("Upgrade membership to access this feature");
  }
}