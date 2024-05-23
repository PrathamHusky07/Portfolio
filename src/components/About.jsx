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
        Passionate and results-driven Data Scientist with a robust skill set encompassing programming languages such as Python, SQL, C, Java, and Javascript. 
        Proven expertise in frameworks and libraries including Airflow, Docker, Pandas, Scikit, Matplotlib, OpenCV, Keras, TensorFlow, Pytorch, and PySpark. 
        Well-versed in machine learning techniques such as NLP, Neural Networks, Regression, Decision Trees, SVM, Clustering, KNN, and PCA. 
        Extensive experience in cloud technologies, with proficiency in AWS, GCP, Apache Spark, S3, Data Lake, EC2, Lambda, and Athena.
        </p>

        <br />

        <p className="text-xl">
        In previous roles, I've spearheaded innovative initiatives using Vertex AI API, DBT, and Snowflake to drive significant improvements in data transformation and financial modeling precision. 
        I've developed Python scripting solutions for automation, optimized data architectures, and engineered ETL/ELT pipelines that enhanced data accuracy by 20%.
        My work has streamlined global data visualizations, created automated dashboards, and led to substantial cost reductions and operational efficiencies.
        As a Data Scientist, I've applied machine learning models for predictive analytics, conducted A/B testing for strategic insights, and implemented advanced analytics using tools like Tableau.
        </p>
      </div>
    </div>
  );
};

export default About;


