import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import your Navbar component
import HeroSection from "./components/HeroSection"; // Import your Home component
import Services from "./components/Services"; // Import your Services component
// Import your Dashboard component
// Import your Profile component
import SignUp from "./components/SignUp";
import Login from "./components/LogIn";
import Booking from "./components/Booking";
import { AuthProvider, AuthContext } from "./context/AuthContext";

function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default Router;
