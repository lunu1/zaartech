import { useState, useEffect } from "react";
import Logo from "../assets/misbahlogo.png";
import { Link } from "react-router-dom";
import { IoIosCall } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle outside click for dropdown
  const handleOutsideClick = (e) => {
    if (!e.target.closest(".dropdown-container")) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <nav className="shadow-lg bg-[#ffffff] py-2">
      <div className="mx-auto px-4 sm:px-6 lg:px-20">
        {/* Mobile Navbar */}
        <div className="flex items-center h-28 relative">
          {/* Main Logo - Center */}
          <a href="/" className="flex items-center absolute left-1/2 transform -translate-x-1/2">
            <img src={Logo} className="h-32" alt="Logo" />
          </a>

          {/* Right Side Group - Contains both logos and hamburger */}
          <div className="flex items-center space-x-3 absolute right-1 ">
          <div className="hidden sm:flex items-center gap-2">
            {/* Logo Links */}
            <a 
              href="https://ibhar.almisbahdecor.com/" 
              className="rounded-md bg-gray-100 hover:bg-gray-200 p-2 transition-colors flex items-center justify-center"
              title="ibar.misbah.com"
            >
              {/* <span className="text-sm font-semibold">IBAR</span> */}
              <img src="/ibarlogo.jpeg" alt="logo" className="h-10 object-contain" />
            </a>
            <a 
              href="https://almisbahdecor.com" 
              className="rounded-md bg-gray-100 hover:bg-gray-200 p-2 transition-colors flex items-center justify-center"
              title="misbah.com"
            >
              <img src="/misbahlogo.jpeg" alt="logo" className="h-10 object-contain" />

            </a>
            </div>

            {/* Hamburger Menu */}
            <button
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3 border-b border-gray-200">
            <a
              href="/"
              className="block text-gray-700 hover:text-gray-400 px-3 py-2 rounded-md text-base font-medium border-b border-gray-200"
            >
              Home
            </a>
            <a
              href="/about"
              className="block text-gray-700 hover:text-gray-400 px-3 py-2 rounded-md text-base font-medium border-b border-gray-200"
            >
              About
            </a>
            <a
              href="/services"
              className="block text-gray-700 hover:text-gray-400 px-3 py-2 rounded-md text-base font-medium border-b border-gray-200"
            >
              Services
            </a>
            <a
              href="/projects"
              className="block text-gray-700 hover:text-gray-400 px-3 py-2 rounded-md text-base font-medium border-b border-gray-200"
            >
              Projects
            </a>
            
            <a
              href="/contact"
              className="block text-gray-700 hover:text-gray-400 px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
           {/* Same image links duplicated in mobile menu */}
            <div className="sm:hidden flex items-center gap-2 py-3 px-3">
              <a
                href="https://ibhar.almisbahdecor.com/"
                className="rounded-md bg-gray-100 hover:bg-gray-200 p-2 transition-colors flex items-center justify-center"
                title="ibar.misbah.com"
              >
                <img src="/ibarlogo.jpeg" alt="logo" className="h-10 object-contain" />
              </a>
              <a
                href="https://almisbahdecor.com"
                className="rounded-md bg-gray-100 hover:bg-gray-200 p-2 transition-colors flex items-center justify-center"
                title="misbah.com"
              >
                <img src="/misbahlogo.jpeg" alt="logo" className="h-10 object-contain" />
              </a>
            </div>
            </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;