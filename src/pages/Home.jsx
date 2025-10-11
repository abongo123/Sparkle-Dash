import React from "react";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import background from "../assets/Pictures/Background img.jpg"

function Home() {
  return (
    <div className="relative w-full h-screen flext items-center justify-center text-center text-white" 
    style={{backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center"}}>
      <div className="absolute inset-0 bg-sky-600 opacity-50"></div>
      <div className=" relative z-10 px-6 mb-10">
      <h1 className="text-7xl font-bold mb-10 py-8">
        Sparkle Dash Services
      </h1>
      <p className="text-lg text-white mb-8">
        Your trusted partner in cleaning, errands, and garbage collection.
      </p>
      <p className="text-white mb-6 font-mono text-lg">Shine. Dash. Done!</p>
      <div className="relative z-10 px-8 pt-20 mt-20">
      <Link 
        to="/get-quote" 
        className="bg- bg- bg- bg-yellow-300 text-black px-12 py-6 shadow hover:bg-white"
      >
        Get a Quote
      </Link>
      </div>
      </div>
    </div>
  );
}

export default Home;
