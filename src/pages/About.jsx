import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import mopImg from "../assets/Pictures/Mop.jpeg";
import deliveryImg from "../assets/Pictures/Delivery.jpg";
import garbageImg from "../assets/Pictures/Garbage.jpg";


function About() {
  return (
    <div className="w-full relative px-6 py-10 bg-sky-500">
      <div className="flex">
      <div className="text-center md:w-1/2">
      <h2 className="text-3xl font-bold text-white">About Us</h2>
      <p className="text-yellow-300 font-bold">Shine. Dash. Done</p>
      <p className="text-sm text-white leading-relaxed font-extralight">
        To be the Most trusted and relaible partner in creating sportless, healthier and stress free community.
      </p>
      </div>
      <div className="text-center md:w-1/2 space-x-8">
        <h2 className="font-bold text-white text-3xl">Mission</h2>
      <p className="text-sm text-white leading-relaxed font-extralight">
        Sparkle Dash Services is dedicated to making your life easier by providing
        top-notch cleaning, reliable errand solutions, and eco-friendly garbage
        collection. Our experienced team ensures customer satisfaction, affordability,
        and professional service every time.
      </p>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div>
        <img src={mopImg} alt="Cleaning service" className="w-full h-64 md:h-80 lg:h-96"/>
        <p className="text-white text-center font-bold text-1xl">We Shine</p>
        </div>
        <div>
        <img src={deliveryImg} alt="Delivery" className="w-full h-64 md:h-80 lg:h-96"/>
        <p className="text-white text-center font-bold text-1xl">We Dash</p>
        </div>
        <div>
        <img src={garbageImg} alt="Garbage" className="w-full h-64 md:h-80 lg:h-96"/>
        <p className="text-white text-center font-bold text-1xl">We take care of the Garbage</p>
        </div>
      </div>
    </div>
  );
}

export default About;
