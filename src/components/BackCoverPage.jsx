import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaHackerrank,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { SiLeetcode, SiTailwindcss, SiPython } from "react-icons/si";

const BackCover = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="relative w-full h-screen overflow-hidden font-serif bg-black text-white"
    >
      {/* ✅ Background Image */}
      <img
        src="/backcover (2).png"
        alt="Back Cover"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* ✅ Blurred Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none blur-sm opacity-50">
        <FaReact
          className="absolute top-10 left-6 sm:left-10 text-[#61DAFB]"
          size={80}
        />
        <SiTailwindcss
          className="absolute top-36 right-10 text-[#38BDF8]"
          size={75}
        />
        <SiPython
          className="absolute bottom-32 left-[20%] text-[#FFD43B]"
          size={70}
        />
        <FaGitAlt
          className="absolute bottom-10 right-[25%] text-[#F1502F]"
          size={70}
        />
        <SiLeetcode
          className="absolute top-[22%] right-[20%] text-[#FFA116]"
          size={75}
        />
      </div>

      {/* ✅ Laptop Image */}
      <img
        src="/laptop1.png"
        alt="Laptop"
        className="absolute bottom-0 right-0 h-[40%] sm:h-[50%] md:h-[65%] lg:h-[80%] z-10"
      />

      {/* ✅ Barcode and Price */}
      {/* <div className="absolute bottom-4 left-4 z-20 text-white">
        
        <img src="/whitebarcode.png" alt="Barcode" className="w-24 sm:w-28 h-auto mb-1" />
      </div> */}

      {/* ✅ QR Code */}
      <div className="absolute bottom-2  z-20">
        <img
          src="/whitescanner1.png"
          alt="Scanner"
          className="w-24 sm:w-32 h-auto"
        />
      </div>

      {/* ✅ Social + Heading */}
      <div className="absolute top-[28%] left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-24 z-20 w-[90%] md:w-auto text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 drop-shadow-xl tracking-wider">
          Let’s Connect
        </h1>
        <p className="text-sm sm:text-base text-gray-200 mt-2 tracking-wide">
          I'm always open to collaboration or opportunities!
        </p>

        {/* ✅ Social Links */}
        <div className="flex justify-center md:justify-start gap-6 mt-6 text-2xl sm:text-3xl">
          <a
            href="https://www.linkedin.com/in/manasi-shitole-8157152a3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0e76a8] hover:scale-110 transition-transform"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/MansiShitole/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:scale-110 transition-transform"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.hackerrank.com/profile/manasishitole14"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2EC866] hover:scale-110 transition-transform"
          >
            <FaHackerrank />
          </a>
          <a
            href="https://leetcode.com/u/Manasi_Shitole/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFA116] hover:scale-110 transition-transform"
          >
            <SiLeetcode />
          </a>
        </div>

        {/* ✅ Contact Info */}
        <div className="mt-6 text-xs sm:text-sm space-y-1 text-gray-300">
          <p><strong>Email:</strong> manasishitole14@gmail.com</p>
          <p><strong>Location:</strong> Pandharpur, India</p>
        </div>
      </div>
    </div>
  );
});

export default BackCover;

// import React from "react";
// import {
//   FaLinkedin,
//   FaGithub,
//   FaHackerrank,
//   FaReact,
//   FaGitAlt,
// } from "react-icons/fa";
// import { SiLeetcode, SiTailwindcss, SiPython } from "react-icons/si";

// const BackCover = React.forwardRef((props, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="fixed top-0 left-0 w-screen h-screen overflow-hidden z-0 font-serif bg-black"
//     >
//       {/* ✅ Background Image */}
//       <img
//         src="/backcover (2).png"
//         alt="Back Cover"
//         className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
//       />

//       {/* ✅ Background React Icons */}
//       <div className="absolute inset-0 z-0 pointer-events-none blur-sm opacity-50">
//         <FaReact
//           className="absolute top-10 left-10 text-[#61DAFB]"
//           size={100}
//           style={{
//             transform: "rotate(15deg)",
//             filter: "drop-shadow(0 0 10px #61DAFB)",
//           }}
//         />

//         <SiTailwindcss
//           className="absolute top-36 right-24 text-[#38BDF8]"
//           size={90}
//           style={{
//             transform: "rotate(-10deg)",
//             filter: "drop-shadow(0 0 10px #38BDF8)",
//           }}
//         />

//         <SiPython
//           className="absolute bottom-36 left-[25%] text-[#FFD43B]"
//           size={80}
//           style={{
//             transform: "rotate(8deg)",
//             filter: "drop-shadow(0 0 8px #FFD43B)",
//           }}
//         />

//         <FaGitAlt
//           className="absolute bottom-10 right-[30%] text-[#F1502F]"
//           size={80}
//           style={{
//             transform: "rotate(-5deg)",
//             filter: "drop-shadow(0 0 10px #F1502F)",
//           }}
//         />

//         {/* ✅ NEW: LeetCode icon in top-right circular area */}
//         <SiLeetcode
//           className="absolute top-[20%] right-[22%] text-[#FFA116]"
//           size={85}
//           style={{
//             transform: "rotate(12deg)",
//             filter: "drop-shadow(0 0 10px #FFA116)",
//           }}
//         />
//       </div>

//       {/* ✅ Laptop Image on Right */}
//       <img
//         src="/laptop1.png"
//         alt="Laptop"
//         className="absolute top-3 right-0 bottom-0 h-[80%] w-auto z-10 mr-10"
//       />

//       {/* ✅ Barcode & Price */}
//       <div className="absolute bottom-4 left-8 z-20 text-white">
//         <div className="text-sm font-semibold text-gray-200 pl-10">₹ 499</div>
//         <img src="/whitebarcode.png" alt="Barcode" className="w-32 h-auto mb-1" />
//       </div>

//       {/* ✅ QR Scanner Bottom-Right */}
//       <div className="absolute bottom-0 right-6 z-20 text-white">
//         <img
//           src="/whitescanner1.png"
//           alt="Scanner"
//           className="w-40 h-40 object-contain"
//         />
//       </div>

//       {/* ✅ Social + Heading Section */}
//       <div className="absolute left-24 top-[38%] transform -translate-y-1/2 z-20">
//         <h1 className="text-[50px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 drop-shadow-xl tracking-wider">
//           Let’s Connect
//         </h1>

//         <p className="text-lg text-gray-200 mt-2 pl-2 tracking-wider">
//           I'm always open to collaboration or opportunities!
//         </p>

//         {/* ✅ Social Links */}
//         <div className="flex items-center gap-12 mt-10 text-4xl pl-40">
//           <a
//             href="https://www.linkedin.com/in/your-linkedin-profile"
//             target="_blank"
//             rel="noopener noreferrer"
//             title="LinkedIn"
//             className="text-[#0e76a8] hover:scale-110 hover:drop-shadow-[0_0_8px_#0e76a8] transition-transform"
//           >
//             <FaLinkedin />
//           </a>
//           <a
//             href="https://github.com/your-github-username"
//             target="_blank"
//             rel="noopener noreferrer"
//             title="GitHub"
//             className="text-white hover:scale-110 hover:drop-shadow-[0_0_8px_white] transition-transform"
//           >
//             <FaGithub />
//           </a>
//           <a
//             href="https://www.hackerrank.com/your-hackerrank-username"
//             target="_blank"
//             rel="noopener noreferrer"
//             title="HackerRank"
//             className="text-[#2EC866] hover:scale-110 hover:drop-shadow-[0_0_8px_#2EC866] transition-transform"
//           >
//             <FaHackerrank />
//           </a>
//           <a
//             href="https://leetcode.com/your-leetcode-username"
//             target="_blank"
//             rel="noopener noreferrer"
//             title="LeetCode"
//             className="text-[#FFA116] hover:scale-110 hover:drop-shadow-[0_0_8px_#FFA116] transition-transform"
//           >
//             <SiLeetcode />
//           </a>
//         </div>

//         {/* ✅ Contact Info */}
//         <div className="mt-10 text-gray-200 text-md pl-2 space-y-2">
//           <p><strong>Email:</strong> manasishitole14@gmail.com</p>
          
//           <p><strong>Location:</strong> Pandharpur, India</p>
//         </div>
//       </div>
//     </div>
//   );
// });

// export default BackCover;

// import React from "react";
// import {
//   FaLinkedin,
//   FaGithub,
//   FaHackerrank,
//   FaReact,
//   FaGitAlt,
// } from "react-icons/fa";
// import { SiLeetcode, SiTailwindcss, SiPython } from "react-icons/si";

// const BackCover = React.forwardRef((props, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="fixed top-0 left-0 w-screen h-screen overflow-hidden z-0 font-serif bg-black"
//     >
//       {/* ✅ Background Image */}
//       <img
//         src="/backcover (2).png"
//         alt="Back Cover"
//         className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
//       />

