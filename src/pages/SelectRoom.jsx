import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import House from "../assets/Pictures/House2.jpg"

function SelectRoom() {
  const [selectedRoom, setSelectedRoom] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (!selectedRoom) return alert("Please select Room Size!");

    setLoading(true);
    setTimeout(() => {
      navigate("/payment", { state: { selectedRoom } });
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6"
    style={{backgroundImage: `url(${House})`, backgroundSize: "cover", backgroundPosition: "center"}}>
      <h2 className="text-3xl font-bold text-black mb-6">
        Select Your Room Size
      </h2>

      <select
        value={selectedRoom}
        onChange={(e) => setSelectedRoom(e.target.value)}
        className="border-2 border-sky-700 rounded-none px-6 py-3 text-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
      >
        <option value="">Select Room</option>
        <option value="1BR">1 Bedroom (1BR)</option>
        <option value="2BR">2 Bedroom (2BR)</option>
        <option value="3BR">3 Bedroom (3BR)</option>
        <option value="4BR+">4 Bedroom +</option>
      </select>
      <button
        onClick={handleNext}
        disabled={loading}
        className={`mt-6 px-10 py-3 text-lg text-white font-serif transition ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg- bg-sky-700 hover:bg-sky-400"
        }`}
      >
        {loading ? "Loading..." : "Next"}
      </button>
    </div>
  );
}

export default SelectRoom;
