import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="bg-white text-black text-center py-4">
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center px-6 space-y-6 bg-sky-600">
        <div className="md:w-1/3 text-white">
      <h1 className="p-8 font-bold mb-2">OUR COMPANY</h1>
      <p>We make life simpler and stress-free. From Sparking clean spaces to reliable errands and co-friendly garbage collection, we're here to handle the tasks that matter the most.</p>
        </div>
        <div className="md:w-1/3 text-white">
      <h1 className="p-8 font-bold mb-2">ADDRESS</h1>
      <p>P.O BOX 1699-50200, Bungoma, Kenya</p>
      <p>Phone: +254700445584</p>
      <p>Email:info@sparkledashservices.com</p>
        </div>
        <div className="md:w-1/3 text-white">
      <h1 className="p-8 font-bold mb-2">OPERATING HOURS</h1>
      <p>Monday - Friday: 8:00AM - 6:00PM</p>
      <p>Saturday - Sunday: 12:00PM - 4:00PM</p>
        </div>
        <div className="md:w-1/3 text-white text-center">
      <h1 className="p-8 font-bold mb-2">SOCIAL MEDIA</h1>
      <div className="flex justify-center space-x-6">
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="hover:text-blue-300 mx-auto"/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-blue-300 mx-auto"/>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-blue-300 mx-auto"/>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              <FaTiktok className="hover:text-blue-300 mx-auto"/>
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
              <FaWhatsapp className="hover:text-blue-300 mx-auto"/>
            </a>
        </div>
        </div>
      </div>
      <p className="bg-white text-black">© {new Date().getFullYear()} SparkleDash Services. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
