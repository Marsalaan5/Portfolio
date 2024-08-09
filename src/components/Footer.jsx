
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-6 mb-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} className="hover:text-blue-600 transition-colors duration-300" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} className="hover:text-blue-400 transition-colors duration-300" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} className="hover:text-pink-600 transition-colors duration-300" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={30} className="hover:text-blue-800 transition-colors duration-300" />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8">
              <p className="text-center text-sm">
                &copy; 2024 Mohammad Rashid. All rights reserved.
              </p>
              <p className="text-center text-xs text-gray-400">
                Designed and built with love by Mohammad Rashid.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
