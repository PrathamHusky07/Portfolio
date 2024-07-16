import React from "react";
import openaichatbot from "../assets/portfolio/work5.jpg";
import datascience from "../assets/portfolio/work2.jpg";
import snowpark from "../assets/portfolio/work6.jpg";
import languagemodel from "../assets/portfolio/work7.jpg";
import caption from "../assets/portfolio/work3.jpg";
import stay from "../assets/portfolio/work4.jpg";
import pdfeval from "../assets/portfolio/work8.jpg";
import boston from "../assets/portfolio/work9.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Career Crafter",
      description: "A user-centric solution for job-related information retrieval and interaction.",
      src: languagemodel,
      github: "https://github.com/PrathamHusky07/CareerCrafter",
      technologies: ["Airflow", "Docker", "AWS", "Fast API"]
    },
    {
      id: 2,
      title: "Snowpark ML",
      description: "A streamlined approach to integrating ML models with Snowflake using Snowpark.",
      src: snowpark,
      github: "https://github.com/PrathamHusky07/SnowSQL-Streamline",
      technologies: ["Python", "Snowflake", "ML", "GCP"]
    },
    {
      id: 3,
      title: "OpenAI Chatbot",
      description: "Leveraging OpenAI to explore Vector databases for Embedding search.",
      src: openaichatbot,
      github: "https://github.com/PrathamHusky07/OpenAI_Chatbot",
      technologies: ["Python", "OpenAI", "Postgres", "Streamlit"]
    },
    {
      id: 4,
      title: "Image Captioning",
      description: "Employing deep learning to automatically generate captions for images.",
      src: caption,
      github: "https://github.com/PrathamHusky07/ImageCaptionGenerator",
      technologies: ["TensorFlow", "Keras", "Deep Learning"]
    },
    {
      id: 5,
      title: "Job Roles Analysis",
      description: "Dynamic Analysis of various data science roles and their market trends.",
      src: datascience,
      github: "https://github.com/PrathamHusky07/Data-Science-and-Data-Engineering-Job-Roles",
      technologies: ["Pandas", "Sci-Kit", "MySQL", "Plotly"]
    },
    {
      id: 6,
      title: "Boston Data Insights",
      description: "Dynamic Analysis of various data science roles and their market trends.",
      src: boston,
      github: "https://github.com/PrathamHusky07/BostonDataPrediction",
      technologies: ["Pandas", "Sci-Kit", "MySQL", "Plotly"]
    },
    {
      id: 7,
      title: "PDF Evaluator",
      description: "Dynamic Analysis of various data science roles and their market trends.",
      src: pdfeval,
      github: "https://github.com/PrathamHusky07/Great-Expectations-PDF-Evaluator",
      technologies: ["Pandas", "GCP", "PyPDF", "Nougat"]
    },
    {
      id: 8,
      title: "The Stay Network",
      description: "Connecting hotels through a centralized online booking system.",
      src: stay,
      github: "https://github.com/PrathamHusky07/TheStayNetwork",
      technologies: ["JavaScript", "React", "MongoDB", "JSON"]
    },
  ];

  const handleCodeButtonClick = (githubLink) => {
    window.open(githubLink, "_blank");
  };

  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-10 ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8 pt-20">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 hover:text-cyan-500">Portfolio</p>
          <p className="py-6">Check out my projects right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
          {portfolios.map(({ id, title, description, src, github, technologies }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg flex flex-col" style={{ height: "100%" }}>
              <img src={src} alt={title} className="rounded-md hover:scale-105 duration-200 object-cover w-full h-48" />
              <div className="p-4 flex flex-col flex-grow">
                <p className="text-lg font-semibold text-center truncate">{title}</p>
                <p className="text-sm text-center flex-grow">{description}</p>
                <div className="flex-grow flex flex-col justify-end">
                  <div className="text-sm py-2 flex flex-wrap justify-center items-end" style={{ minHeight: "70px" }}>
                    {technologies.map(tech => (
                      <span key={tech} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-red-400 hover:text-white">{tech}</span>
                    ))}
                  </div>
                  <button onClick={() => handleCodeButtonClick(github)} className="w-full px-6 py-3 mt-4 duration-200 hover:scale-105 bg-blue-500 text-white rounded-lg">View Code</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
