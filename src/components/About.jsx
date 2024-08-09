
import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-5">About</h1>
        <p className="text-lg text-gray-700 mb-5">
          Hello, I'm Rashid, a passionate Front-End Developer with a keen eye for Full Stack Web Development.
          With a background in IT, I strive to create impactful and visually stunning software solutions that leave a lasting impression.
        </p>
        
        <div className="mb-5">
          <h2 className="text-2xl font-semibold text-green-600 mb-2">Education & Training</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Bachelor of Computer Application, Glocal University, 2019</li>
            <li>XII, St. John's School, ISC-PCM, 2014</li>
            <li>X, St. John's School, ICSE-PCM, 2012</li>
          </ul>
        </div>

        <div className="mb-5">
          <h2 className="text-2xl font-semibold text-green-600 mb-2">Skills & Expertise</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Proficient in HTML, CSS, JavaScript, ReactJs, Redux,<br />NodeJs,MongoDb,ExpressJs,Python, Tailwind CSS,<br /> Material UI,Bootstrap,Git, GitHub, Appwrite,Firebase.</li>
            <li>Excellent problem-solving skills.</li>
            <li>Effective communicator and collaborator.</li>
          </ul>
        </div>

        <div className="mb-5">
          <h2 className="text-2xl font-semibold text-green-600 mb-2">Professional Experience</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">

            <li>ReactJs Developer Intern, CodSoft</li>
            <li>Front-End Developer Intern, CodSoft</li>
            <li>Subject Matter Expert, Chegg India Pvt. Ltd.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-green-600 mb-2">Mission Statement</h2>
          <p className="text-lg text-gray-700">
            My mission is to leverage my skills and creativity to deliver innovative web development solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

