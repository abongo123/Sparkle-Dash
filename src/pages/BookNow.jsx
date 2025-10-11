import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  const services = [
    { id: 1, title: "Home Cleaning", price: "Ksh 5,000" },
    { id: 2, title: "Fumigation", price: "Ksh 6,000" },
    { id: 3, title: "Errands", price: "Ksh 3,500" },
    { id: 4, title: "Garbage Collection", price: "Ksh 2,000" },
  ];

  const handleBookNow = (service) => {
    navigate("/calendar", { state: { selectedServices: [service] } });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 p-6">
      {services.map((service) => (
        <div key={service.id} className="bg-gray-100 rounded-lg p-4 shadow text-center">
          <p className="text-lg font-semibold text-gray-800">{service.title}</p>
          <p className="text-emerald-600 font-bold mb-4">{service.price}</p>
          <button
            onClick={() => handleBookNow(service)}
            className="bg-sky-600 text-white px-6 py-2 rounded-md hover:bg-sky-700"
          >
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default Services;

