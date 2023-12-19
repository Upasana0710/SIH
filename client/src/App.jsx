import React, { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Carousel from "./components/Carousel.jsx";
import Section1 from "./components/Section1.jsx";
import Section3 from "./components/Section3.jsx";
import ContactUs from "./components/Footer.jsx";
import LoginSignUp from "./components/login.jsx";
import Info from "./components/Info/info.jsx";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Schedule from "./components/ScheduleGenerate/Schedule.jsx";
import Home from "./components/Home.jsx";

function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Section1 />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/section3" element={<Section3 />} />
          <Route path="/contact" element={<ContactUs />} />
          {currentUser ? (
            <>
              <Route path="/info" element={<Info />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/home" element={<Home />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<LoginSignUp />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
