import React from 'react'
import  { useState } from "react";
import { useIntl } from "react-intl";

// import Pic from "../../assets/map-pin(1)/map-pin.png";

import logo_pic from "../assets/FATEH LOGO.png";
import { Link , NavLink } from 'react-router-dom';




export default function Header() {

 
  const { formatMessage } = useIntl();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
  

  
  <div className="sm:px-6 lg:px-11">
    
      <nav className="bg-white font-bold rounded-lg shadow-lg">
        <div className="flex justify-between items-center h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
          <div className="flex-shrink-0">
            <NavLink href="#" className="text-xl font-bold">
              <img src={logo_pic} alt="Logo" />
            </NavLink>
          </div>

          
          <div className="font-copper navbar-links hidden md:flex space-x-10 relative">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `relative text-14px ml-10 leading-26px ${
            isActive ? "text-customOrange" : "text-customgrey"
          }`
        }
      > 
           {formatMessage({ id: "header.home" })}
      </NavLink>
      <NavLink
        to="/service"
        className={({ isActive }) =>
          `relative text-14px leading-26px ${
            isActive ? "text-customOrange" : "text-customgrey"
          }`
        }
      >
                 {formatMessage({ id: "header.service" })}

      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `relative text-14px leading-26px ${
            isActive ? "text-customOrange" : "text-customgrey"
          }`
        }
      >
                   {formatMessage({ id: "header.about" })}

      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `relative text-14px leading-26px ${
            isActive ? "text-customOrange" : "text-customgrey"
          }`
        }
      >
                   {formatMessage({ id: "header.contact" })}

      </NavLink>
    </div>

          {/* for mobile  */}
          <div className="md:hidden flex items-center">
            <button
              id="menu-btn"
              className="focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

       
        <div>
     
      <div
        id="menu"
        className={`navbar-links ${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative block px-4 py-2 font-cooper text-14px leading-26px ${
              isActive ? "text-customOrange" : "text-customgrey"
            }`
          }
        >
                   {formatMessage({ id: "header.home" })}
                  

        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `block px-4 py-2 font-cooper text-14px leading-26px ${
              isActive ? "text-customOrange" : "text-customgrey"
            }`
          }
        >
                     {formatMessage({ id: "header.about" })}

        </NavLink>
        <NavLink
          to="/service"
          className={({ isActive }) =>
            `block px-4 py-2 font-cooper text-14px leading-26px ${
              isActive ? "text-customOrange" : "text-customgrey"
            }`
          }
        >
                     {formatMessage({ id: "header.service" })}

        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `block px-4 py-2 font-cooper text-14px leading-26px ${
              isActive ? "text-customOrange" : "text-customgrey"
            }`
          }
        >
                     {formatMessage({ id: "header.contact" })}

        </NavLink>
      </div>
    </div>
      </nav>
    </div>


</>

  )
}
