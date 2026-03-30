"use client";

import { useState } from "react";

export default function WalletPage() {
  const [amount, setAmount] = useState("");

  const deposit = async () => {
    await fetch("/api/wallet/deposit", {
      method: "POST",
      body: JSON.stringify({ amount: Number(amount) }),
    });

    alert("Deposited");
  };

  const withdraw = async () => {
    await fetch("/api/wallet/withdraw", {
      method: "POST",
      body: JSON.stringify({ amount: Number(amount) }),
    });

    alert("Requested");
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Wallet</h1>

      <input
        type="number"
        placeholder="Amount"
        className="border p-2 rounded w-full"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div className="flex gap-4">
        <button onClick={deposit} className="bg-green-600 text-white px-4 py-2 rounded">
          Deposit
        </button>

        <button onClick={withdraw} className="bg-red-600 text-white px-4 py-2 rounded">
          Withdraw
        </button>
      </div>
    </div>
  );
}