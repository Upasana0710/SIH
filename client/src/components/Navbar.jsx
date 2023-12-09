import React from 'react';
import letmainlogo from '../assets/letmainlogo.png'
import { NavLink } from 'react-router-dom';


 export default function Navbar() {
  return (
    <nav>
      <img id='logo' src={letmainlogo}/>
      <ul  className="list-container">
        
       <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/carousel"><li>Why Us</li></NavLink>
        <NavLink to="/section3"><li>About</li></NavLink>
        <NavLink to="/contact"><li>Contact</li></NavLink>
      </ul>
    
    <div>
      <ul className='authenticate'><NavLink to="/login"><li >SIGN UP/IN</li></NavLink></ul>
       
    </div>
    </nav>
    
  );
}


