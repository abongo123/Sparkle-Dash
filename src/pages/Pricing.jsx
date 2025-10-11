import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Pricing() {
  const [loadingPlan, setLoadingPlan] = useState(null);
  const navigate = useNavigate();

  const handleSelectClick = (planName) => {
    setLoadingPlan(planName);

  
    setTimeout(() => {
      localStorage.setItem("selectedPlan", planName);
      navigate("/select-room");
    }, 1000);
  };

  const plans = [
    {
      name: "Basic Plan",
      bg: "#eed0a6",
      prices: ["1BR: KSH 3,100", "2BR: KSH 4,100", "3BR: KSH 5,000", "4BR+: Custom"],
      description: "Simple, affordable and reliable for your daily routine.",
      features: ["Cleaning 2x/week", "Weekly Garbage Collection"],
    },
    {
      name: "Standard Plan",
      bg: "#86efac",
      prices: ["1BR: KSH 6,500", "2BR: KSH 7,600", "3BR: KSH 9,000", "4BR+: Custom"],
      description: "Perfect balance of cleanliness, comfort and convenience.",
      features: [
        "Cleaning 2x/week",
        "Monthly deep clean & carpet care",
        "Errands 2x/week",
        "Garbage collection 2x/week",
      ],
    },
    {
      name: "Premium Plan",
      bg: "#fde68a",
      prices: ["1BR: KSH 12,000", "2BR: KSH 13,500", "3BR: KSH 16,000", "4BR+: Custom"],
      description: "All-in-one care for a spotless, stress-free lifestyle.",
      features: [
        "3x/week cleaning",
        "Monthly deep clean & carpet care",
        "Monthly fumigation",
        "2x/week garbage collection",
        "2x/week errands",
      ],
    },
    {
      name: "Custom Package",
      bg: "#e5e7eb",
      prices: ["1BR: Customize", "2BR: Customize", "3BR: Customize", "4BR+: Customize"],
      description: "Flexible pricing. You choose, we deliver!",
      features: ["Fully Flexible", "Tailored pricing", "Your Choice, your way"],
    },
  ];

  return (
    <div className="px-6 py-10 w-full max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Choose your Pricing Plans
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 w-full">
        {plans.map((plan, index) => (
          <div key={index} className="shadow-lg text-center rounded-lg overflow-hidden">
            <div
              className="border-2 border-sky-600 py-10"
              style={{ backgroundColor: plan.bg }}
            >
              <h3 className="text-xl font-semibold mb-2 text-emerald-600">
                {plan.name}
              </h3>

              {plan.prices.map((price, i) => (
                <p key={i} className="text-xl font-bold text-black mb-2">
                  {price}
                </p>
              ))}

              <ul className="text-gray-600 mb-4 space-y-2">
                <li>{plan.description}</li>
              </ul>

              <button
                onClick={() => handleSelectClick(plan.name)}
                disabled={loadingPlan === plan.name}
                className={`${
                  loadingPlan === plan.name
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-sky-500 hover:bg-sky-600"
                } text-white px-12 py-2 rounded-md transition`}
              >
                {loadingPlan === plan.name ? "Loading..." : "Select"}
              </button>
            </div>
            <div className="bg-white border-2 text-start px-8 py-12 border-sky-500 h-48">
              <ul className="text-sm space-y-1">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="before:content-['*'] before:mr-2 before:text-sky-600"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
