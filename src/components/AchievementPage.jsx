import React, { useState } from "react";
import { FaMedal } from "react-icons/fa";

const achievements = [
  {
    title: "Hackerrank 5-Star in Problem Solving",
    description: "Awarded for consistent performance in algorithmic challenges.",
    date: "March 2025",
    certificate: "/hackerank123.png",
  },
  {
    title: "Google-Intoduction to AI",
    description: "Completed Google Cloud Foundations and Machine Learning certifications.",
    date: "January 2025",
    certificate: "/google.jpeg",
  },
  {
    title: "Power BI",
    description: "Completed full Power BI course from the Office Master",
    date: "July 2025",
    certificate: "/office-master.jpeg",
  },
  {
    title: "Rank",
    description: "Got second in the university examination at the collage level",
    date: "October 2024",
    certificate: "/rank.jpg",
  },
  {
    title: "HackerRank - Python",
    description: "Earned the Python certification on HakerRank.",
    date: "September 2024",
    certificate: "/hackerank-python.jpeg",
  },
];

const AchievementsPage = React.forwardRef((props, ref) => {
  const [activeAchievement, setActiveAchievement] = useState(null);

  return (
    <div
      ref={ref}
      className="w-screen min-h-screen bg-[#fffdef] text-black flex flex-col justify-start px-4 sm:px-6 md:px-20 py-8 sm:py-10 md:py-12 font-serif border-l-[4px] border-r-[4px] border-[#702283] overflow-y-auto"
    >
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#702283] mb-4 text-left">
        Achievements
      </h2>

      {/* Subtitle */}
      <p className="text-sm sm:text-base text-[#3a3a3a] mb-10 sm:mb-12 max-w-2xl text-left">
        These are some milestones and recognitions I have earned throughout my academic and project journey.
      </p>

      {/* Cards Grid - Responsive */}
      <div className="flex flex-wrap justify-center gap-6">
        {achievements.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveAchievement(item)}
            className="relative w-[85%] sm:w-[200px] h-[260px] scale-[0.92] hover:scale-[0.96] transition-transform origin-top rounded-3xl bg-gradient-to-br from-[#f3c4fb] via-[#ddbdfc] to-[#c8b6ff] shadow-xl hover:shadow-2xl p-4 cursor-pointer"
          >
            {/* Medal Badge */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl shadow-md bg-[#4a2377]">
                <FaMedal />
              </div>
            </div>

            <div className="h-6" />

            {/* Text */}
            <h3 className="text-xl font-semibold mt-6 text-[#4a2377] text-center">
              {item.title}
            </h3>
            <p className="text-xs mt-2 text-center">{item.description}</p>
            <p className="text-[10px] mt-3 text-[#5a3c80] text-center italic">
              {item.date}
            </p>
          </div>
        ))}
      </div>

      {/* Certificate Modal */}
      {activeAchievement && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4 py-8 overflow-y-auto">
          <div className="bg-white rounded-lg p-6 max-w-3xl w-full shadow-xl relative flex flex-col items-center">
            {/* Top Fixed Close Button */}
            <button
              className="fixed top-6 left-1/2 -translate-x-1/2 bg-white border border-gray-300 px-4 py-1 rounded-full shadow-md text-sm font-semibold text-gray-600 hover:text-red-600 transition"
              onClick={() => setActiveAchievement(null)}
              title="Click to close"
            >
              Close
            </button>

            {/* Heading */}
            <h3 className="text-xl font-semibold text-center text-[#4a2377] mb-2 mt-6">
              {activeAchievement.title}
            </h3>
            <p className="text-sm text-gray-800 text-center mb-4">
              {activeAchievement.description}
            </p>

            {/* Certificate Image */}
            <img
              src={activeAchievement.certificate}
              alt="Certificate"
              className="w-full max-h-[60vh] rounded-md shadow-md object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
});

export default AchievementsPage;

// import React, { useState } from "react";
// import { FaMedal } from "react-icons/fa";

// const achievements = [
//   {
//     title: "Hackerrank 5-Star in Problem Solving",
//     description: "Awarded for consistent performance in algorithmic challenges.",
//     date: "March 2025",
//     certificate: "/hackerrank-star.jpeg",
//   },
//   {
//     title: "Google-Intoduction to AI",
//     description: "Completed Google Cloud Foundations and Machine Learning certifications.",
//     date: "January 2025",
//     certificate: "/google.jpeg",
//   },
//   {
//     title: "Power BI",
//     description: "Completed full Power BI course from the Office Master",
//     date: "July 2025",
//     certificate: "/office-master.jpeg",
//   },
//   {
//     title: "Rank",
//     description: "Got second in the university examination at the collage level",
//     date: "October 2024",
//     certificate: "/rank.jpg",
//   },
//   {
//     title: "HackerRank - Python",
//     description: "Earned the Python certification on HakerRank.",
//     date: "September 2024",
//     certificate: "/hackerank-python.jpeg",
//   },
// ];

// const AchievementsPage = React.forwardRef((props, ref) => {
//   const [activeAchievement, setActiveAchievement] = useState(null);

//   return (
//     <div
//       ref={ref}
//       className="w-screen min-h-screen bg-[#fffdef] text-black flex flex-col justify-center px-10 md:px-20 py-12 font-serif border-l-[4px] border-r-[4px] border-[#702283]"
//     >
//       {/* Title */}
//       <h2 className="text-4xl font-extrabold text-[#702283] mb-4 text-left">
//         Achievements
//       </h2>

//       {/* Subtitle */}
//       <p className="text-base text-[#3a3a3a] mb-12 max-w-2xl text-left">
//         These are some milestones and recognitions I have earned throughout my academic and project journey.
//       </p>

//       {/* Cards Grid */}
//       <div className="flex flex-wrap justify-center gap-6">
//         {achievements.map((item, index) => (
//           <div
//             key={index}
//             onMouseEnter={() => setActiveAchievement(item)}
//             className="relative w-[200px] h-[260px] scale-[0.92] hover:scale-[0.96] transition-transform origin-top rounded-3xl bg-gradient-to-br from-[#f3c4fb] via-[#ddbdfc] to-[#c8b6ff] shadow-xl hover:shadow-2xl p-4 cursor-pointer"
//           >
//             {/* Medal Badge */}
//             <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
//               <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl shadow-md bg-[#4a2377]">
//                 <FaMedal />
//               </div>
//             </div>

//             <div className="h-6"></div>

//             {/* Text */}
//             <h3 className="text-xl font-semibold mt-6 text-[#4a2377] text-center">
//               {item.title}
//             </h3>
//             <p className="text-xs mt-2 text-center">{item.description}</p>
//             <p className="text-[10px] mt-3 text-[#5a3c80] text-center italic">
//               {item.date}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Certificate Modal */}
//       {activeAchievement && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4">
//           <div className="bg-white rounded-lg p-6 max-w-3xl w-full shadow-xl relative flex flex-col items-center">
//             {/* Top Fixed Close Button */}
//             <button
//               className="fixed top-6 left-1/2 -translate-x-1/2 bg-white border border-gray-300 px-4 py-1 rounded-full shadow-md text-sm font-semibold text-gray-600 hover:text-red-600 transition"
//               onClick={() => setActiveAchievement(null)}
//               title="Click to close"
//             >
//               Close
//             </button>

//             {/* Heading */}
//             <h3 className="text-xl font-semibold text-center text-[#4a2377] mb-2 mt-4">
//               {activeAchievement.title}
//             </h3>
//             <p className="text-sm text-gray-800 text-center mb-4">
//               {activeAchievement.description}
//             </p>

//             {/* Certificate Image */}
//             <img
//               src={activeAchievement.certificate}
//               alt="Certificate"
//               className="max-w-full max-h-[60vh] mx-auto rounded-md shadow-md object-contain"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// });

// export default AchievementsPage;






// import React, { useState } from "react";
// import { FaMedal } from "react-icons/fa";
// import { IoClose } from "react-icons/io5";

// const achievements = [
//   {
//     title: "Hackerrank 5-Star in Problem Solving",
//     description: "Awarded for consistent performance in algorithmic challenges.",
//     date: "March 2025",
//     certificate: "/hackerrank star.jpeg",
//   },
//   {
//     title: "Google-Intoduction to AI",
//     description: "Completed Google Cloud Foundations and Machine Learning certifications.",
//     date: "January 2025",
//     certificate: "/google.jpeg",
//   },
//   {
//     title: "Power BI",
//     description: "Completed full Power BI course from the Office Master",
//     date: "July 2025",
//     certificate: "/office master.jpeg",
//   },
//   {
//     title: "Rank",
//     description: "Got second in the university examination at the collage level",
//     date: "October 2024",
//     certificate: "/certificates/azure.png",
//   },
//   {
//     title: "HackerRank - Python",
//     description: "Earned the Python certification on HakerRank.",
//     date: "September 2024",
//     certificate: "/hakcerank.jpeg",
//   },
// ];

// const AchievementsPage = React.forwardRef((props, ref) => {
//   const [selectedCertificate, setSelectedCertificate] = useState(null);

//   return (
//     <div
//       ref={ref}
//       className="w-screen min-h-screen bg-[#fffdef] text-black flex flex-col justify-center px-10 md:px-20 py-12 font-serif border-l-[4px] border-r-[4px] border-[#702283]"
//     >
//       {/* Title */}
//       <h2 className="text-4xl font-extrabold text-[#702283] mb-4 text-left">
//         Achievements
//       </h2>

//       {/* Subtitle */}
//       <p className="text-base text-[#3a3a3a] mb-12 max-w-2xl text-left">
//         These are some milestones and recognitions I have earned throughout my academic and project journey.
//       </p>

//       {/* Cards Grid */}
//       <div className="flex flex-wrap justify-center gap-6">
//         {achievements.map((item, index) => (
//           <div
//             key={index}
//             onClick={() => setSelectedCertificate(item.certificate)}
//             className="relative w-[200px] h-[260px] scale-[0.92] hover:scale-[0.96] transition-transform origin-top rounded-3xl bg-gradient-to-br from-[#f3c4fb] via-[#ddbdfc] to-[#c8b6ff] shadow-xl hover:shadow-2xl p-4 cursor-pointer"
//           >
//             {/* Medal Badge */}
//             <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 group z-10">
//               <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl shadow-md bg-[#4a2377]">
//                 <FaMedal />
//               </div>
//             </div>

//             {/* Spacer */}
//             <div className="h-6"></div>

//             {/* Text */}
//             <h3 className="text-xl font-semibold mt-6 text-[#4a2377] text-center">
//               {item.title}
//             </h3>
//             <p className="text-xs mt-2 text-center">{item.description}</p>
//             <p className="text-[10px] mt-3 text-[#5a3c80] text-center italic">
//               {item.date}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Certificate Overlay */}
//       {selectedCertificate && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
//           <div className="relative w-[90%] max-w-[500px] bg-white rounded-lg p-4 shadow-2xl">
//             {/* Close Button */}
//             <button
//               onClick={() => setSelectedCertificate(null)}
//               className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#702283] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md"
//             >
//               <IoClose className="text-2xl" />
//             </button>
//             <img
//               src={selectedCertificate}
//               alt="Certificate"
//               className="w-full h-full object-contain rounded-md"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// });

// export default AchievementsPage;

// // src/components/AchievementsPage.jsx
// import React, { useState } from "react";
// import { FaMedal } from "react-icons/fa";

// const achievements = [
//   {
//     title: "Hackerrank 5-Star in Problem Solving",
//     description: "Awarded for consistent performance in algorithmic challenges.",
//     date: "March 2025",
//     certificate: "/hackerrank star.jpeg",
//   },
//   {
//     title: "Google-Intoduction to Articicial Intelligence",
//     description: "Completed Google Cloud Foundations and Machine Learning certifications.",
//     date: "January 2025",
//     certificate: "/google.jpeg",
//   },
//   {
//     title: "Power BI",
//     description: "Completed full Power BI course from the Office Master",
//     date: "July 2025",
//     certificate: "/office master.jpeg",
//   },
//   {
//     title: "Rank",
//     description: "Got second in the university examination at the collage level",
//     date: "October 2024",
//     certificate: "/certificates/azure.png",
//   },
//   {
//     title: "HackerRank - Python",
//     description: "Earned the Python certification on HakerRank.",
//     date: "September 2024",
//     certificate: "/hakcerank.jpeg",
//   },
// ];

// const AchievementsPage = React.forwardRef((props, ref) => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div
//       ref={ref}
//       className="w-screen h-screen bg-[#fffdef] text-black flex flex-col justify-center px-10 md:px-20 py-12 font-serif border-l-[4px] border-r-[4px] border-[#702283]"
//     >
//       {/* Title */}
//       <h2 className="text-4xl font-extrabold text-[#702283] mb-4 text-left">
//         Achievements
//       </h2>

//       {/* Subtitle */}
//       <p className="text-base text-[#3a3a3a] mb-12 max-w-2xl text-left">
//         These are some milestones and recognitions I have earned throughout my academic and project journey.
//       </p>

//       {/* Cards Grid */}
//       <div className="flex flex-wrap justify-center gap-6">
//         {achievements.map((item, index) => (
//           <div
//             key={index}
//             className="relative w-[200px] h-[260px] scale-[0.92] hover:scale-[0.96] transition-transform origin-top rounded-3xl bg-gradient-to-br from-[#f3c4fb] via-[#ddbdfc] to-[#c8b6ff] shadow-xl hover:shadow-2xl p-4"
//           >
//             {/* Medal Badge */}
//             <div
//               className="absolute -top-6 left-1/2 transform -translate-x-1/2 group z-10"
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl shadow-md bg-[#4a2377]">
//                 <FaMedal />
//               </div>

//               {/* Certificate Popup */}
//               {hoveredIndex === index && (
//                 <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-44 h-56 border border-gray-300 shadow-xl rounded-md p-2 z-50">
//                   <img
//                     src={item.certificate}
//                     alt="Certificate"
//                     className="w-full h-full object-contain rounded"
//                   />
//                 </div>
//               )}
//             </div>

//             {/* Spacer */}
//             <div className="h-6"></div>

//             {/* Text */}
//             <h3 className="text-xl font-semibold mt-6 text-[#4a2377] text-center">
//               {item.title}
//             </h3>
//             <p className="text-xs mt-2 text-center">{item.description}</p>
//             <p className="text-[10px] mt-3 text-[#5a3c80] text-center italic">
//               {item.date}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// });

// export default AchievementsPage;

// // src/components/AchievementsPage.jsx
// import React, { useState } from "react";
// import { FaMedal } from "react-icons/fa";

// const achievements = [
//   {
//     title: "Hackerrank 5-Star in Problem Solving",
//     description: "Awarded for consistent performance in algorithmic challenges.",
//     date: "March 2025",
//     certificate: "/certificates/hackerrank.png",
//   },
//   {
//     title: "Google Cloud Certified",
//     description: "Completed Google Cloud Foundations and Machine Learning certifications.",
//     date: "January 2025",
//     certificate: "/certificates/google.png",
//   },
//   {
//     title: "Top Rank in TechSprint 2024",
//     description: "Ranked among the top 5% nationally in coding competition.",
//     date: "November 2024",
//     certificate: "/certificates/techsprint.png",
//   },
//   {
//     title: "Microsoft Azure Fundamentals",
//     description: "Certified in Microsoft Azure Fundamentals for cloud technologies.",
//     date: "October 2024",
//     certificate: "/certificates/azure.png",
//   },
//   {
//     title: "LinkedIn Skill Assessment Badge",
//     description: "Earned top percentile badge for HTML and JavaScript assessments.",
//     date: "September 2024",
//     certificate: "/certificates/linkedin.png",
//   },
// ];

// const AchievementsPage = React.forwardRef((props, ref) => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div
//       ref={ref}
//       className="page bg-[#fffdef] text-[#1c1c1c] py-12 px-10 md:px-20 font-serif border-l border-l-[4px] border-[#702283]"
    
//     >
//       {/* Title */}
//       <h2 className="text-4xl font-extrabold text-[#702283] mb-4 text-left">
//         Achievements
//       </h2>


//       {/* Subtitle */}
//       <p className="text-base text-[#3a3a3a] mb-12 max-w-2xl text-left">
//         These are some milestones and recognitions I have earned throughout my academic and project journey.
//       </p>


//       {/* Cards Grid */}
//       <div className="flex flex-wrap justify-center gap-6">
//         {achievements.map((item, index) => (
//           <div
//             key={index}
//             className="relative w-[200px] h-[260px] scale-[0.92] hover:scale-[0.96] transition-transform origin-top rounded-3xl bg-gradient-to-br from-[#f3c4fb] via-[#ddbdfc] to-[#c8b6ff] shadow-xl hover:shadow-2xl p-4"
//           >
//             {/* Medal Badge */}
//             <div
//               className="absolute -top-6 left-1/2 transform -translate-x-1/2 group z-10"
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl shadow-md bg-[#4a2377]">
//                 <FaMedal />
//               </div>

//               {/* Certificate Popup */}
//               {hoveredIndex === index && (
//                 <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-44 h-56 bg-white border border-gray-300 shadow-xl rounded-md p-2 z-50">
//                   <img
//                     src={item.certificate}
//                     alt="Certificate"
//                     className="w-full h-full object-contain rounded"
//                   />
//                 </div>
//               )}
//             </div>

//             {/* Spacer */}
//             <div className="h-6"></div>

//             {/* Text */}
//             <h3 className="text-xl font-semibold mt-6 text-[#4a2377] text-center">
//               {item.title}
//             </h3>
//             <p className="text-xs mt-2 text-center">{item.description}</p>
//             <p className="text-[10px] mt-3 text-[#5a3c80] text-center italic">
//               {item.date}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// });

// export default AchievementsPage;

// // src/components/AchievementsPage.jsx
// import React, { useState } from "react";
// import { FaMedal } from "react-icons/fa";

// const achievements = [
//   {
//     title: "Hackerrank 5-Star in Problem Solving",
//     description: "Awarded for consistent performance in algorithmic challenges.",
//     date: "March 2025",
//     certificate: "/certificates/hackerrank.png",
//   },
//   {
//     title: "Google Cloud Certified",
//     description: "Completed Google Cloud Foundations and Machine Learning certifications.",
//     date: "January 2025",
//     certificate: "/certificates/google.png",
//   },
//   {
//     title: "Top Rank in TechSprint 2024",
//     description: "Ranked among the top 5% nationally in coding competition.",
//     date: "November 2024",
//     certificate: "/certificates/techsprint.png",
//   },
//   {
//     title: "Microsoft Azure Fundamentals",
//     description: "Certified in Microsoft Azure Fundamentals for cloud technologies.",
//     date: "October 2024",
//     certificate: "/certificates/azure.png",
//   },
//   {
//     title: "LinkedIn Skill Assessment Badge",
//     description: "Earned top percentile badge for HTML and JavaScript assessments.",
//     date: "September 2024",
//     certificate: "/certificates/linkedin.png",
//   },
// ];

// const AchievementsPage = React.forwardRef((props, ref) => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div
//       ref={ref}
//       className="page bg-[#fefaf5] text-[#1c1c1c] py-12 px-10 md:px-20 font-serif">

//       {/* Title */}
//       <h2 className="text-4xl font-extrabold text-[#702283] mb-4 text-center">
//         Achievements
//       </h2>

//       {/* Subtitle */}
//       <p className="text-base text-[#3a3a3a] mb-12 max-w-2xl mx-auto text-center">
//         These are some milestones and recognitions I have earned throughout my academic and project journey.
//       </p>

//       {/* Cards Grid */}
//       <div className="flex flex-wrap justify-center gap-6">
//         {achievements.map((item, index) => (
//           <div
//             key={index}
//             className="relative w-[200px] h-[260px] scale-[0.92] hover:scale-[0.96] transition-transform origin-top rounded-3xl bg-gradient-to-br from-[#f3c4fb] via-[#ddbdfc] to-[#c8b6ff] shadow-xl hover:shadow-2xl p-4"
//           >
//             {/* Medal Badge */}
//             <div
//               className="absolute -top-6 left-1/2 transform -translate-x-1/2 group z-10"
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl shadow-md bg-[#4a2377]">
//                 <FaMedal />
//               </div>

//               {/* Certificate Popup */}
//               {hoveredIndex === index && (
//                 <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-44 h-56 bg-white border border-gray-300 shadow-xl rounded-md p-2 z-50">
//                   <img
//                     src={item.certificate}
//                     alt="Certificate"
//                     className="w-full h-full object-contain rounded"
//                   />
//                 </div>
//               )}
//             </div>

//             {/* Content Spacer */}
//             <div className="h-6"></div>

//             {/* Text Content */}
//             <h3 className="text-xl font-semibold mt-6 text-[#4a2377] text-center">
//               {item.title}
//             </h3>
//             <p className="text-xs mt-2 text-center">{item.description}</p>
//             <p className="text-[10px] mt-3 text-[#5a3c80] text-center italic">
//               {item.date}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// });

// export default AchievementsPage;

// // src/components/AchievementsPage.jsx
// import React from "react";
// import { FaMedal } from "react-icons/fa";

// const achievements = [
//   {
//     title: "Hackerrank 4-Star in Problem Solving",
//     description: "Awarded for consistent performance in algorithmic challenges.",
//     date: "March 2025",
//     color: "#FFD700", // Gold
//   },
//   {
//     title: "Google Cloud Certified",
//     description: "Completed Google Cloud Foundations and Machine Learning certifications.",
//     date: "January 2025",
//     color: "#C0C0C0", // Silver
//   },
//   {
//     title: "Top Rank in TechSprint 2024",
//     description: "Ranked among the top 5% nationally in coding competition.",
//     date: "November 2024",
//     color: "#CD7F32", // Bronze
//   },
// ];

// const AchievementsPage = React.forwardRef((props, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="page bg-[#fefaf5] text-[#1c1c1c] py-12 px-10 md:px-20 font-serif"
//     >
//       {/* Section Title */}
//       <h2 className="text-4xl font-extrabold text-[#702283] mb-2">
//         Achievements
//       </h2>

//       {/* Description Text */}
//       <p className="text-base text-[#3a3a3a] mb-10 max-w-2xl">
//         These are some milestones and recognitions I have earned throughout my academic and project journey.
//       </p>

//       {/* Achievement Cards */}
//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {achievements.map((item, index) => (
//           <div
//             key={index}
//             className="relative bg-gradient-to-br from-[#f3c4fb] via-[#ddbdfc] to-[#c8b6ff] rounded-2xl p-6 shadow-xl hover:shadow-2xl transition"
//           >
//             {/* Medal Badge */}
//             <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
//               <div
//                 className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl shadow-md"
//                 style={{ backgroundColor: item.color }}
//               >
//                 <FaMedal />
//               </div>
//             </div>

//             {/* Spacer for medal */}
//             <div className="h-6"></div>

//             {/* Text Info */}
//             <h3 className="text-xl font-semibold mt-6 text-[#4a2377] text-center">
//               {item.title}
//             </h3>
//             <p className="text-sm mt-2 text-center">{item.description}</p>
//             <p className="text-xs mt-3 text-[#5a3c80] text-center italic">
//               {item.date}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// });

// export default AchievementsPage;

// // src/components/AchievementsPage.jsx
// import React from "react";

// const achievements = [
//   {
//     title: "Hackerrank 4-Star in Problem Solving",
//     description: "Awarded for consistent performance in algorithmic challenges.",
//     date: "March 2025",
//   },
//   {
//     title: "Google Cloud Certified",
//     description: "Completed Google Cloud Foundations and Machine Learning certifications.",
//     date: "January 2025",
//   },
//   {
//     title: "Top Rank in TechSprint 2024",
//     description: "Ranked among the top 5% nationally in coding competition.",
//     date: "November 2024",
//   },
// ];

// const AchievementsPage = React.forwardRef((props, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="page bg-[#fefaf5] text-[#1c1c1c] py-12 px-10 md:px-20 font-serif"
//     >
//       {/* Section Title */}
//       <h2 className="text-4xl font-extrabold text-[#702283] mb-2">
//         Achievements
//       </h2>

//       {/* Description Text */}
//       <p className="text-base text-[#3a3a3a] mb-10 max-w-2xl">
//         These are some milestones and recognitions I have earned throughout my academic and project journey.
//       </p>

//       {/* Achievement Cards */}
//       <div className="space-y-6 w-full">
//         {achievements.map((item, index) => (
//           <div
//             key={index}
//             className="bg-gradient-to-br from-[#f3c4fb] via-[#ddbdfc] to-[#c8b6ff] text-[#4a2377] rounded-2xl p-6 shadow-md hover:shadow-xl transition"
//           >
//             <h3 className="text-xl font-semibold">{item.title}</h3>
//             <p className="text-sm mt-1">{item.description}</p>
//             <p className="text-xs mt-2 text-[#5a3c80]">{item.date}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// });

// export default AchievementsPage;

// // src/components/AchievementsPage.jsx
// import React from "react";

// const achievements = [
//   {
//     title: "Hackerrank 4-Star in Problem Solving",
//     description: "Awarded for consistent performance in algorithmic challenges.",
//     date: "March 2025",
//   },
//   {
//     title: "Google Cloud Certified",
//     description: "Completed Google Cloud Foundations and Machine Learning certifications.",
//     date: "January 2025",
//   },
//   {
//     title: "Top Rank in TechSprint 2024",
//     description: "Ranked among the top 5% nationally in coding competition.",
//     date: "November 2024",
//   },
// ];

// const AchievementsPage = React.forwardRef((props, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="page bg-[#fefaf5] text-[#1c1c1c] py-10 flex flex-col"
//     >
//       {/* Heading and description with consistent left padding */}
//       <h2 className="text-4xl font-extrabold text-[#4a2377] mb-2 pl-6 md:pl-20">
//         Achievements
//       </h2>
//       <p className="text-base mb-8 text-[#3a3a3a] pl-6 md:pl-20 max-w-3xl">
//         These are some milestones and recognitions I have earned throughout my academic and project journey.
//       </p>

//       {/* Achievement cards with uniform layout */}
//       <div className="space-y-6 w-full px-6 md:px-20">
//         {achievements.map((item, index) => (
//           <div
//             key={index}
//             className="bg-gradient-to-br from-[#f3c4fb] via-[#ddbdfc] to-[#c8b6ff] text-[#4a2377] rounded-2xl p-6 shadow-md hover:shadow-xl transition"
//           >
//             <h3 className="text-xl font-bold">{item.title}</h3>
//             <p className="text-sm mt-1">{item.description}</p>
//             <p className="text-xs mt-2 text-[#5a3c80]">{item.date}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// });

// export default AchievementsPage;

// // src/components/AchievementsPage.jsx
// import React from "react";

// const achievements = [
//   {
//     title: "Hackerrank 4-Star in Problem Solving",
//     description: "Awarded for consistent performance in algorithmic challenges.",
//     date: "March 2025",
//   },
//   {
//     title: "Google Cloud Certified",
//     description: "Completed Google Cloud Foundations and Machine Learning certifications.",
//     date: "January 2025",
//   },
//   {
//     title: "Top Rank in TechSprint 2024",
//     description: "Ranked among the top 5% nationally in coding competition.",
//     date: "November 2024",
//   },
// ];

// const AchievementsPage = React.forwardRef((props, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="page bg-[#fefaf5] text-[#1c1c1c] px-6 py-10 flex flex-col items-start"
//     >
//       <h2 className="text-4xl font-extrabold text-[#4a2377] mb-2">Achievements</h2>
//       <p className="text-base mb-8 max-w-xl text-[#3a3a3a]">
//         These are some milestones and recognitions I have earned throughout my academic and project journey.
//       </p>

//       <div className="space-y-6 w-full max-w-4xl">
//         {achievements.map((item, index) => (
//           <div
//             key={index}
//             className="bg-gradient-to-br from-[#f3c4fb] via-[#ddbdfc] to-[#c8b6ff] text-[#4a2377] rounded-2xl p-6 shadow-md hover:shadow-xl transition"
//           >
//             <h3 className="text-xl font-bold">{item.title}</h3>
//             <p className="text-sm mt-1">{item.description}</p>
//             <p className="text-xs mt-2 text-[#5a3c80]">{item.date}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// });

// export default AchievementsPage;
