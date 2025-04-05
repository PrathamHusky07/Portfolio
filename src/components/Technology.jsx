import React from "react";

import snowflake from "../assets/snowflake.png";
import postgres from "../assets/postgres.png";
import tableau from "../assets/tableau.png";
import gcp from "../assets/gcp.png";
import python from "../assets/python.png";
import sql from "../assets/sql.png";
import airflow from "../assets/airflow.png";
import docker from "../assets/docker.png";
import pandas from "../assets/pandas.png";
import tensorflow from "../assets/tf.png";
import pytorch from "../assets/pytorch.png";
import aws from "../assets/aws.png";

const Experience = () => {
  const techs = [
    { id: 1, src: python, title: "Python", style: "shadow-pink-400" },
    { id: 2, src: sql, title: "SQL", style: "shadow-orange-600" },
    { id: 3, src: aws, title: "AWS", style: "shadow-blue-600" },
    { id: 4, src: gcp, title: "GCP", style: "shadow-yellow-500" },
    { id: 5, src: airflow, title: "Airflow", style: "shadow-pink-400" },
    { id: 6, src: docker, title: "Docker", style: "shadow-orange-600" },
    { id: 7, src: pandas, title: "Pandas", style: "shadow-blue-600" },
    { id: 8, src: tensorflow, title: "Tensorflow", style: "shadow-yellow-500" },
    { id: 9, src: pytorch, title: "PyTorch", style: "shadow-pink-400" },
    { id: 10, src: snowflake, title: "Snowflake", style: "shadow-orange-500" },
    { id: 11, src: postgres, title: "Postgres", style: "shadow-blue-500" },
    { id: 12, src: tableau, title: "Tableau", style: "shadow-yellow-500" },
  ];

  return (
    <div name="tech" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline hover:text-cyan-500">
          Technology Stack
          </p>
          <p className="py-6">Tools & technologies that I've worked with</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8 text-center py-8 px-13 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} flex flex-col items-center`}>
              <img src={src} alt={title} className="w-20 h-20 mx-auto" /> {/* Set consistent width and height */}
              <p className="mt-4 mb-2 text-sm min-h-[40px]">{title}</p> {/* Set minimum height for text */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
