import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import python from "../assets/python.png";
import sql from "../assets/sql.png"
import c from "../assets/c.png"
import airflow from "../assets/airflow.png"
import docker from "../assets/docker.png"
import pandas from "../assets/pandas.png"
import tensorflow from "../assets/tf.png"
import pytorch from "../assets/pytorch.png"

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: python,
      title: "Python",
      style: "shadow-pink-400",
    },
    {
      id: 2,
      src: sql,
      title: "SQL",
      style: "shadow-orange-600",
    },
    {
      id: 3,
      src: c,
      title: "C",
      style: "shadow-blue-600",
    },
  
    {
      id: 4,
      src: airflow,
      title: "Airflow",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: docker,
      title: "Docker",
      style: "shadow-pink-600",
    },    
    {
      id: 6,
      src: pandas,
      title: "Pandas",
      style: "shadow-orange-500",
    },   
    {
      id: 7,
      src: tensorflow,
      title: "Tensorflow",
      style: "shadow-blue-600",
    },   

    {
      id: 8,
      src: pytorch,
      title: "PyTorch",
      style: "shadow-yellow-500",
    },   

    {
      id: 9,
      src: reactImage,
      title: "React",
      style: "shadow-pink-600",
    },

    {
      id: 10,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 11,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },

    {
      id: 12,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
   
   



  

  ];
  return (
    <div
      name="tech"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline hover:text-cyan-500">
            Technology Stack
          </p>
          <p className="py-6">Tools & technologies that I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-13 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
