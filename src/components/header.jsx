import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo3 from "../assets/Pictures/logo3.jpeg";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-sky-600 text-white shadow-md z-50">
      <div className="w-full flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center">
          <img src={logo3} alt="Logo" className="h-14 w-auto" />
          <div className="text-3xl font-bold ml-2">Sparkle Dash</div>
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            <li><Link to="/" className="hover:text-green-200">Home</Link></li>
            <li><Link to="/services" className="hover:text-gray-200">Services</Link></li>
            <li><Link to="/pricing" className="hover:text-gray-200">Pricing & Plans</Link></li>
            <li><Link to="/about" className="hover:text-gray-200">About</Link></li>
            <li><Link to="/contact" className="hover:text-gray-200">Contact</Link></li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-sky-600 w-full px-6 py-4">
          <ul className="flex flex-col space-y-4">
            <li><Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-green-200">Home</Link></li>
            <li><Link to="/services" onClick={() => setMenuOpen(false)} className="hover:text-gray-200">Services</Link></li>
            <li><Link to="/pricing" onClick={() => setMenuOpen(false)} className="hover:text-gray-200">Pricing & Plans</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-gray-200">About</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-200">Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;


