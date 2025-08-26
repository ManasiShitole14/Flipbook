import React from "react";

const SkillBook = ({ logo, title, description }) => {
  return (
    <div className="w-36 h-36 rounded-xl group [perspective:1000px] cursor-pointer transition-transform duration-500 ease-in-out group-hover:scale-110 hover:shadow-[0_0_20px_#eebee3aa]">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* Front Side */}
        <div className="absolute w-full h-full bg-gradient-to-br from-[#b49be0] via-[#cfa5e2] to-[#e7aee7] text-white rounded-xl border border-[#cfa5e2] [backface-visibility:hidden] flex flex-col items-center justify-center shadow-[inset_3px_3px_6px_rgba(255,255,255,0.2),_inset_-4px_-4px_8px_rgba(0,0,0,0.04)]">
          <img src={logo} alt={title} className="w-12 h-12 mb-2" />
          <h3 className="text-sm font-semibold text-center tracking-wide text-[#3d1b5e]">
            {title}
          </h3>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-[#f3defb] text-[#1e1e1e] rounded-xl shadow-inner [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center p-4">
          <h3 className="text-sm font-semibold text-[#3d1b5e] mb-1">
            {title}
          </h3>
          <p className="text-xs text-center leading-tight">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillBook;






// import React from "react";

// const SkillBook = ({ logo, title, description }) => {
//   return (
//     <div className="w-36 h-36 rounded-full group [perspective:1000px] cursor-pointer transition-transform duration-500 ease-in-out group-hover:scale-110 hover:shadow-[0_0_20px_#eebee3aa]">
//       <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
//         {/* Front Side */}
//         <div className="absolute w-full h-full bg-gradient-to-br from-[#c8b6ff] via-[#ddbdfc] to-[#f3c4fb] text-white rounded-full border border-[#ddbdfc] [backface-visibility:hidden] flex flex-col items-center justify-center shadow-[inset_3px_3px_6px_rgba(255,255,255,0.2),_inset_-4px_-4px_8px_rgba(0,0,0,0.04)]">
//           <img src={logo} alt={title} className="w-12 h-12 mb-2" />
//           <h3 className="text-sm font-semibold text-center tracking-wide text-[#4a2377]">
//             {title}
//           </h3>
//         </div>

//         {/* Back Side */}
//         <div className="absolute w-full h-full bg-[#f8edff] text-[#1e1e1e] rounded-full shadow-inner [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center p-4">
//           <h3 className="text-sm font-semibold text-[#4a2377] mb-1">
//             {title}
//           </h3>
//           <p className="text-xs text-center leading-tight">{description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillBook;

// import React from "react";

// const SkillBook = ({ logo, title, description }) => {
//   return (
//     <div className="w-36 h-36 rounded-full group [perspective:1000px] cursor-pointer transition-transform duration-500 ease-in-out group-hover:scale-110 hover:shadow-[0_0_20px_#eebee3aa]">
//       <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
//         {/* Front Side */}
//         <div className="absolute w-full h-full bg-gradient-to-br from-[#fff5fb] to-[#eebee3] text-white rounded-full border border-[#eebee3] [backface-visibility:hidden] flex flex-col items-center justify-center shadow-[inset_3px_3px_6px_rgba(255,255,255,0.2),_inset_-4px_-4px_8px_rgba(0,0,0,0.04)]">
//           <img src={logo} alt={title} className="w-12 h-12 mb-2" />
//           <h3 className="text-sm font-semibold text-center tracking-wide text-[#8d4d72]">
//             {title}
//           </h3>
//         </div>

//         {/* Back Side */}
//         <div className="absolute w-full h-full bg-[#fdf6fa] text-[#1e1e1e] rounded-full shadow-inner [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center p-4">
//           <h3 className="text-sm font-semibold text-[#eebee3] mb-1">
//             {title}
//           </h3>
//           <p className="text-xs text-center leading-tight">{description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillBook;












// import React from "react";

// const SkillBook = ({ logo, title, description }) => {
//   return (
//    <div className="w-36 h-36 rounded-full group [perspective:1000px] cursor-pointer transition-transform duration-500 ease-in-out group-hover:scale-110 hover:shadow-[0_0_20px_#7EAFFF]">
//   <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
    
//     {/* Front Side with Gradient Glow */}
//     <div className="absolute w-full h-full bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#60a5fa] text-white rounded-full border border-[#1e3a8a] [backface-visibility:hidden] flex flex-col items-center justify-center shadow-[inset_4px_4px_10px_rgba(255,255,255,0.05),_inset_-4px_-4px_10px_rgba(0,0,0,0.2)]">
//       <img src={logo} alt={title} className="w-12 h-12 mb-2" />
//       <h3 className="text-sm font-semibold text-center tracking-wide text-[#7EAFFF]">
//         {title}
//       </h3>
//     </div>

//     {/* Back Side */}
//     <div className="absolute w-full h-full bg-[#fefefe] text-[#1e1e1e] rounded-full shadow-inner [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center p-4">
//       <h3 className="text-sm font-semibold text-[#FF460F] mb-1">
//         {title}
//       </h3>
//       <p className="text-xs text-center leading-tight">{description}</p>
//     </div>
//   </div>
// </div>

//   );
// };

// export default SkillBook;

// // import React from "react";

// // const SkillBook = ({ logo, title, description }) => {
// //   return (
// //     <div className="w-36 h-48 group [perspective:1000px] cursor-pointer transition-transform duration-500 ease-in-out transform group-hover:scale-110 hover:shadow-2xl hover:shadow-[#7eafff]/30">

// //       <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
// //         {/* Front Side */}
// //         <div className="absolute w-full h-full bg-gradient-to-br from-[#0a1930] via-[#112240] to-[#1c2e4a] text-white rounded-xl shadow-2xl [backface-visibility:hidden] flex flex-col items-center justify-center">
// //           <img src={logo} alt={title} className="w-12 h-12 mb-2" />
// //           <h3 className="text-base font-semibold text-center text-[#7EAFFF]">
// //             {title}
// //           </h3>
// //         </div>

// //         {/* Back Side */}
// //         <div className="absolute w-full h-full bg-gradient-to-br from-[#ffffff] via-[#f1f1f1] to-[#e0e0e0] text-black rounded-xl shadow-inner [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center p-3">
// //           <h3 className="text-base font-semibold text-[#FF460F] mb-1">
// //             {title}
// //           </h3>
// //           <p className="text-xs text-center leading-snug">{description}</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SkillBook;

// // import React from "react";

// // const SkillBook = ({ logo, title, description }) => {
// //   return (
// //     <div className="w-36 h-48 group [perspective:1000px] cursor-pointer transition-transform duration-500 ease-in-out transform group-hover:scale-110 hover:shadow-2xl hover:shadow-[#7eafff]/30">


// //       <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
// //         {/* Front Side */}
// //         <div className="absolute w-full h-full bg-[#0a1930] text-white rounded-xl shadow-2xl [backface-visibility:hidden] flex flex-col items-center justify-center">
// //           <img src={logo} alt={title} className="w-12 h-12 mb-2" />
// //           <h3 className="text-base font-semibold text-center text-[#7EAFFF]">
// //             {title}
// //           </h3>
// //         </div>

// //         {/* Back Side */}
// //         <div className="absolute w-full h-full bg-gray-200 text-black rounded-xl shadow-inner [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center p-3">
// //           <h3 className="text-base font-semibold text-[#FF460F] mb-1">
// //             {title}
// //           </h3>
// //           <p className="text-xs text-center leading-snug">{description}</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SkillBook;

// // import React from "react";

// // const SkillBook = ({ logo, title, description }) => {
// //   return (
// //     <div className="w-44 h-56 group [perspective:1000px]">
// //       <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
// //         {/* Front Side */}
// //         <div className="absolute w-full h-full bg-[#0a1930] text-white rounded-xl shadow-2xl [backface-visibility:hidden] flex flex-col items-center justify-center">
// //           <img src={logo} alt={title} className="w-14 h-14 mb-2" />
// //           <h3 className="text-lg font-bold text-center text-[#7EAFFF]">
// //             {title}
// //           </h3>
// //         </div>

// //         {/* Back Side */}
// //         <div className="absolute w-full h-full bg-gray-200 text-black rounded-xl shadow-inner [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center p-4">
// //           <h3 className="text-lg font-semibold text-[#FF460F] mb-2">{title}</h3>
// //           <p className="text-sm text-center leading-snug">{description}</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SkillBook;



// // // // // src/components/SkillBook.jsx
// // // // import React, { useState } from "react";

// // // // const SkillBook = ({ logo, title, description }) => {
// // // //   const [flipped, setFlipped] = useState(false);

// // // //   return (
// // // //     <div
// // // //       className="w-44 h-60 perspective cursor-pointer"
// // // //       onClick={() => setFlipped(!flipped)}
// // // //     >
// // // //       <div
// // // //         className={`relative w-full h-full duration-700 preserve-3d transition-transform ${
// // // //           flipped ? "rotate-y-180" : ""
// // // //         }`}
// // // //       >
// // // //         {/* Front Cover */}
// // // //         <div className="absolute w-full h-full rounded-2xl backface-hidden shadow-lg overflow-hidden">
// // // //           {/* Spine / Black Edge */}
// // // //           <div className="absolute top-0 left-0 w-2 h-full bg-black z-10 rounded-l-2xl" />

// // // //           {/* Main Front Design */}
// // // //           <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex flex-col items-center justify-center px-4 rounded-2xl">
// // // //             <img src={logo} alt={title} className="w-12 h-12 mb-2 rounded" />
// // // //             <h3 className="text-lg font-semibold text-white">{title}</h3>
// // // //           </div>
// // // //         </div>

// // // //         {/* Back Cover */}
// // // //         <div className="absolute w-full h-full rounded-2xl bg-gray-200 rotate-y-180 backface-hidden shadow-inner p-4 flex items-center justify-center text-black text-sm">
// // // //           {description}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SkillBook;





// // // // components/SkillBook.jsx
// // // import React, { useState } from "react";

// // // const SkillBook = ({ logo, title, description }) => {
// // //   const [flipped, setFlipped] = useState(false);

// // //   return (
// // //     <div
// // //       className="w-44 h-56 perspective cursor-pointer"
// // //       onClick={() => setFlipped(!flipped)}
// // //     >
// // //       <div
// // //         className={`relative w-full h-full duration-700 transform-style preserve-3d transition-transform ${
// // //           flipped ? "rotate-y-180" : ""
// // //         }`}
// // //       >
// // //         {/* Front Cover */}
// // //         <div className="absolute w-full h-full bg-[#111] text-white rounded-xl shadow-2xl backface-hidden flex flex-col items-center justify-center">
// // //           <img src={logo} alt={title} className="w-14 h-14 mb-2" />
// // //           <h3 className="text-lg font-bold text-center text-[#7EAFFF]">{title}</h3>
// // //         </div>

// // //         {/* Back Cover (Skill Description) */}
// // //         <div className="absolute w-full h-full bg-[#fffdef] text-black rounded-xl shadow-inner rotate-y-180 backface-hidden flex flex-col items-center justify-center p-4">
// // //           <h3 className="text-lg font-semibold text-[#FF460F] mb-2">{title}</h3>
// // //           <p className="text-sm text-center leading-snug">{description}</p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SkillBook;

// // // import React, { useState } from "react";

// // // const SkillBook = ({ logo, title, description }) => {
// // //   const [flipped, setFlipped] = useState(false);

// // //   return (
// // //     <div
// // //       className="w-full h-56 perspective cursor-pointer"
// // //       onClick={() => setFlipped(!flipped)}
// // //     >
// // //       <div
// // //         className={`relative w-full h-full duration-700 transform-style preserve-3d transition-transform ${
// // //           flipped ? "rotate-y-180" : ""
// // //         }`}
// // //       >
// // //         {/* Front Cover - Off White */}
// // //         <div className="absolute w-full h-full bg-[#FCFCF6] text-[#111111] rounded-[10px] border-l-[6px] border-[#FF460F] shadow-[inset_-4px_0_6px_rgba(0,0,0,0.25),_6px_6px_12px_rgba(0,0,0,0.4)] transform rotate-y-0 scale-[1.02] hover:scale-[1.05] transition-transform duration-300 ease-in-out flex flex-col items-center justify-center backface-hidden">
// // //           <div className="w-12 h-12 mb-3 drop-shadow-md">
// // //             <img src={logo} alt={title} className="w-full h-full object-contain" />
// // //           </div>
// // //           <h3 className="text-sm font-semibold text-[#111111] tracking-wide">{title}</h3>
// // //         </div>

// // //         {/* Back Cover - Sky Blue Gradient */}
// // //         <div className="absolute w-full h-full bg-gradient-to-br from-[#7EAFFF] to-[#5A95E5] text-[#111111] rounded-[10px] p-3 shadow-[inset_0_0_6px_rgba(255,255,255,0.08),_4px_4px_12px_rgba(0,0,0,0.3)] rotate-y-180 backface-hidden flex items-center justify-center text-xs font-light text-center leading-snug">
// // //           {description}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SkillBook;








// // // // // // import React, { useState } from "react";

// // // // // // const SkillBook = ({ logo, title, description }) => {
// // // // // //   const [flipped, setFlipped] = useState(false);

// // // // // //   return (
// // // // // //     <div
// // // // // //       className="w-40 h-48 perspective cursor-pointer"
// // // // // //       onClick={() => setFlipped(!flipped)}
// // // // // //     >
// // // // // //       <div
// // // // // //         className={`relative w-full h-full duration-700 transform-style preserve-3d transition-transform ${
// // // // // //           flipped ? "rotate-y-180" : ""
// // // // // //         }`}
// // // // // //       >
// // // // // //         {/* Front Cover */}
// // // // // //         <div className="absolute w-full h-full bg-[#111111] text-white rounded-xl flex flex-col items-center justify-center shadow-lg backface-hidden">
// // // // // //           <img src={logo} alt={title} className="w-12 h-12 mb-2" />
// // // // // //           <h3 className="text-sm text-[#F68CB9] font-semibold">{title}</h3>
// // // // // //         </div>

// // // // // //         {/* Back Cover */}
// // // // // //         <div className="absolute w-full h-full bg-[#F68CB9] text-black rounded-xl p-3 shadow-lg rotate-y-180 backface-hidden flex items-center justify-center text-xs font-medium text-center">
// // // // // //           {description}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default SkillBook;
