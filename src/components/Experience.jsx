// import React from "react";

// const Experience = () => {
//   return (
//     <div
//       name="experience"
//       className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500 hover:text-cyan-500">
//             Experience
//           </p>
//         </div>

//         {/* Company 1: Standard Screws Pvt Ltd */}
//         <div className="mb-16 bg-gray-900 p-8 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
//           <p className="text-2xl font-bold text-blue-500">Standard Screws Pvt Ltd</p>
//           <p className="text-lg italic text-gray-500">Data Scientist | June 2021 - July 2022</p>
//           <p className="text-xl mt-4">
//             Led a data-driven initiative resulting in a 5% reduction in annual losses, identified $8000 in potential savings, and enhanced client engagement by 20%.
//             Optimized data architectures, conducted A/B testing on email marketing campaigns, and produced analytical insights using Tableau.
//           </p>
//         </div>

//         {/* Company 2: Remark Skill Education */}
//         <div className="bg-gray-900 p-8 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
//           <p className="text-2xl font-bold text-blue-500">Remark Skill Education</p>
//           <p className="text-lg italic text-gray-500">Data Science Intern | April 2021 - May 2021</p>
//           <p className="text-xl mt-4">
//             Developed a highly accurate Sign Language Recognition model, applied NLP methods for customer reviews, and contributed to a 15% increase in customer satisfaction.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;

import React from "react";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 hover:text-cyan-500 transition duration-300">
            Experience
          </p>
        </div>

        {/* Company 1: Standard Screws Pvt Ltd */}
        <div className="mb-16 bg-gray-900 p-8 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
          <p className="text-2xl font-bold text-blue-500 mb-2">Standard Screws Pvt Ltd</p>
          <p className="text-lg italic text-gray-500 mb-4">Data Scientist | June 2021 - July 2022</p>
          <p className="text-xl">
            Led a data-driven initiative resulting in a 5% reduction in annual losses, identified $8000 in potential savings, and enhanced client engagement by 20%. Optimized data architectures, conducted A/B testing on email marketing campaigns, and produced analytical insights using Tableau.
          </p>
        </div>

        {/* Company 2: Remark Skill Education */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
          <p className="text-2xl font-bold text-blue-500 mb-2">Remark Skill Education</p>
          <p className="text-lg italic text-gray-500 mb-4">Data Science Intern | April 2021 - May 2021</p>
          <p className="text-xl">
            Developed a highly accurate Sign Language Recognition model, applied NLP methods for customer reviews, and contributed to a 15% increase in customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;



