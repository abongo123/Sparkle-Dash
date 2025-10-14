import React, { useState, useEffect } from "react";
import { useLocation, useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function ServiceDetails() {
  const { id } = useParams();
  const location = useLocation();
  const service = location.state?.service;
  const navigate = useNavigate();

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [options, setOptions] = useState([]);


  const serviceOptions = {
    carpet: [
      { name: "Small Carpet (3x5 ft)", price: "Ksh 500" },
      { name: "Medium Carpet (5x8 ft)", price: "Ksh 800" },
      { name: "Large Carpet (8x10 ft)", price: "Ksh 1200" },
      { name: "Extra Large Carpet (10x12 ft)", price: "Ksh 1500" },
    ],
    sofa: [
      { name: "1-Seater", price: "Ksh 400" },
      { name: "2-Seater", price: "Ksh 700" },
      { name: "3-Seater", price: "Ksh 1,000" },
      { name: "L-Shaped Sofa", price: "Ksh 1,500" },
    ],
    mattress: [
      { name: "Single Mattress", price: "Ksh 600" },
      { name: "Double Mattress", price: "Ksh 800" },
      { name: "Queen Mattress", price: "Ksh 1,000" },
      { name: "King Mattress", price: "Ksh 1,200" },
    ],
    "home-office": [
      { name: "Single Room", price: "Ksh 1,500" },
      { name: "1 Bedroom", price: "Ksh 2,000" },
      { name: "2 Bedroom", price: "Ksh 3,000" },
      { name: "Office Space (per room)", price: "Ksh 2,500" },
    ],
    fumigation: [
      { name: "Single Room", price: "Ksh 1,000" },
      { name: "1 Bedroom", price: "Ksh 1,500" },
      { name: "2 Bedroom", price: "Ksh 2,500" },
      { name: "Entire House", price: "Ksh 4,000" },
    ],
    construction: [
      { name: "Small Site", price: "Ksh 3,000" },
      { name: "Medium Site", price: "Ksh 4,500" },
      { name: "Large Site", price: "Ksh 6,000" },
    ],
    deep: [
      { name: "1 Room", price: "Ksh 1,200" },
      { name: "2 Rooms", price: "Ksh 2,000" },
      { name: "Entire House", price: "Ksh 3,000" },
    ],
    move: [
      { name: "Move-In (1 Bedroom)", price: "Ksh 2,000" },
      { name: "Move-Out (2 Bedroom)", price: "Ksh 3,000" },
      { name: "Full House Move", price: "Ksh 4,500" },
    ],
  };

  useEffect(() => {
    if (id && serviceOptions[id]) {
      setOptions(serviceOptions[id]);
    } else {
      setOptions([]);
    }
  }, [id]);

  if (!service) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Service Not Found</h2>
        <Link to="/services" className="bg-sky-600 text-white px-4 py-2 rounded-md">
          Back to Services
        </Link>
      </div>
    );
  }

  const handleSelect = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleBookNow = () => {
    const bookingDetails = {
      service,
      selectedOptions,
    };
    navigate("/calendar", {
  state: { selectedServices: [{ service, selectedOptions }] },
});
    
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex justify-center items-center">
      <div className="bg-sky-300 shadow-lg rounded-2xl p-8 max-w-xl w-full text-center">
        <img
          src={service.img}
          alt={service.title}
          className="w-60 h-60 mx-auto object-cover rounded-full mb-6"
        />
        <h2 className="text-3xl font-bold text-black mb-4">{service.title}</h2>

        {options.length > 0 ? (
          <div className="text-left mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Select Options:</h3>
            <div className="space-y-2">
              {options.map((option, index) => (
                <label
                  key={index}
                  className="flex items-center justify-between px-4 py-2 rounded-md cursor-pointer hover:bg-gray-100 transition bg-slate-300"
                >
                  <span>{option.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-black font-semibold">{option.price}</span>
                    <input
                      type="checkbox"
                      checked={selectedOptions.includes(option)}
                      onChange={() => handleSelect(option)}
                      className="w-5 h-5 accent-sky-600"
                    />
                  </div>
                </label>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-500 mb-6">No specific options for this service.</p>
        )}

        {selectedOptions.length > 0 && (
          <div className="mb-6 text-left bg-emerald-50 p-3 rounded-md">
            <h4 className="font-semibold text-emerald-700 mb-2">Selected:</h4>
            <ul className="list-disc list-inside text-gray-700">
              {selectedOptions.map((opt, i) => (
                <li key={i}>
                  {opt.name} — {opt.price}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={handleBookNow}
          disabled={selectedOptions.length === 0}
          className={`${
            selectedOptions.length === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-sky-600 hover:bg-sky-700"
          } text-white px-6 py-3 rounded-md transition`}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default ServiceDetails;
