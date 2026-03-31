"use client";

import { useState } from "react";

export default function ResetPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const reset = async () => {
    await fetch("/api/auth/reset", {
      method: "POST",
      body: JSON.stringify({ email, newPassword: password }),
    });

    alert("Password updated");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 to-blue-200">

      <div className="bg-white p-6 rounded-xl shadow w-80 space-y-4">

        <h1 className="text-xl font-bold text-center">Reset Password</h1>

        <input
          placeholder="Email"
          className="border p-2 w-full rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="New Password"
          type="password"
          className="border p-2 w-full rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={reset}
          className="bg-purple-600 text-white w-full py-2 rounded"
        >
          Reset
        </button>

      </div>

    </div>
  );
}