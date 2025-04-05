import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full text-center md:text-left md:mr-12">
          <h2 className="text-3xl sm:text-6xl font-bold text-white hover:text-cyan-500 leading-none">
            Aspiring Data Engineer
          </h2>
          <p className="text-gray-500 py-4 max-w-md hover:text-cyan-500">
          Data Scientist with a Master’s in Information Systems from Northeastern University. I enjoy building Generative AI and analytics applications 
          using Python, SQL, Airflow, Docker, FastAPI, and cloud platforms like AWS and GCP.
          </p>
          <div className="text-gray-500 max-w-md hover:text-cyan-500">
            <p style={{ fontSize: '1.2em', color: '#00ffcc' }}>Email: prathamesh.kulkarni2398@gmail.com</p>
            <p style={{ fontSize: '1.2em', color: '#00ffcc' }}>Phone: +1 857-706-9440</p>
          </div>
          <div className="mt-4">
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="flex-1 md:ml-12">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto md:mx-0 w-full md:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