//       {/* ✅ Background React Icons */}
//       <div className="absolute inset-0 z-0 pointer-events-none blur-sm opacity-50">
//         <FaReact
//           className="absolute top-10 left-10 text-[#61DAFB]"
//           size={100}
//           style={{ transform: "rotate(15deg)", filter: "drop-shadow(0 0 10px #61DAFB)" }}
//         />
        
//         <SiTailwindcss
//           className="absolute top-36 right-24 text-[#38BDF8]"
//           size={90}
//           style={{ transform: "rotate(-10deg)", filter: "drop-shadow(0 0 10px #38BDF8)" }}
//         />
//         <SiPython
//           className="absolute bottom-36 left-[25%] text-[#FFD43B]"
//           size={80}
//           style={{ transform: "rotate(8deg)", filter: "drop-shadow(0 0 8px #FFD43B)" }}
//         />
//         <FaGitAlt
//           className="absolute bottom-10 right-[30%] text-[#F1502F]"
//           size={80}
//           style={{ transform: "rotate(-5deg)", filter: "drop-shadow(0 0 10px #F1502F)" }}
//         />
        
//       </div>

//       {/* ✅ Laptop Image on Right */}
//       <img
//         src="/laptop1.png"
//         alt="Laptop"
//         className="absolute top-3 right-0 bottom-0 h-[80%] w-auto z-10 mr-10"
//       />

//       {/* ✅ Barcode & Price */}
//       <div className="absolute bottom-4 left-8 z-20 text-white">
//         <div className="text-sm font-semibold text-gray-200 pl-10">₹ 499</div>
//         <img src="/whitebarcode.png" alt="Barcode" className="w-32 h-auto mb-1" />
//       </div>

//       {/* ✅ QR Scanner Bottom-Right */}
//       <div className="absolute bottom-0 right-6 z-20 text-white">
//         <img
//           src="/whitescanner1.png"
//           alt="Scanner"
//           className="w-40 h-40 object-contain"
//         />
//       </div>

//       {/* ✅ Social + Heading Section */}
//       <div className="absolute left-24 top-[38%] transform -translate-y-1/2 z-20">
//         <h1 className="text-[50px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 drop-shadow-xl tracking-wider">
//           Let’s Connect
//         </h1>

//         <p className="text-lg text-gray-200 mt-2 pl-2 tracking-wider">
//           I'm always open to collaboration or opportunities!
//         </p>

//         {/* ✅ Social Links */}
//         <div className="flex items-center gap-12 mt-10 text-4xl pl-40">
//           <a
//             href="https://www.linkedin.com/in/your-linkedin-profile"
//             target="_blank"
//             rel="noopener noreferrer"
//             title="LinkedIn"
//             className="text-[#0e76a8] hover:scale-110 hover:drop-shadow-[0_0_8px_#0e76a8] transition-transform"
//           >
//             <FaLinkedin />
//           </a>
//           <a
//             href="https://github.com/your-github-username"
//             target="_blank"
//             rel="noopener noreferrer"
//             title="GitHub"
//             className="text-white hover:scale-110 hover:drop-shadow-[0_0_8px_white] transition-transform"
//           >
//             <FaGithub />
//           </a>
//           <a
//             href="https://www.hackerrank.com/your-hackerrank-username"
//             target="_blank"
//             rel="noopener noreferrer"
//             title="HackerRank"
//             className="text-[#2EC866] hover:scale-110 hover:drop-shadow-[0_0_8px_#2EC866] transition-transform"
//           >
//             <FaHackerrank />
//           </a>
//           <a
//             href="https://leetcode.com/your-leetcode-username"
//             target="_blank"
//             rel="noopener noreferrer"
//             title="LeetCode"
//             className="text-[#FFA116] hover:scale-110 hover:drop-shadow-[0_0_8px_#FFA116] transition-transform"
//           >
//             <SiLeetcode />
//           </a>
//         </div>

//         {/* ✅ Contact Info */}
//         <div className="mt-10 text-gray-200 text-md pl-2 space-y-2">
//           <p><strong>Email:</strong> yourname@email.com</p>
//           <p><strong>Phone:</strong> +91 9876543210</p>
//           <p><strong>Location:</strong> Pune, India</p>
//         </div>
//       </div>
//     </div>
//   );
// });

// export default BackCover;

// import React from "react";
// import { FaLinkedin, FaGithub, FaHackerrank } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";

// const BackCover = React.forwardRef((props, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="fixed top-0 left-0 w-screen h-screen overflow-hidden z-0 font-serif"
//     >
//       {/* ✅ Background Image */}
//       <img
//         src="/backcover (2).png"
//         alt="Back Cover"
//         className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
//       />

