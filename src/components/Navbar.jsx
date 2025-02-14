import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Navbar.css';

export const Navbar = () => {
    //To toggle the hamburger menu open or closed
    //Below, className hamburgerOpen = true give class name "open"
    //If not give empty class name ""
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <nav>
        <h1>Abnormal Load Services</h1>
        <div className='hamburger' onClick={() => {
            setHamburgerOpen(!hamburgerOpen)
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        
        <ul className={hamburgerOpen ? "open" : ""}>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/services">Services</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar