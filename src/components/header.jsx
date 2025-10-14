import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Pictures/Blue white logo.png"
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo2 from "../assets/Pictures/logo3.jpeg"
import logo1 from "../assets/Pictures/logo2.jpeg"


function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-sky-600 text-white shadow-md z-50">
      <div className="w-full flex flex-wrap items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center">
        <img src={logo2} alt="Logo" className="h-14 w-auto"/>
        <div className="text-3xl font-bold">Sparkle Dash</div>
        </Link>
        <nav>
          <ul className="flex space-x-8">
            <li><Link to="/" className="hover:text-green-200">Home</Link></li>
            <li><Link to="/services" className="hover:text-gray-200">Services</Link></li>
            <li><Link to="/pricing" className="hover:text-gray-200">Pricing & Plans</Link></li>
            <li><Link to="/about" className="hover:text-gray-200">About</Link></li>
            <li><Link to="/contact" className="hover:text-gray-200">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

