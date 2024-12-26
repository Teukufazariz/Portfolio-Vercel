import { useState } from "react"; 
import logo from "../assets/logoRiz.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6"; 
import { FaInstagram } from "react-icons/fa";
//Used to be NavBar, repurposed for contacts

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <span className="site-title underline-animation">Riz</span>
      </div>
      <div className="flex items-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-babyBlue hover:text-blue-700 transition-colors duration-300" 
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink hover:text-gray-700 transition-colors duration-300" 
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green hover:text-blue-500 transition-colors duration-300" 
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:text-pink transition-colors duration-300" 
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;