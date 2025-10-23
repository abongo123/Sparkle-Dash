import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

try {
    const res = await fetch("https://sparkle-backend-five.vercel.app/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("We are in Receipt of your Request, You will hear from Us soon!");
      e.target.reset();
    } else {
      alert("❌ Failed to send Quotation.");
    }
  } catch (err) {
    alert("❌ Error: " + err.message);
  }



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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Quote request submitted successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact us for a Quote</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="text-sky-800">First Name*</label>
          <input
            type="text"
            name="firstName"
            placeholder=""
            value={form.firstName}
            onChange={handleChange}
            required
            className="w-full border-b border-blue-600 p-3 focus:outline-none focus:border-blue-500 placeholder:translate-y-[-18px]"
          />
          </div>
          <div>
            <label className="text-sky-800">Last name*</label>
          <input
            type="text"
            name="lastName"
            placeholder=""
            value={form.lastName}
            onChange={handleChange}
            required
            className="w-full border-b border-blue-600 p-3 focus:outline-none focus:border-blue-500 placeholder:translate-y-[-18px]"
          />
          </div>
        </div>
        <div>
          <label className="text-sky-800">Email*</label>
        <input
          type="email"
          name="email"
          placeholder=""
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border-b border-blue-600 p-3 focus:outline-none focus:border-blue-500 placeholder:translate-y-[-18px]"
        />
        </div>

        <div>
          <label className="text-sky-800">Subject</label>
        <input
          type="text"
          name="subject"
          placeholder=""
          value={form.subject}
          onChange={handleChange}
          required
          className="w-full border-b border-blue-600 p-3 focus:outline-none focus:border-blue-500 placeholder:translate-y-[-18px]"
        />
        </div>
        <div>
          <label className="text-sky-800">Message</label>
        <textarea
          name="message"
          placeholder=""
          value={form.message}
          onChange={handleChange}
          required
          className="w-full border-b border-blue-600 p-3 focus:outline-none focus:border-blue-500 placeholder:translate-y-[-18px]"
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
