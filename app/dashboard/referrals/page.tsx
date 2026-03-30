"use client";

import { useEffect, useState } from "react";

export default function ReferralsPage() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/referrals/my")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Referrals</h1>

      {data.map((user) => (
        <div key={user.id} className="bg-white p-3 rounded shadow mb-2">
          <p>{user.fullName}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      ))}
    </div>
  );
}