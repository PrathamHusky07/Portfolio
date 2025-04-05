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
          {/* Company 1: Gannett */}
          <div className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg transition duration-300 hover:scale-105">
            <p className="text-2xl font-bold text-blue-500 mb-2">Gannett | USA Today Network</p>
            <p className="text-lg italic text-gray-500 mb-4">Data Scientist | February 2025 - Ongoing</p>
            <p className="text-xl">
            Designed and deployed a generative AI solution using Gemini, BigQuery & Vertex AI to analyze 100K+ transcripts, 
            cutting complaint resolution time by 45% and vague agent replies by 38%
            </p>
          </div>
          
          {/* Company 2: Mimecast */}
          <div className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg transition duration-300 hover:scale-105">
            <p className="text-2xl font-bold text-blue-500 mb-2">Mimecast</p>
            <p className="text-lg italic text-gray-500 mb-4">Financial Data Analyst | January 2024 - June 2024</p>
            <p className="text-xl">
            Built an AWS Redshift-based architecture with ETL/ELT DAGs, improving data accuracy by 20% 
            and enabling ~$1.5M in annual cost savings
            </p>
          </div>

          {/* Company 3: Standard Screws Pvt Ltd */}
          <div className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg transition duration-300 hover:scale-105">
            <p className="text-2xl font-bold text-blue-500 mb-2">Standard Screws Pvt Ltd</p>
            <p className="text-lg italic text-gray-500 mb-4">Data Scientist | July 2020 - August 2022</p>
            <p className="text-xl">
            Architected a Data Lake using AWS Glue & S3, leveraging EC2 Spot Instances to reduce infra costs by $20K 
            while improving large-scale data parsing efficiency
            </p>
          </div>

          {/* Company 4: Remark Skill Education */}
          <div className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg transition duration-300 hover:scale-105">
            <p className="text-2xl font-bold text-blue-500 mb-2">Remark Skill Education</p>
            <p className="text-lg italic text-gray-500 mb-4">Data Science Intern | January 2020 - June 2020</p>
            <p className="text-xl">
            Built a customer recommendation engine with statistical modeling & NLP using PySpark and sentiment analysis, 
            increasing repeat visits by 25% and product quality by 15%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
