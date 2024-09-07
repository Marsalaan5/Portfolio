import React from "react";
import blog from "../../public/blog.png"
import todo from "../../public/todo.png"
import bank from "../../public/bank.png";
import gym from "../../public/gym.png";
import search from "../../public/search.png";
import cart from "../../public/cart.png";


function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: blog,
      name: "Blog Website",
      description:"Dive into a world of ideas, creativity, and inspiration. Whether you're here to learn something new, explore fresh perspectives,you've come to the right place.",

      link:<a href="https://blog-7dirvctfs-mohammad-rashids-projects.vercel.app "target="_blank">Link</a>
    },
    {
      id: 2,
      logo: todo,
      name: "To-Do App",
      description:"Todo is a user-friendly task management tool designed to help you organize and prioritize your daily activities. It features an intuitive interface for adding, editing, and deleting tasks.",
      link:<a href="https://marsalaan5.github.io/TO-DO-App/" target="_blank">Link</a>
    },
    {
      id: 3,
      logo: bank,
      name: "Bankist App",
      description:"It's a modern, responsive web app designed to provide users with a seamless banking exp.This App allows users to manage their finances effortlessly.",
      link:<a href="https://marsalaan5.github.io/Bankist-App/" target="_blank">Link</a>
    },

    {
      id: 4,
      logo: search,
      name: "Image Search App",
      description:"This App is Powered by the latest Fetch API technology which allows you to effortlessly discover and retrieve a vast collection of images based on your search. ",
      link:<a href="https://marsalaan5.github.io/Image-Search-App/" target="_blank">Link</a>
    },

    {
      id: 5,
      logo: gym,
      name: "Gym",
      description:"This website is designed to elevate your fitness experience and provide a user-friendly interface for exploring our fitness programs and services.",
      link:<a href="https://marsalaan5.github.io/Landing-Page/" target="_blank">Link</a>
    },
    {
      id: 6,
      logo: cart,
      name: "E-commerce",
      description:"Explore a diverse range of products, from electronics to fashion and home essentials, with a user-friendly interface and intuitive design.",
      link:<a href="https://marsalaan5.github.io/E-commerce/" target="_blank">Link</a>
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({id, logo, name,description,link }) => (
            <div
              className=" md:w-[300px] md:h-[400px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <div className="flex items-center justify-center">
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px] "
                alt=""
              />
              </div>
              <div>
                <div className="px-2 font-bold  text-xl mb-2 flex items-center justify-center">{name}</div>
                <p className="px-2 text-gray-700">
                  {description}
                </p>
              </div>
              <div className=" px-6 py-12 space-x-3 justify-around flex items-center justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 w-[100px] rounded">
                {link}
                </button>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;


