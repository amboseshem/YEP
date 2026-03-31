"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [portal, setPortal] = useState("member");

  const login = async () => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password, portal }),
    });

    if (res.ok) {
      if (portal === "admin") {
        window.location.href = "/dashboard/admin";
      } else {
        window.location.href = "/dashboard";
      }
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-purple-200">

      <div className="bg-white p-6 rounded-xl shadow w-80 space-y-4">

        <h1 className="text-xl font-bold text-center">Login</h1>

        <select
          className="border p-2 w-full rounded"
          onChange={(e) => setPortal(e.target.value)}
        >
          <option value="member">Member Portal</option>
          <option value="admin">Admin Portal</option>
        </select>

        <input
          placeholder="Email"
          className="border p-2 w-full rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Login
        </button>

      </div>
    </div>
  );
}