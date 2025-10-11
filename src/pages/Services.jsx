import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import Cleaning from "../assets/Pictures/Cleaning.png";
import Deep from "../assets/Pictures/deep-cleaning.png";
import Sofa from "../assets/Pictures/sofa1.jpg";
import Mattress from "../assets/Pictures/Mattress.jpg";
import Construction from "../assets/Pictures/post-construction.jpg";
import Move from "../assets/Pictures/move-out-cleaning1.jpg";
import Carpet from "../assets/Pictures/carpet-cleaning.jpg";
import Fumigation from "../assets/Pictures/Fumigation1.jpg";
import Town from "../assets/Pictures/Town.jpg";
import Outside from "../assets/Pictures/Outside-town.jpg";
import Long from "../assets/Pictures/Long-distance.jpg";
import Hotels from "../assets/Pictures/Hotels1.png";
import Office from "../assets/Pictures/Shop-office.png";
import School from "../assets/Pictures/school-church.jpg";
import Constructions from "../assets/Pictures/construction-site.jpg";

function Services() {
  const cleaningServices = [
    { id: "home-office", img: Cleaning, title: "Home & Office Cleaning", price: "Ksh 2,000" },
    { id: "carpet", img: Carpet, title: "Carpet Cleaning", price: "Ksh 3,500" },
    { id: "deep", img: Deep, title: "Deep Cleaning & Maintenance", price: "Ksh 5,000" },
    { id: "sofa", img: Sofa, title: "Sofa Cleaning", price: "Ksh 5,000" },
    { id: "mattress", img: Mattress, title: "Mattress Cleaning", price: "Ksh 5,000" },
    { id: "construction", img: Construction, title: "Post Construction Cleaning", price: "Ksh 5,000" },
    { id: "move", img: Move, title: "Move-In/Move-Out Cleaning", price: "Ksh 5,000" },
    { id: "fumigation", img: Fumigation, title: "Fumigation", price: "Ksh 5,000" },
  ];

  const errandsServices = [
    { img: Town, title: "Within Town", price: "Ksh 100 - 250" },
    { img: Outside, title: "Outside Town", price: "Ksh 300 - 600" },
    { img: Long, title: "Long Distance", price: "Ksh 30 - 50/Km one way" },
  ];

  const garbageServices = [
    { img: Hotels, title: "Hotels/Restaurant", frequency: "Every Morning", price: "Ksh 4,500/Monthly" },
    { img: Office, title: "Small Shops & Small offices", frequency: "Twice/Week", price: "Ksh 1500/Monthly" },
    { img: School, title: "Schools & Churches", frequency: "Weekly", price: "Ksh 3,500 per Month" },
    { img: Constructions, title: "Construction sites", frequency: "Per Job", price: "From Ksh 2500" },
  ];

  return (
    <div className="w-full px-6 py-10 bg-sky-500 relative">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">
          <h3 className="text-2xl font-semibold text-emerald-600 mb-4 text-center">
            Cleaning & Fumigation
          </h3>
          <p className="text-gray-600 mb-6 text-center">
            Professional residential and commercial cleaning services tailored to your needs.
          </p>

          <div className="grid sm:grid-cols-1 xl:grid-cols-4 gap-8">
            {cleaningServices.map((item, index) => (
              <Link
                key={index}
                to={`/service/${item.id}`}
                state={{ service: item }}
                className="bg-gray-50 rounded-lg shadow-md flex flex-col items-center justify-between p-4 min-h-[340px] hover:shadow-lg transition transform hover:scale-105"
              >
                <div className="w-40 h-40 flex items-center justify-center mb-4">
                  <img src={item.img} alt={item.title} className="w-40 h-40 object-cover rounded-full" />
                </div>
                <div className="text-center flex-1 flex flex-col justify-between">
                  <p className="text-lg font-semibold text-gray-800">{item.title}</p>
                  <p className="text-sky-600 text-sm mt-auto underline">View Details</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-emerald-600 mb-4 text-center">
            Delivery & Errands
          </h3>
          <p className="text-gray-600 mb-6 text-top">
            From shopping to deliveries, we handle errands so you can focus on what matters.
          </p>
          <div className="grid sm:grid-cols-1 xl:grid-cols-3 gap-6">
            {errandsServices.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-md flex flex-col items-center justify-between p-4 min-h-[340px]"
              >
                <div className="w-40 h-40 flex items-center justify-center mb-4">
                  <img src={item.img} alt={item.title} className="w-40 h-40 object-cover rounded-full" />
                </div>
                <div className="text-center flex-1 flex flex-col justify-between">
                  <p className="text-lg font-semibold text-gray-800">{item.title}</p>
                  <p className="text-emerald-600 font-bold my-2">{item.price}</p>
                  <Link
                    to="/calendar"
                    state={{ selectedServices: [item] }}
                    className="bg-sky-600 text-white px-6 py-2 rounded-md hover:underline transition mt-auto"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-emerald-600 mb-4 text-center">
            Garbage Collection
          </h3>
          <p className="text-gray-600 text-center">
            Reliable and eco-friendly waste collection services for homes and businesses.
          </p>
          <div className="grid sm:grid-cols-1 xl:grid-cols-3 gap-6">
            {garbageServices.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-md flex flex-col items-center justify-between p-4 min-h-[340px]"
              >
                <div className="w-40 h-40 flex items-center justify-center mb-4">
                  <img src={item.img} alt={item.title} className="w-40 h-40 object-cover rounded-full" />
                </div>
                <div className="text-center flex-1 flex flex-col justify-between">
                  <p className="text-lg font-semibold text-gray-800">{item.title}</p>
                  {item.frequency && (
                    <p className="bg-yellow-400 text-black text-xs font-medium px-3 py-1 rounded-full mt-2 inline-block">
                      {item.frequency}
                    </p>
                  )}
                  <p className="text-emerald-600 font-bold my-2">{item.price}</p>
                  <Link
                    to="/calendar"
                    state={{ selectedServices: [item] }}
                    className="bg-sky-600 text-white px-6 py-2 rounded-md hover:underline transition mt-auto"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
