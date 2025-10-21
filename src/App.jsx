import React from "react";
import logo from "./assets/Pictures/Blue white logo.png"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import BookNow from "./pages/BookNow";
import Contact from "./pages/Contact";
import GetQuote from "./pages/GetQuote";
import SelectRoom from "./pages/SelectRoom";
import Payment from "./pages/payment";
import CalendarPage from "./pages/CalendarPage";
import ServiceDetails from "./pages/ServiceDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { HiHome, HiUser, HiOutlineSearch } from "react-icons/hi";
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  return (
    <Router>
      <Header/>
      <main style={{minHeight: "80vh", paddingTop: "70px"}}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/book-now" element={<BookNow/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/get-quote" element={<GetQuote/>}/>
          <Route path="/select-room" element={<SelectRoom />}/>
          <Route path="/calendar" element={<CalendarPage />}/>
          <Route path="/payment" element={<Payment />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/toast-container" element={<ToastContainer />} />
        </Routes>
      </main>
      <Footer/>

      </Router>
  );
}
export default App;
