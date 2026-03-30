import { getUserFromToken } from "@/lib/auth";

export default function HomePage() {
  const user: any = getUserFromToken();

  if (!user) {
    return <div>Unauthorized</div>;
  }

  if (user.membershipStatus === "FREE") {
    return (
      <div>
        <h1 className="text-xl font-bold">Welcome</h1>
        <p>You are on FREE plan</p>
        <p>Upgrade to access business features</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-xl font-bold">Dashboard</h1>
      <p>Welcome to your active account</p>
    </div>
  );
}