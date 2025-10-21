import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function CalendarPage() {
  const location = useLocation();

  const rawSelectedServices = location.state?.selectedServices || [];
  const selectedServices = rawSelectedServices.map((s) =>
    s.service ? s : { service: s, selectedOptions: [] }
  );

  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [selectedTime, setSelectedTime] = useState(null);

  const times = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  const handleConfirm = () => {
    const allSelectedOptions = selectedServices.flatMap(
      (s) => s.selectedOptions || []
    );


    const bookingSummary = `
  ✅ Booking Confirmed!

  📅 Date: ${date.toDateString()}
  ⏰ Time: ${selectedTime || "Not selected"}
  🧹 Services: ${selectedServices.map((s) => s.service.title).join(", ")}
  📝 Options: ${
    allSelectedOptions.length > 0
      ? allSelectedOptions.map((o) => o.name).join(", ")
      : "None"
  }
  🗒️ Notes: ${notes || "No additional notes"}
  `;

  toast.success(bookingSummary, {
    className: "bg-sky-600 text-white p-4 rounded-lg shadow-lg",
    position: "top-center",
    autoClose: 7000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  });
  };

  const handleBooking = async (e) => {
  e.preventDefault();

  const bookingData = {
  name: e.target.name?.value || "Anonymous",
  phone: e.target.phone.value,
  email: e.target.email?.value || "No email provided",
  service: selectedServices.map((s) => s.service.title).join(", "),
  selectedOptions: selectedServices.flatMap((s) => s.selectedOptions.map(o => o.name)),
  date: date.toDateString(),
  time: selectedTime || "Not Selected",
  message: notes || "No additional notes",
};

  try {
  const res = await fetch("https://sparkle-backend-five.vercel.app/book", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bookingData),
  });

  if (res.ok) {
    toast.success("✅ Booking request sent successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      toastClassName: "bg-sky-200 text-black rounded-full px-4 py-2 shadow-lg",
      bodyClassName: "text-black"
    });
    e.target.reset();
  } else {
    toast.error("❌ Failed to send booking request. Please try again.", {
      position: "top-right",
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  }
} catch (err) {
  toast.error(`🚨 Error: ${err.message}`, {
    position: "top-right",
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  });
}

};
  
  return (
    <div className="bg-sky-500 min-h-screen py-10">
      
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-sky-600 font-serif underline underline-offset-8 decoration-[0.5px] decoration-sky-blue-400">
          SCHEDULE YOUR SERVICES
        </h2>
        <form onSubmit={handleBooking}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <Calendar
              onChange={setDate}
              value={date}
              className="rounded-lg w-full border-none text-sky-700 font-serif"
            />
            <p className="mt-4 text-sky-700">
              Selected Date:{" "}
              <span className="font-semibold text-black">
                {date.toDateString()}
              </span>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-sky-600 mb-2 text-center underline underline-offset-8 decoration-[0.5px] decoration-sky-blue-400">
              Available Slots
            </h3>
            <div className="grid grid-cols-2 gap-3 font-mono">
              {times.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`border rounded px-4 py-2 text-sm font-medium transition ${
                    selectedTime === time
                      ? "bg-sky-500 text-white border-emerald-600"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-sky-700 font-mono underline underline-offset-8 decoration-[0.5px] decoration-sky-blue-400">
              BOOKING DETAILS
            </h3>

            <div className="mb-4">
              <p className="font-medium text-gray-800 mb-2">Selected Services:</p>
              <ul className="list-disc list-inside text-gray-700">
                {selectedServices.length > 0 ? (
                  selectedServices.map((s, idx) => (
                    <li key={idx}>
                      {s.service.title}
                      {s.selectedOptions && s.selectedOptions.length > 0 && (
                        <ul className="list-inside list-disc text-gray-500 ml-4">
                          {s.selectedOptions.map((o, i) => (
                            <li key={i}>{o.name}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))
                ) : (
                  <p className="text-gray-500">No services selected</p>
                )}
              </ul>
            </div>

            <p className="text-gray-700">
              <span className="font-medium">Date:</span> {date.toDateString()}
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-medium">Time:</span> {selectedTime || "Not selected"}
            </p>

            <label className="block text-gray-700 font-medium mb-2">Additional Notes</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full border border-gray-300 p-3 focus:ring-2 focus:ring-sky-300 focus:outline-none h-32"
              placeholder="Add any extra details here..."
            ></textarea>

            <label className="block text-gray-700 font-medium mb-2 mt-4">Full Name</label>
            <input type="text"name="name" required className="w-full border border-gray-300 p-3 mb-4 focus:ring-2 focus:ring-sky-300 focus:outline-none" placeholder="Enter your name"/>
            <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input type="tel" name="phone" required className="w-full border border-gray-300 p-3 mb-4 focus:ring-2 focus:ring-sky-300 focus:outline-none" placeholder="Enter your phone number"/>

            <button
              onClick={handleConfirm}
              className="bg-sky-500 text-white px-3 py-3 rounded-lg w-full mt-4 hover:bg-sky-300 transition"
            >
              Book Now
            </button>
          </div>
        </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default CalendarPage;
