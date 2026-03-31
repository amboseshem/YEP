"use client";

import { useState } from "react";

export default function WalletPage() {
  const [amount, setAmount] = useState("");

  const deposit = async () => {
    await fetch("/api/wallet/deposit", {
      method: "POST",
      body: JSON.stringify({ amount: Number(amount) }),
    });
    alert("Deposit successful");
  };

  const withdraw = async () => {
    await fetch("/api/wallet/withdraw", {
      method: "POST",
      body: JSON.stringify({ amount: Number(amount) }),
    });
    alert("Withdraw requested");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow space-y-4">

      <h1 className="text-xl font-bold text-gray-700">Wallet</h1>

      <input
        placeholder="Enter amount"
        className="border p-2 w-full rounded"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div className="flex gap-4">

        <button
          onClick={deposit}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Deposit
        </button>

        <button
          onClick={withdraw}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Withdraw
        </button>

      </div>

    </div>
  );
}