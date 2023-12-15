import React from 'react';
import letmainlogo from '../assets/letmainlogo.png'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/userSlice";

 export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  const { currentUser } = useSelector((state) => state.user);
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
      {currentUser? (
        <div className="authenticate" onClick={handleLogout}>Logout</div>
      ):(
          <NavLink className="authenticate" to="/login">Login</NavLink>
      )}
    </div>
    </nav>
    
  );
}


