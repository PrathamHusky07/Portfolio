import React from "react";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-24"
    >
      <div className="max-w-screen-lg mx-auto px-4 md:px-8 py-12">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 hover:text-cyan-500">
            Experience
          </p>
        </div>

        {/* Each company experience block */}
        <div className="space-y-16">
          {/* Company 1: Mimecast */}
          <div className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg transition duration-300 hover:scale-105">
            <p className="text-2xl font-bold text-blue-500 mb-2">Mimecast</p>
            <p className="text-lg italic text-gray-500 mb-4">Financial Analyst | January 2024 - June 2024</p>
            <p className="text-xl">
              Led a cloud-based financial data analysis architecture using SQL, Airflow, & Redshift, 
              integrating ETL/ELT pipelines that improved data accuracy by 20% enhancing financial modeling precision for stakeholders
            </p>
          </div>

          {/* Company 2: Standard Screws Pvt Ltd */}
          <div className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg transition duration-300 hover:scale-105">
            <p className="text-2xl font-bold text-blue-500 mb-2">Standard Screws Pvt Ltd</p>
            <p className="text-lg italic text-gray-500 mb-4">Data Scientist | July 2020 - August 2022</p>
            <p className="text-xl">
              Spearheaded a quantitative analytics project using Python reducing annual losses by 5%, by analysis of underperforming entities, 
              metrics & KPIs, providing strategic recommendations & identifying $25,000 in cost savings.
            </p>
          </div>

          {/* Company 3: Remark Skill Education */}
          <div className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg transition duration-300 hover:scale-105">
            <p className="text-2xl font-bold text-blue-500 mb-2">Remark Skill Education</p>
            <p className="text-lg italic text-gray-500 mb-4">Data Science Intern | January 2020 - June 2020</p>
            <p className="text-xl">
              Designed a Sign Language Recognition predictive model utilizing TensorFlow & Keras, integrating Image Processing & 
              Convolutional Neural Network which achieved a 10% increase in educational platforms accuracy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
