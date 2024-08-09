
import React from "react";
import { Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import pic from "../assets/pic.jpg"
import { FaGithub, FaLinkedin, FaTelegram, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoYoutube, IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiExpress } from "react-icons/si";
import {ReactTyped} from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-4 text-center md:text-left">
            <span className="text-lg font-semibold text-gray-700">Welcome to My Feed</span>
            <div className="flex justify-center md:justify-start space-x-1 text-2xl md:text-4xl font-bold text-gray-800">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-blue-600"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <p className="text-md md:text-md text-gray-600">
              A passionate Front-End Developer. Proficient in HTML, CSS, JavaScript, and ReactJS, with a proven track record of enhancing front-end projects. Committed to delivering high-quality work and contributing to impactful projects.
            </p>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between space-y-6 md:space-y-0 md:space-x-6 mt-6">
              <div className="space-y-2">
                <h2 className="text-center font-bold text-gray-700">Available on</h2>
                <ul className="flex justify-center space-x-5 text-gray-600">
                  <li>
                    <a href="https://github.com/Marsalaan5" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-2xl hover:text-blue-600 transition-colors duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/mohammad-rashid-940348282" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-2xl hover:text-blue-600 transition-colors duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                      <IoLogoYoutube className="text-2xl hover:text-red-600 transition-colors duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
                      <FaTelegram className="text-2xl hover:text-blue-600 transition-colors duration-200" />
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h2 className="text-center font-bold text-gray-700">Currently Working On</h2>
                <div className="flex justify-center space-x-5 text-gray-600">
                  <SiMongodb className="text-3xl hover:text-green-600 transition-colors duration-200" />
                  <SiExpress className="text-3xl hover:text-gray-600 transition-colors duration-200" />
                  <FaReact className="text-3xl hover:text-blue-600 transition-colors duration-200" />
                  <FaNodeJs className="text-3xl hover:text-green-600 transition-colors duration-200" />
                  <IoLogoJavascript className="text-3xl hover:text-yellow-600 transition-colors duration-200" />
                </div>
              </div>
              
              <div className="text-center">
               
                <div className="mt-4">
                  <Worker
                    workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
                  />
                </div>
                <a href="../../public/resume.pdf" download>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
                    Download Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 flex justify-center md:justify-end">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px] shadow-lg"
              alt="Profile Picture"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
