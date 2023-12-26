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
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mr-8 md:mr-0">
          {/* Added margin-right for spacing on larger screens */}
          <h2 className="text-4xl sm:text-7xl font-bold text-white hover:text-cyan-500">
            Aspiring Data Scientist
          </h2>
          <p className="text-gray-500 py-4 max-w-md hover:text-cyan-500">
            Graduate student at Northeastern University, pursuing Master's in Information systems.
            Currently, I love to work on Generative AI applications using technologies like
            Python, SQL, Airflow, Docker, FastAPI.
          </p>

          <div className="text-gray-500 max-w-md hover:text-cyan-500">
            <p style={{ fontSize: '1.2em', color: '#00ffcc' }}>Email: prathamesh.kulkarni2398@gmail.com</p>
            <p style={{ fontSize: '1.2em', color: '#00ffcc' }}>Phone: +1 857-706-9440</p>
            </div>


          <div>
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

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-full md:w-2/3" // Adjust the width for both mobile and larger screens
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
