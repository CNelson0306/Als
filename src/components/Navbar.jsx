import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from '../assets/logo.png';
import './Navbar.css';

export const Navbar = () => {
    //To toggle the hamburger menu open or closed
    //Below, className hamburgerOpen = true give class name "open"
    //If not give empty class name ""
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <nav>
        <img src={logo} alt='Logo' />
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
                <NavLink to="/services">Gallery</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar