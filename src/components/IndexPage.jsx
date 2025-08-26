import React from "react";
import {
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaAward,
  FaEnvelope,
} from "react-icons/fa";

const IndexPage = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-screen h-screen bg-[#fffdef] text-black flex flex-col justify-center px-6 sm:px-10 md:px-20 py-8 sm:py-12 font-serif border-l-[2px] sm:border-l-[4px] border-r-[2px] sm:border-r-[4px] border-[#702283]"
    >
      {/* Heading and Description */}
      <div className="mb-8 sm:mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#702283] drop-shadow-md">
          Index
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-light text-gray-700 mt-2 italic">
          Explore the chapters of my portfolio.
        </p>
      </div>

      {/* Page Sections List */}
      <ul className="space-y-4 sm:space-y-6 text-base sm:text-lg tracking-wide text-gray-700">
        <li className="flex items-center justify-between hover:text-[#F68CB9] transition duration-300">
          <div className="flex items-center gap-3 sm:gap-4">
            <FaUser className="text-[#702283]" />
            <span>About Me</span>
          </div>
          <div className="flex-grow border-t border-dotted border-gray-400 mx-2 sm:mx-4 mt-[2px]" />
          <span className="text-[#702283] text-sm sm:text-base md:text-lg">01</span>
        </li>

        <li className="flex items-center justify-between hover:text-[#F68CB9] transition duration-300">
          <div className="flex items-center gap-3 sm:gap-4">
            <FaCode className="text-[#702283]" />
            <span>Skills</span>
          </div>
          <div className="flex-grow border-t border-dotted border-gray-400 mx-2 sm:mx-4 mt-[2px]" />
          <span className="text-[#702283] text-sm sm:text-base md:text-lg">02</span>
        </li>

        <li className="flex items-center justify-between hover:text-[#F68CB9] transition duration-300">
          <div className="flex items-center gap-3 sm:gap-4">
            <FaProjectDiagram className="text-[#702283]" />
            <span>Projects</span>
          </div>
          <div className="flex-grow border-t border-dotted border-gray-400 mx-2 sm:mx-4 mt-[2px]" />
          <span className="text-[#702283] text-sm sm:text-base md:text-lg">03</span>
        </li>

        <li className="flex items-center justify-between hover:text-[#F68CB9] transition duration-300">
          <div className="flex items-center gap-3 sm:gap-4">
            <FaAward className="text-[#702283]" />
            <span>Achievements</span>
          </div>
          <div className="flex-grow border-t border-dotted border-gray-400 mx-2 sm:mx-4 mt-[2px]" />
          <span className="text-[#702283] text-sm sm:text-base md:text-lg">04</span>
        </li>

        <li className="flex items-center justify-between hover:text-[#F68CB9] transition duration-300">
          <div className="flex items-center gap-3 sm:gap-4">
            <FaEnvelope className="text-[#702283]" />
            <span>Contact</span>
          </div>
          <div className="flex-grow border-t border-dotted border-gray-400 mx-2 sm:mx-4 mt-[2px]" />
          <span className="text-[#702283] text-sm sm:text-base md:text-lg">05</span>
        </li>
      </ul>
    </div>
  );
});

export default IndexPage;

// import React from "react";
// import { FaUser, FaCode, FaProjectDiagram, FaAward, FaEnvelope } from "react-icons/fa";

// const IndexPage = React.forwardRef((props, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="w-screen h-screen bg-[#fffdef] text-black flex flex-col justify-center px-10 md:px-20 py-12 font-serif border-l-[4px] border-r-[4px] border-[#702283]"
//     >
//       {/* Heading and Description */}
//       <div className="mb-10">
//         <h2 className="text-4xl font-extrabold text-[#702283] drop-shadow-md">Index</h2>
//         <p className="text-xl font-light text-gray-700 mt-2 italic">
//           Explore the chapters of my portfolio.
//         </p>
//       </div>

//       {/* Page Sections List */}
//       <ul className="space-y-6 text-lg tracking-wide text-gray-700">
//         <li className="flex items-center justify-between hover:text-[#F68CB9] transition duration-300">
//           <div className="flex items-center gap-4">
//             <FaUser className="text-[#702283]" />
//             <span>About Me</span>
//           </div>
//           <div className="flex-grow border-t border-dotted border-gray-400 mx-4 mt-[2px]" />
//           <span className="text-[#702283]">01</span>
//         </li>
//         <li className="flex items-center justify-between hover:text-[#F68CB9] transition duration-300">
//           <div className="flex items-center gap-4">
//             <FaCode className="text-[#702283]" />
//             <span>Skills</span>
//           </div>
//           <div className="flex-grow border-t border-dotted border-gray-400 mx-4 mt-[2px]" />
//           <span className="text-[#702283]">02</span>
//         </li>
//         <li className="flex items-center justify-between hover:text-[#F68CB9] transition duration-300">
//           <div className="flex items-center gap-4">
//             <FaProjectDiagram className="text-[#702283]" />
//             <span>Projects</span>
//           </div>
//           <div className="flex-grow border-t border-dotted border-gray-400 mx-4 mt-[2px]" />
//           <span className="text-[#702283]">03</span>
//         </li>
//         <li className="flex items-center justify-between hover:text-[#F68CB9] transition duration-300">
//           <div className="flex items-center gap-4">
//             <FaAward className="text-[#702283]" />
//             <span>Achievements</span>
//           </div>
//           <div className="flex-grow border-t border-dotted border-gray-400 mx-4 mt-[2px]" />
//           <span className="text-[#702283]">04</span>
//         </li>
//         <li className="flex items-center justify-between hover:text-[#F68CB9] transition duration-300">
//           <div className="flex items-center gap-4">
//             <FaEnvelope className="text-[#702283]" />
//             <span>Contact</span>
//           </div>
//           <div className="flex-grow border-t border-dotted border-gray-400 mx-4 mt-[2px]" />
//           <span className="text-[#702283]">05</span>
//         </li>
//       </ul>
//     </div>
//   );
// });

// export default IndexPage;

// import React from "react";
// import { FaUser, FaCode, FaProjectDiagram, FaAward, FaEnvelope } from "react-icons/fa";

// const IndexPage = React.forwardRef((props, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="w-screen h-screen bg-[#fffdef] text-black flex flex-col justify-center px-10 md:px-20 py-12 font-serif  border-l-[4px] border-r-[4px] border-[#702283]"
//     >
//       {/* Heading and Description */}
//       <div className="mb-10">
//         <h2 className="text-4xl font-extrabold text-[#702283] drop-shadow-md">Index</h2>
//         <p className="text-xl font-light text-gray-700 mt-2 italic">
//           Explore the chapters of my portfolio.
//         </p>
//       </div>

//       {/* Page Sections List */}
//       <ul className="space-y-6 text-lg tracking-wide text-gray-700">
//         <li className="flex items-center justify-between hover:text-[#F68CB9] transition duration-300">
//           <div className="flex items-center gap-4">
//             <FaUser className="text-[#702283]" />
//             <span>About Me</span>
//           </div>
//           <span className="text-[#702283]">01</span>
//         </li>
//         <li className="flex items-center justify-between hover:text-[#F68CB9] transition duration-300">
//           <div className="flex items-center gap-4">
//             <FaCode className="text-[#702283]" />
//             <span>Skills</span>
//           </div>
//           <span className="text-[#702283]">02</span>
//         </li>
//         <li className="flex items-center justify-between hover:text-[#F68CB9] transition duration-300">
//           <div className="flex items-center gap-4">
//             <FaProjectDiagram className="text-[#702283]" />
//             <span>Projects</span>
//           </div>
//           <span className="text-[#702283]">03</span>
//         </li>
//         <li className="flex items-center justify-between hover:text-[#F68CB9] transition duration-300">
//           <div className="flex items-center gap-4">
//             <FaAward className="text-[#702283]" />
//             <span>Achievements</span>
//           </div>
//           <span className="text-[#702283]">04</span>
//         </li>
//         <li className="flex items-center justify-between hover:text-[#F68CB9] transition duration-300">
//           <div className="flex items-center gap-4">
//             <FaEnvelope className="text-[#702283]" />
//             <span>Contact</span>
//           </div>
//           <span className="text-[#702283]">05</span>
//         </li>
//       </ul>
//     </div>
//   );
// });

// export default IndexPage;

// import React from "react";
// import {
//   FaUser,
//   FaCode,
//   FaProjectDiagram,
//   FaAward,
//   FaEnvelope,
// } from "react-icons/fa";

// const indexData = [
//   { icon: <FaUser className="text-[#702283]" />, label: "About Me", page: "01" },
//   { icon: <FaCode className="text-[#702283]" />, label: "Skills", page: "02" },
//   { icon: <FaProjectDiagram className="text-[#702283]" />, label: "Projects", page: "03" },
//   { icon: <FaAward className="text-[#702283]" />, label: "Achievements", page: "04" },
//   { icon: <FaEnvelope className="text-[#702283]" />, label: "Contact", page: "05" },
// ];

// const IndexPage = React.forwardRef((props, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="w-screen h-screen bg-[#fffdef] text-black flex flex-col justify-center px-10 md:px-20 py-12 font-serif border-l-[4px] border-r-[4px] border-[#702283]"
//     >
//       {/* Heading and Description */}
//       <div className="mb-10">
//         <h2 className="text-4xl font-extrabold text-[#702283] drop-shadow-md">Index</h2>
//         <p className="text-xl font-light text-gray-700 mt-2 italic">
//           Explore the chapters of my portfolio.
//         </p>
//       </div>

//       {/* Page Sections List with Dotted Lines and Page Numbers */}
//       <ul className="space-y-6 text-lg tracking-wide text-gray-700 w-full max-w-2xl">
//         {indexData.map((item, index) => (
//           <li
//             key={index}
//             className="flex items-center gap-4 group hover:text-[#F68CB9] transition duration-300"
//           >
//             {item.icon}
//             <div className="flex-1 border-b border-dotted border-gray-400 mx-2"></div>
//             <span className="text-[#702283] font-semibold">{item.page}</span>
//             <span className="absolute bg-[#fffdef] pr-4 left-14 group-hover:text-[#F68CB9] transition duration-300">
//               {item.label}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// });

