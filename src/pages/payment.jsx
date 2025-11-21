import React from "react";
import Pay from "../assets/Pictures/Payment.jpg"

function Payment() {
  const plan = localStorage.getItem("selectedPlan");
  const room = localStorage.getItem("selectedRoom");

  const handlePayment = async () => {
  try {
    const response = await fetch("https://sparkle-backend-five.vercel.app/api/mpesa/pay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone: "254798253781", 
        amount: 500,
      }),
    });

    const result = await response.json();
    console.log(result);

    if (response.ok) {
      alert("✅Check your phone to complete payment.Thank you!");
    } else {
      alert("❌ Payment failed: " + (result.message || "Unknown error"));
    }
  } catch (error) {
    console.error("Error:", error);
    alert("⚠️ Network or server error. Please try again.");
  }
};


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50"
    style={{backgroundImage: `url(${Pay})`, backgroundSize: "cover", backgroundPosition: "center"}}>
      <h2 className="text-2xl font-bold mb-4 text-sky-700">Payment Options</h2>
      <p className="mb-6 text-black font-serif">
        Make payment for <strong>{plan}</strong> for a <strong>{room}</strong>.
      </p>

      <div className="space-y-7 flex flex-col">
        <button onClick={handlePayment}className="bg-green-600 text-white px-8 py-5 hover:bg-green-700 transition">
          Pay with M-Pesa
        </button>
        <button onClick={handlePayment}className="bg-sky-600 text-white px-8 py-5 hover:bg-blue-700 transition">
          Pay with Bank Account
        </button>
      </div>
    </div>
  );
}

export default Payment;