//       {/* ✅ Colored Tech Logos - Realistic Placement */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <img
//           src="/tech/react.png"
//           className="absolute top-10 left-20 w-16 rotate-12 opacity-80"
//           style={{ filter: "drop-shadow(2px 2px 4px #00d8ff)" }}
//           alt="React"
//         />
//         <img
//           src="/tech/tailwind.png"
//           className="absolute top-40 right-32 w-20 rotate-[8deg] opacity-90"
//           style={{ filter: "drop-shadow(2px 2px 4px #38bdf8)" }}
//           alt="Tailwind"
//         />
//         <img
//           src="/tech/python.png"
//           className="absolute bottom-20 left-[30%] w-14 -rotate-12 opacity-90"
//           style={{ filter: "drop-shadow(2px 2px 4px #ffde57)" }}
//           alt="Python"
//         />
//         <img
//           src="/tech/git.png"
//           className="absolute bottom-10 right-[25%] w-12 rotate-6 opacity-85"
//           style={{ filter: "drop-shadow(2px 2px 4px #f1502f)" }}
//           alt="Git"
//         />
//         {/* You can add more images if you like */}
//       </div>

//       {/* ✅ Laptop Image on Right */}
//       <img
//         src="/laptop1.png"
//         alt="Laptop"
//         className="absolute top-3 right-0 bottom-0 h-[80%] w-auto z-10 mr-10"
//       />

//       {/* ✅ Barcode & Price */}
//       <div className="absolute bottom-4 left-8 z-20 text-white">
//         <div className="text-sm font-semibold text-gray-200 pl-10">₹ 499</div>
//         <img src="/whitebarcode.png" alt="Barcode" className="w-32 h-auto mb-1" />
//       </div>

//       {/* ✅ QR Scanner Bottom-Right */}
//       <div className="absolute bottom-0 right-6 z-20 text-white">
//         <img
//           src="/whitescanner1.png"
//           alt="Scanner"
//           className="w-40 h-40 object-contain"
//         />
//       </div>

//       {/* ✅ Social + Heading Section */}
//       <div className="absolute left-24 top-[38%] transform -translate-y-1/2 z-20">
//         <h1 className="text-[50px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 drop-shadow-xl tracking-wider">
//           Let’s Connect
//         </h1>

//         <p className="text-lg text-gray-200 mt-2 pl-2 tracking-wider">
//           I'm always open to collaboration or opportunities!
//         </p>

//         {/* ✅ Social Links */}
//         <div className="flex items-center gap-12 mt-10 text-4xl pl-40">
//           <a
//             href="https://www.linkedin.com/in/your-linkedin-profile"
//             target="_blank"
//             rel="noopener noreferrer"
//             title="LinkedIn"
//             className="text-[#0e76a8] hover:scale-110 hover:drop-shadow-[0_0_8px_#0e76a8] transition-transform"
//           >
//             <FaLinkedin />
//           </a>
//           <a
//             href="https://github.com/your-github-username"
//             target="_blank"
//             rel="noopener noreferrer"
//             title="GitHub"
//             className="text-white hover:scale-110 hover:drop-shadow-[0_0_8px_white] transition-transform"
//           >
//             <FaGithub />
//           </a>
//           <a
//             href="https://www.hackerrank.com/your-hackerrank-username"
//             target="_blank"
//             rel="noopener noreferrer"
//             title="HackerRank"
//             className="text-[#2EC866] hover:scale-110 hover:drop-shadow-[0_0_8px_#2EC866] transition-transform"
//           >
//             <FaHackerrank />
//           </a>
//           <a
//             href="https://leetcode.com/your-leetcode-username"
//             target="_blank"
//             rel="noopener noreferrer"
//             title="LeetCode"
//             className="text-[#FFA116] hover:scale-110 hover:drop-shadow-[0_0_8px_#FFA116] transition-transform"
//           >
//             <SiLeetcode />
//           </a>
//         </div>

//         {/* ✅ Contact Info */}
//         <div className="mt-10 text-gray-200 text-md pl-2 space-y-2">
//           <p><strong>Email:</strong> yourname@email.com</p>
//           <p><strong>Phone:</strong> +91 9876543210</p>
//           <p><strong>Location:</strong> Pune, India</p>
//         </div>
//       </div>
//     </div>
//   );
// });

// export default BackCover;


















// import React from "react";

// const BackCover = React.forwardRef((props, ref) => {
//   return (
//     <div className="page" ref={ref}>
//       <h1>Thank You!</h1>
//       <p>Hope you enjoyed flipping through.</p>
//     </div>
//   );
// });

// export default BackCover;
