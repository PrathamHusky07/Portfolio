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
        In my previous role at Standard Screws Pvt Ltd, I led a data-driven initiative resulting in a 5% reduction in annual losses, identified $8000 in potential savings, and enhanced client engagement by 20%.
        I optimized data architectures, conducted A/B testing on email marketing campaigns, and produced analytical insights using Tableau for informed decision-making. 
        As a Data Science Intern at Remark Skill Education, I developed a highly accurate Sign Language Recognition model, applied NLP methods for customer reviews, and contributed to a 15% increase in customer satisfaction.
        </p>
      </div>
    </div>
  );
};

export default About;


