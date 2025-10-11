import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            value={form.firstName}
            onChange={handleChange}
            required
            className="w-full border-b border-blue-600 p-3 focus:outline-none focus:border-blue-500 placeholder:translate-y-[-18px]"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name*"
            value={form.lastName}
            onChange={handleChange}
            required
            className="w-full border-b border-blue-600 p-3 focus:outline-none focus:border-blue-500 placeholder:translate-y-[-18px]"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border-b border-blue-600 p-3 focus:outline-none focus:border-blue-500 placeholder:translate-y-[-18px]"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="w-full border-b border-blue-600 p-3 focus:outline-none focus:border-blue-500 placeholder:translate-y-[-18px]"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full border-b border-blue-600 p-3 focus:outline-none focus:border-blue-500 placeholder:translate-y-[-18px]"
        />
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
