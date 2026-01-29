import React, { useState } from "react";

const Navbar = () => {
  // State to manage the menu opening/closing
  // 'isMenuOpen' is the variable (true/false)
  // 'setIsMenuOpen' is the function to change it
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="font-bold text-xl text-black">
            <img src="\src\assets\Logo.png" className="h-25" />
          </div>

          {/* Desktop Menu (Hidden on mobile) */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <a
                href="#home"
                className="text-gray-700 font-semibold hover:text-blue-600"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-700 font-semibold hover:text-blue-600"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-700  font-semibold hover:text-blue-600"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-700  font-semibold hover:text-blue-600"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className="text-gray-700  font-semibold hover:text-blue-600"
              >
                Contact me
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle state on click
          >
            {/* Switch icon based on state (Hamburger vs X) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {/* Conditional rendering: Only show if isMenuOpen is true */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 absolute w-full left-0 top-16 shadow-lg">
            <ul className="flex flex-col space-y-4">
              <li>
                <a
                  href="#home"
                  className="block text-gray-700 hover:text-blue-600"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block text-gray-700 hover:text-blue-600"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block text-gray-700 hover:text-blue-600"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block text-gray-700 hover:text-blue-600"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#Contact"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Contact me
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
