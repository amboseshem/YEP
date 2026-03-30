"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        fullName,
        email,
        phone,
        password,
      }),
    });

    if (res.ok) {
      alert("Registered successfully");
      window.location.href = "/login";
    } else {
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80 space-y-4">
        <h1 className="text-xl font-bold text-center">Register</h1>

        <input
          placeholder="Full Name"
          className="border p-2 w-full rounded"
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          placeholder="Email"
          className="border p-2 w-full rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Phone"
          className="border p-2 w-full rounded"
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={register}
          className="bg-green-600 text-white w-full py-2 rounded"
        >
          Register
        </button>
      </div>
    </div>
  );
}