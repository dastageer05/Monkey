import React from "react";
import {
  FaGithub,
  FaDiscord,
  FaTwitter,
  FaPhoneAlt,
  FaHandsHelping,
  FaFileImage,
  FaLock,
} from "react-icons/fa";

import { MdOutlineSecurity } from "react-icons/md";
const Footer = () => {
  const footerLinks = [
    { name: "Contact", icon: <FaPhoneAlt size={16} />, link: "#" },
    { name: "Support", icon: <FaHandsHelping size={16} />, link: "#" },
    { name: "GitHub", icon: <FaGithub size={16} />, link: "#" },
    { name: "Discord", icon: <FaDiscord size={16} />, link: "#" },
    { name: "Twitter", icon: <FaTwitter size={16} />, link: "#" },
    { name: "Terms", icon: <FaFileImage size={16} />, link: "#" },
    { name: "Security", icon: <MdOutlineSecurity size={16} />, link: "#" },
    { name: "Privacy", icon: <FaLock size={16} />, link: "#" },
  ];

  return (
    <footer className="w-full text-orange-400 py-4">
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center text-xs mb-3">
        <p>
          <span className="bg-orange-400 text-black px-2">enter</span> - reset
          test
        </p>
        <p className="m-2">
          <span className="bg-orange-400 text-black px-2 ">enter</span> - reset
          test
        </p>
      </div>
      <div className="max-w-4xl mx-auto flex items-center space-y-2 sm:flex-row sm:justify-between sm:space-y-0 px-4">
        <div className="flex items-center space-x-3">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="hover:text-white flex items-center text-xxs"
            >
              {link.icon && <span className="mr-1">{link.icon}</span>}
              <p className="mx-1">{link.name}</p>
            </a>
          ))}
        </div>

        {/* Right Section */}
        <div className="text-xs text-center sm:text-left">
          <p>&copy; 2024 Monkey Type. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
