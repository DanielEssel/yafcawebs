import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the mobile menu
  
  return (
    <nav className="bg-red-50 p-2 fixed w-full top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-gray-800 font-bold text-xl">YAFCA</div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex mt-1 space-x-6">
          {/* Internal links (for scrolling to sections within the page) */}
          <Link to="/" className="text-gray-800" onClick={() => document.getElementById("hero").scrollIntoView({ behavior: "smooth" })}>Home</Link>
          <Link to="/" className="text-gray-800" onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>About</Link>
          <Link to="/" className="text-gray-800" onClick={() => document.getElementById("success-stories").scrollIntoView({ behavior: "smooth" })}>Success Stories</Link>
          <Link to="/" className="text-gray-800" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Contact</Link>

          {/* React Router Link for external pages (like Donate) */}
          <Link to="/donate" className="text-pink-700 bg-blend-luminosity px-4 py-1 mb-0.5 rounded-md">Donate Now</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 bg-blue-700 p-4">
          <Link to="/" className="text-white" onClick={() => document.getElementById("hero").scrollIntoView({ behavior: "smooth" })}>Home</Link>
          <Link to="/" className="text-white" onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>About</Link>
          <Link to="/" className="text-white" onClick={() => document.getElementById("success-stories").scrollIntoView({ behavior: "smooth" })}>Success Stories</Link>
          <Link to="/" className="text-white" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Contact</Link>
          <Link to="/donate" className="text-white bg-blue-700 px-4 py-2 rounded-md">Donate Now</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