// export default IndexPage;

// import React from "react";
// import { FaUser, FaCode, FaProjectDiagram, FaAward, FaEnvelope } from "react-icons/fa";

// const IndexPage = React.forwardRef((props, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="w-screen h-screen bg-[#fffdef] text-black px-10 md:px-20 py-12 font-serif border-l-[4px] border-r-[4px] border-[#702283]"
//       style={{
//         boxShadow: "inset 0 0 0 2px #7EAFFF",
//       }}
//     >
//       {/* Heading and Description */}
//       <div className="mb-10">
//         <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-800 to-pink-500 bg-clip-text text-transparent tracking-wide drop-shadow-lg">
//   Index
// </h2>




//         <p className="text-xl font-light text-gray-700 mt-2 italic">
//           Explore the chapters of my portfolio.
//         </p>
//       </div>

//       {/* Page Sections List */}
//       <ul className="space-y-6 text-lg tracking-wide text-gray-700">
//         <li className="flex items-center gap-4 hover:text-[#F68CB9] transition duration-300">
//           <FaUser className="text-[#7EAFFF]" />
//           <span>About Me</span>
//         </li>
//         <li className="flex items-center gap-4 hover:text-[#F68CB9] transition duration-300">
//           <FaCode className="text-[#7EAFFF]" />
//           <span>Skills</span>
//         </li>
//         <li className="flex items-center gap-4 hover:text-[#F68CB9] transition duration-300">
//           <FaProjectDiagram className="text-[#7EAFFF]" />
//           <span>Projects</span>
//         </li>
//         <li className="flex items-center gap-4 hover:text-[#F68CB9] transition duration-300">
//           <FaAward className="text-[#7EAFFF]" />
//           <span>Achievements</span>
//         </li>
//         <li className="flex items-center gap-4 hover:text-[#F68CB9] transition duration-300">
//           <FaEnvelope className="text-[#7EAFFF]" />
//           <span>Contact</span>
//         </li>
//       </ul>
//     </div>
//   );
// });

// export default IndexPage;



// import React from "react";
// import { FaUser, FaCode, FaProjectDiagram, FaAward, FaEnvelope } from "react-icons/fa";

// const IndexPage = React.forwardRef((props, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="w-screen h-screen bg-[#fffdef] text-black flex flex-col justify-center px-10 md:px-20 py-12 font-serif  border-l-[4px] border-r-[4px] border-[#702283]"
//     >
//       {/* Heading and Description */}
//       <div className="mb-10">
//         <h2 className="text-4xl font-extrabold text-[#702283] drop-shadow-md">Index</h2>
//         <p className="text-xl font-light text-gray-700 mt-2 italic">
//           Explore the chapters of my portfolio.
//         </p>
//       </div>

//       {/* Page Sections List */}
//       <ul className="space-y-6 text-lg tracking-wide text-gray-700">
//         <li className="flex items-center gap-4 hover:text-[#F68CB9] transition duration-300">
//           <FaUser className="text-[#702283]" />
//           <span>About Me</span>
//         </li>
//         <li className="flex items-center gap-4 hover:text-[#F68CB9] transition duration-300">
//           <FaCode className="text-[#702283]" />
//           <span>Skills</span>
//         </li>
//         <li className="flex items-center gap-4 hover:text-[#F68CB9] transition duration-300">
//           <FaProjectDiagram className="text-[#702283]" />
//           <span>Projects</span>
//         </li>
//         <li className="flex items-center gap-4 hover:text-[#F68CB9] transition duration-300">
//           <FaAward className="text-[#702283]" />
//           <span>Achievements</span>
//         </li>
//         <li className="flex items-center gap-4 hover:text-[#F68CB9] transition duration-300">
//           <FaEnvelope className="text-[#702283]" />
//           <span>Contact</span>
//         </li>
//       </ul>
//     </div>
//   );
// });

// export default IndexPage;



// import React from "react";

// const IndexPage = React.forwardRef((props, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="w-screen h-screen bg-[#fffdef] text-black flex flex-col justify-center px-16 py-10 overflow-hidden"
//     >
//       {/* Heading and Description */}
//       <div className="mb-10">
//         <h2 className="text-5xl font-bold mb-6 text-[#7EAFFF]">Index</h2>
//         <p className="text-lg font-light leading-relaxed">
//           Explore the chapters of my portfolio.
//         </p>
//       </div>

//       {/* Page Sections List */}
//       <ul className="text-lg space-y-4 list-disc list-inside pl-4 text-[#F68CB9]">
//         <li>About Me</li>
//         <li>Skills</li>
//         <li>Projects</li>
//         <li>Achievements</li>
//         <li>Contact</li>
//       </ul>
//     </div>
//   );
// });

// export default IndexPage;
