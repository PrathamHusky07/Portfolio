import React from "react";
import openaichatbot from "../assets/portfolio/work5.jpg";
import hotel from "../assets/portfolio/work4.jpg";
import datascience from "../assets/portfolio/work2.jpg";
import snowpark from "../assets/portfolio/work6.jpg";
import travel from "../assets/portfolio/work1.jpg";
import restaurant from "../assets/portfolio/work3.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: openaichatbot,
      github: "https://github.com/PrathamHusky07/OpenAI_Chatbot",
    },
    {
      id: 2,
      src: snowpark,
      github: "https://github.com/PrathamHusky07/SnowSQL-Streamline",
    },
    {
      id: 3,
      src: hotel,
      github: "https://github.com/PrathamHusky07/TheStayNetwork",
    },
    {
      id: 4,
      src: datascience,
      github: "https://github.com/PrathamHusky07/Data-Science-and-Data-Engineering-Job-Roles",
    },
    {
      id: 5,
      src: travel,
      github: "https://github.com/PrathamHusky07/Travel_Website",
    },
    {
      id: 6,
      src: restaurant,
      github: "https://github.com/PrathamHusky07/Restaurant_E-Commerce_Website",
    },
  ];

  const handleCodeButtonClick = (githubLink) => {
    window.open(githubLink, "_blank");
  };

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 hover:text-cyan-500">
            Portfolio
          </p>
          <p className="py-6">Check out my projects right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, github }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => handleCodeButtonClick(github)}
                >
                  CODE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;


