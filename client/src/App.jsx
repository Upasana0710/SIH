import React from 'react'
import Navbar from './components/Navbar.jsx'
import Carousel from './components/Carousel.jsx'
import Section1 from './components/Section1.jsx'
import Section3 from './components/Section3.jsx'
import ContactUs from './components/Footer.jsx'
import LoginSignUp from './components/login.jsx'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Section1/>}/>
        <Route path="/carousel" element={ <Carousel/>}/>
        <Route path="/section3" element={ <Section3 />}/>
        <Route path="/contact" element={ <ContactUs/>}/>
        <Route path="/login" element={<LoginSignUp />} />
          
         
        </Routes>
      </Router>
     
    </div>
  );
}

        
export default App;
