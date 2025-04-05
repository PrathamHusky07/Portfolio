import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 hover:text-cyan-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Curious, hands-on, and driven by impact, I’m a Data Scientist with a passion for building intelligent systems that connect raw data to real-world outcomes. 
        With a Master’s in Information Systems and a strong foundation in cloud-data architecture, I love working at the intersection of analytics, 
        automation, and AI to solve meaningful problems. I’m especially drawn to systems that bridge software engineering with data modeling, 
        turning pipelines, APIs, and machine learning into business-ready solutions.
        </p>

        <br />

        <p className="text-xl">
        My technical toolkit includes Python, SQL, Airflow, Docker, Spark, and FastAPI, along with experience deploying applications on AWS and GCP. 
        I’ve worked on a wide range of projects — from voice transcript analysis using generative AI and NLP to real-time campaign optimization and customer segmentation. 
        What excites me most is collaborating across teams, experimenting with emerging technologies like RAG and LLMOps, and pushing the boundaries of what applied data science 
        can deliver in real-world settings.
        </p>
      </div>
    </div>
  );
};

export default About;


