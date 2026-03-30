"use client";

export default function MembershipPage() {
  const upgrade = async () => {
    await fetch("/api/membership/upgrade", {
      method: "POST",
      body: JSON.stringify({ userId: "REPLACE_ID" }),
    });

    alert("Upgraded to ACTIVE");
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Membership</h1>

      <div className="bg-white p-4 rounded shadow">
        <p>Upgrade to ACTIVE Membership</p>
        <p className="text-green-600 font-bold">KES 500 (Lifetime)</p>

        <button
          onClick={upgrade}
          className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
        >
          Upgrade Now
        </button>
      </div>
    </div>
  );
}