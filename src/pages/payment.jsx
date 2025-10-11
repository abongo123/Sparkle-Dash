import React from "react";
import Pay from "../assets/Pictures/Payment.jpg"

function Payment() {
  const plan = localStorage.getItem("selectedPlan");
  const room = localStorage.getItem("selectedRoom");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50"
    style={{backgroundImage: `url(${Pay})`, backgroundSize: "cover", backgroundPosition: "center"}}>
      <h2 className="text-2xl font-bold mb-4 text-sky-700">Payment Options</h2>
      <p className="mb-6 text-black font-serif">
        Make payment for <strong>{plan}</strong> for a <strong>{room}</strong>.
      </p>

      <div className="space-y-7 flex flex-col">
        <button className="bg-green-600 text-white px-8 py-5 hover:bg-green-700 transition">
          Pay with M-Pesa
        </button>
        <button className="bg-sky-600 text-white px-8 py-5 hover:bg-blue-700 transition">
          Pay with Bank Account
        </button>
      </div>
    </div>
  );
}

export default Payment;
