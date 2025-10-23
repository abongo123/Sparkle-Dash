import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function GetQuote() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://sparkle-backend-five.vercel.app/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form), 
      });

      if (res.ok) {
        alert("✅ We are in receipt of your request! You will hear from us soon.");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        }); 
      } else {
        alert("❌ Failed to send quotation.");
      }
    } catch (err) {
      alert("❌ Error: " + err.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Contact us for a Quote
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="text-sky-800">First Name*</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
              className="w-full border-b border-blue-600 p-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="text-sky-800">Last Name*</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
              className="w-full border-b border-blue-600 p-3 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="text-sky-800">Email*</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border-b border-blue-600 p-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="text-sky-800">Subject</label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="w-full border-b border-blue-600 p-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="text-sky-800">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border-b border-blue-600 p-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-yellow-400 text-blue-700 px-6 py-3 rounded-lg shadow hover:bg-white w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default GetQuote;
