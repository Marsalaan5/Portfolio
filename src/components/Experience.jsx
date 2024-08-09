
import React from "react";
import reactjs from "../../public/reactjs.png";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";
import nodejs from "../../public/nodejs.png";
import mongodb from "../../public/mongodb.png"
import python from "../../public/python.jpeg"
import express from "../../public/express.png"

function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: reactjs,
      name: "ReactJs",
    },
    {
      id: 5,
      logo: nodejs,
      name: "NodeJs",
    },
    {
      id: 6,
      logo: mongodb,
      name: "MongoDb",
    },
    {
      id: 7,
      logo: python,
      name: "Python",
    },
    {
      id: 8,
      logo: express,
      name: "Express",
    },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Experience</h1>
        <p className="text-lg text-gray-600 mb-10">
          I'm currently working with the following technologies:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center border rounded-full shadow-lg p-6 bg-white hover:shadow-2xl transition-shadow duration-300"
            >
              <img src={logo} alt={`${name} Logo`} className="w-[80px] h-[80px] mb-4 rounded-full" />
              <h2 className="text-xl font-semibold">{name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
