import React, { useRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import SpiralBinding from "./components/SpiralBinding";
import BookCover from "./components/BookCover";
import IndexPage from "./components/IndexPage";
import AboutPage from "./components/AboutPage";
import SkillsPage from "./components/SkillsPage";
import ProjectsPage from "./components/ProjectsPage";
import AchievementPage from "./components/AchievementPage";
import GalleryPage from "./components/GalleryPage";
import TestimonialsPage from "./components/TestimonialsPage";
import ContactPage from "./components/ContactPage";
import BackCover from "./components/BackCoverPage";

function App() {
  const bookRef = useRef();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        bookRef.current.pageFlip().flipNext();
      } else if (e.key === "ArrowLeft") {
        bookRef.current.pageFlip().flipPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNext = () => {
    bookRef.current.pageFlip().flipNext();
  };

  const handlePrev = () => {
    bookRef.current.pageFlip().flipPrev();
  };

  return (
    <div className="app-container relative w-full h-full overflow-hidden">
      {/* Spiral binding */}
      <SpiralBinding />

      {/* Book content */}
      <div className="wrapper relative z-10 w-full h-full pl-10">
        <HTMLFlipBook
          ref={bookRef}
          width={window.innerWidth}
          height={window.innerHeight}
          size="fixed"
          showCover={true}
          flippingTime={1200}
          useMouseEvents={true}
          mobileScrollSupport={true}
          drawShadow={true}
          maxShadowOpacity={0.5}
          startPage={0}
          className="drawing-book"
          style={{ boxShadow: "0 0 15px rgba(0,0,0,0.3)" }}
        >
          {/* <BookCover /> */}
          <IndexPage />
          <AboutPage />
          <SkillsPage />
          <ProjectsPage />
          <AchievementPage />
          <GalleryPage />
          <TestimonialsPage />
          <ContactPage />
          <BackCover />
        </HTMLFlipBook>
      </div>

      {/* ⬅️ Bottom-left 3D Arrow (Previous Page) */}
      {/* <div className="absolute bottom-4 left-4 z-50 pl-7">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-gradient-to-br from-gray-800 to-black text-white shadow-xl transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out"
          aria-label="Previous Page"
        >
          <FaArrowLeft className="text-lg" />
        </button>
      </div> */}

      {/* ➡️ Bottom-right 3D Arrow (Next Page) */}
      <div className="absolute bottom-4 right-4 z-50">
  <button
    onClick={handleNext}
    className="p-3 rounded-full bg-gradient-to-br from-[#6e3b9e] to-[#1f103f] text-[#FCFCF6] shadow-[inset_2px_2px_6px_rgba(255,255,255,0.1),_4px_4px_12px_rgba(50,0,80,0.5)] transform hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_20px_rgba(70,0,120,0.6)] transition-all duration-300 ease-in-out"
    aria-label="Next Page"
  >
    <FaArrowRight className="text-lg" />
  </button>
</div>


    </div>
  );
}

export default App;


// import React, { useRef, useEffect } from "react";
// import HTMLFlipBook from "react-pageflip";
// import SpiralBinding from "./components/SpiralBinding";
// import BookCover from "./components/BookCover";
// import IndexPage from "./components/IndexPage";
// import AboutPage from "./components/AboutPage";
// import SkillsPage from "./components/SkillsPage";
// import ProjectsPage from "./components/ProjectsPage";
// import AchievementPage from "./components/AchievementPage";
// import GalleryPage from "./components/GalleryPage";
// import TestimonialsPage from "./components/TestimonialsPage";
// import ContactPage from "./components/ContactPage";
// import BackCover from "./components/BackCoverPage";

// function App() {
//   const bookRef = useRef();

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "ArrowRight") {
//         bookRef.current.pageFlip().flipNext();
//       } else if (e.key === "ArrowLeft") {
//         bookRef.current.pageFlip().flipPrev();
//       }
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, []);

//   return (
//     <div className="app-container">
//    <div className="relative w-full h-full overflow-hidden">
//   <SpiralBinding />

//   <div className="wrapper relative z-10 w-full h-full pl-10 "> {/* 🔧 Removed pl-10 */}
//     <HTMLFlipBook
//       ref={bookRef}
//       width={window.innerWidth}
//       height={window.innerHeight}
//       size="fixed"
//       showCover={true}
//       flippingTime={1200}
//       useMouseEvents={true}
//       mobileScrollSupport={true}
//       drawShadow={true}
//       maxShadowOpacity={0.5}
//       startPage={0}
//       className="drawing-book"
//       style={{ boxShadow: "0 0 15px rgba(0,0,0,0.3)" }}
//     >
//       <BookCover />
//       <IndexPage />
//       <AboutPage />
//       <SkillsPage />
//       <ProjectsPage />
//       <AchievementPage />
//       <GalleryPage />
//       <TestimonialsPage />
//       <ContactPage />
//       <BackCover />
//     </HTMLFlipBook>
//   </div>
// </div>
// </div>

//   );
// }

// export default App;


// import React, { useRef } from "react";
// import HTMLFlipBook from "react-pageflip";
// import SpiralBinding from "./components/SpiralBinding";
// import BookCover from "./components/BookCover";
// import IndexPage from "./components/IndexPage";
// import AboutPage from "./components/AboutPage";
// import SkillsPage from "./components/SkillsPage";
// import ProjectsPage from "./components/ProjectsPage";
// import AchievementPage from "./components/AchievementPage";
// import GalleryPage from "./components/GalleryPage";
// import TestimonialsPage from "./components/TestimonialsPage";
// import ContactPage from "./components/ContactPage";
// import BackCover from "./components/BackCoverPage";

// function App() {
//   const bookRef = useRef();

//   // Optional: if you want to manually trigger on full-area clicks (advanced)
//   const handlePageClick = (e) => {
//     const clickX = e.clientX;
//     const screenWidth = window.innerWidth;

//     if (!bookRef.current) return;

//     if (clickX < screenWidth / 2) {
//       bookRef.current.pageFlip().flipPrev();
//     } else {
//       bookRef.current.pageFlip().flipNext();
//     }
//   };

//   return (
//     <div className="relative w-full h-full overflow-hidden">
//       <SpiralBinding />

//       {/* ✅ Transparent layer to detect click anywhere for realistic flipping */}
//       <div
//         className="absolute top-0 left-0 w-full h-full z-20"
//         onClick={handlePageClick}
//       />

//       <div className="wrapper relative z-10 w-full h-full pl-10">
//         <HTMLFlipBook
//           ref={bookRef}
//           width={window.innerWidth}
//           height={window.innerHeight}
//           size="fixed"
//           showCover
//           usePortrait
//           flippingTime={800}
//           useMouseEvents
//           mobileScrollSupport
//           drawShadow
//           maxShadowOpacity={0.5}
//           className="drawing-book"
//         >
//           <BookCover />
//           <IndexPage />
//           <AboutPage />
//           <SkillsPage />
//           <ProjectsPage />
//           <AchievementPage />
//           <GalleryPage />
//           <TestimonialsPage />
//           <ContactPage />
//           <BackCover />
//         </HTMLFlipBook>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useRef } from "react";
// import HTMLFlipBook from "react-pageflip";
// import SpiralBinding from "./components/SpiralBinding";
// import BookCover from "./components/BookCover";
// import IndexPage from "./components/IndexPage";
// import AboutPage from "./components/AboutPage";
// import SkillsPage from "./components/SkillsPage";
// import ProjectsPage from "./components/ProjectsPage";
// import AchievementPage from "./components/AchievementPage";
// import GalleryPage from "./components/GalleryPage";
// import TestimonialsPage from "./components/TestimonialsPage";
// import ContactPage from "./components/ContactPage";
// import BackCover from "./components/BackCoverPage";

// function App() {
//   const bookRef = useRef();

//   const goNext = () => bookRef.current.pageFlip().flipNext("bottom");
//   const goPrev = () => bookRef.current.pageFlip().flipPrev("bottom");

//   return (
//     <div className="relative w-full h-full overflow-hidden">
//       <SpiralBinding />

      

//       <div className="wrapper relative z-10 w-full h-full pl-10">
//         <HTMLFlipBook
//           ref={bookRef}
//           width={window.innerWidth}
//           height={window.innerHeight}
//           size="fixed"
//           showCover
//           usePortrait
//           flippingTime={800}
//           useMouseEvents
//           mobileScrollSupport
//           drawShadow
//           maxShadowOpacity={0.5}
//           className="drawing-book"
//         >
//           <BookCover />
//           <IndexPage />
//           <AboutPage />
//           <SkillsPage />
//           <ProjectsPage />
//           <AchievementPage />
//           <GalleryPage />
//           <TestimonialsPage />
//           <ContactPage />
//           <BackCover />
//         </HTMLFlipBook>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import HTMLFlipBook from "react-pageflip";


// import "./App.css";

// import BookCover from "./components/BookCover";
// import IndexPage from "./components/IndexPage";  
// import AboutPage from "./components/AboutPage";
// import SkillsPage from "./components/SkillsPage";
// import ProjectsPage from "./components/ProjectsPage";
// import AchievementPage from "./components/AchievementPage";
// import GalleryPage from "./components/GalleryPage";
// import ContactPage from "./components/ContactPage";
// import BackCover from "./components/BackCoverPage";
// import TestimonialsPage from "./components/TestimonialsPage";
// import SpiralBinding from "./components/SpiralBinding";

// function App() {
//   return (
    
//     // ✅ CHANGED: bg-white → bg-[#0a1930] to prevent white flash
//     <div className="relative w-full h-full overflow-hidden pl-8">
    
//       {/* Spiral Binding on Left */}
//       {/* <div className="absolute left-0 top-0 h-full w-[80px] z-50 pointer-events-none">
//     <div className="absolute left-0 top-0 h-full w-[80px] z-50 pointer-events-none">
//   <svg
//     width="100%"
//     height="100%"
//     viewBox="0 0 80 3000"
//     preserveAspectRatio="none"
//     className="w-full h-full"
//   >
//     <defs>
//       <linearGradient id="spiralMetal" x1="0%" y1="0%" x2="100%" y2="0%">
//         <stop offset="0%" stopColor="#ffffff" />
//         <stop offset="100%" stopColor="#dcdcdc" />
//       </linearGradient>

//       <filter id="spiralShadow">
//         <feDropShadow dx="1" dy="2" stdDeviation="1.2" floodColor="#aaa" />
//       </filter>
//     </defs>

//     {Array.from({ length: 32 }).map((_, i) => {
//       const y = i * 85 + 40;
//       return (
//         <g key={`hole-${i}`}>
//           <circle cx="40" cy={y} r="7" fill="white" />
//           <circle cx="40" cy={y} r="5" fill="#222" />
//         </g>
//       );
//     })}

//     <g
//       stroke="url(#spiralMetal)"
//       strokeWidth="4"
//       fill="none"
//       filter="url(#spiralShadow)"
//     >
//       {Array.from({ length: 32 }).map((_, i) => {
//         const y = i * 85 + 40;
//         return (
//           <path
//             key={`wire-${i}`}
//             d={`M40,${y - 8} C70,${y - 8} 70,${y + 8} 40,${y + 8} C10,${y + 8} 10,${y + 28} 40,${y + 28}`}
//             strokeLinecap="round"
//           />
//         );
//       })}
//     </g>
//   </svg>
// </div>

//   </div> */}

//       {/* <div className="absolute left-0 top-0 h-full w-[80px] z-[10] pointer-events-none">
//         <svg
//           width="100%"
//           height="100%"
//           viewBox="0 0 80 3000"
//           preserveAspectRatio="none"
//           className="w-full h-full"
//         >
//           <defs>
            
//             <linearGradient id="spiralMetal" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop offset="0%" stopColor="#ffffff" />
//               <stop offset="100%" stopColor="#dcdcdc" />
//             </linearGradient>

           
//             <filter id="spiralShadow">
//               <feDropShadow dx="1" dy="2" stdDeviation="1.2" floodColor="#aaa" />
//             </filter>
//           </defs>

         
//           {Array.from({ length: 32 }).map((_, i) => {
//             const y = i * 85 + 40;
//             return (
//               <g key={`hole-${i}`}>
//                 <circle cx="40" cy={y} r="7" fill="white" />
//                 <circle cx="40" cy={y} r="5" fill="#222" />
//               </g>
//             );
//           })}

         
//           <g stroke="url(#spiralMetal)" strokeWidth="4" fill="none" filter="url(#spiralShadow)">
//             {Array.from({ length: 32 }).map((_, i) => {
//               const y = i * 85 + 40;
//               return (
//                 <path
//                   key={`wire-${i}`}
//                   d={`M40,${y - 8} C70,${y - 8} 70,${y + 8} 40,${y + 8} C10,${y + 8} 10,${y + 28} 40,${y + 28}`}
//                   strokeLinecap="round"
//                 />
//               );
//             })}
//           </g>
//         </svg>
//       </div> */}
    
//       <SpiralBinding/>
//       {/* 📘 Flipbook Content */}
//       <div className="wrapper relative z-10 w-full h-full">
//         <HTMLFlipBook
//           width={window.innerWidth}
//           height={window.innerHeight}
//           minWidth={window.innerWidth}
//           maxWidth={window.innerWidth}
//           minHeight={window.innerHeight}
//           maxHeight={window.innerHeight}
//           size="fixed"
//           showCover={true}
//           usePortrait={true}
//           flippingTime={1000}
//           useMouseEvents={true}
//           mobileScrollSupport={true}
//           maxShadowOpacity={0}
//           drawShadow={false}
//           className="drawing-book"
//         >
//           <BookCover />
          
//           <IndexPage /> 
//           <AboutPage />
//           <SkillsPage />
//           <ProjectsPage />
//           <AchievementPage />
//           <GalleryPage />
//           {/* <div 
//           className = "bg-[#fffdef]"
          
//           TestimonialsPage /> */}
//           <TestimonialsPage />
           
          

//           <ContactPage />
          
//            <BackCover />

//         </HTMLFlipBook>
       
        
//       </div>
//     </div>
     
        
//   );
// }

// export default App;

// import React from "react";
// import HTMLFlipBook from "react-pageflip";
// import "./App.css";

// import BookCover from "./components/BookCover";
// import IndexPage from "./components/IndexPage";  
// import AboutPage from "./components/AboutPage";
// import SkillsPage from "./components/SkillsPage";
// import ProjectsPage from "./components/ProjectsPage";
// import ContactPage from "./components/ContactPage";
// import BackCover from "./components/BackCoverPage";
// import BindingSpiral from "./components/spiralbinding";

// function App() {
//   return (
//     <div className="relative w-screen h-screen overflow-hidden bg-white">
// {/* Spiral Binding on Left */}
// <div className="absolute left-0 top-0 h-full w-[80px] z-[10] pointer-events-none">
//   <svg
//     width="100%"
//     height="100%"
//     viewBox="0 0 80 3000"
//     preserveAspectRatio="none"
//     className="w-full h-full"
//   >
//     <defs>
//       {/* Metallic wire look */}
//       <linearGradient id="spiralMetal" x1="0%" y1="0%" x2="100%" y2="0%">
//         <stop offset="0%" stopColor="#ffffff" />
//         <stop offset="100%" stopColor="#dcdcdc" />
//       </linearGradient>

//       {/* Soft drop shadow for spiral */}
//       <filter id="spiralShadow">
//         <feDropShadow dx="1" dy="2" stdDeviation="1.2" floodColor="#aaa" />
//       </filter>
//     </defs>

//     {/* Punched Holes */}
//     {Array.from({ length: 32 }).map((_, i) => {
//       const y = i * 85 + 40;
//       return (
//         <g key={`hole-${i}`}>
//           {/* Outer white ring */}
//           <circle cx="40" cy={y} r="7" fill="white" />
//           {/* Inner dark cut */}
//           <circle cx="40" cy={y} r="5" fill="#222" />
//         </g>
//       );
//     })}

//     {/* Spiral Binding */}
//     <g stroke="url(#spiralMetal)" strokeWidth="4" fill="none" filter="url(#spiralShadow)">
//       {Array.from({ length: 32 }).map((_, i) => {
//         const y = i * 85 + 40;
//         return (
//           <path
//             key={`wire-${i}`}
//             d={`M40,${y - 8} C70,${y - 8} 70,${y + 8} 40,${y + 8} C10,${y + 8} 10,${y + 28} 40,${y + 28}`}
//             strokeLinecap="round"
//           />
//         );
//       })}
//     </g>
//   </svg>
// </div>






//       {/* 📘 Flipbook Content */}
//       <div className="wrapper relative z-10 w-full h-full">
//         <HTMLFlipBook
//           width={window.innerWidth}
//           height={window.innerHeight}
//           minWidth={window.innerWidth}
//           maxWidth={window.innerWidth}
//           minHeight={window.innerHeight}
//           maxHeight={window.innerHeight}
//           size="fixed"
//           showCover={true}
//           usePortrait={true}
//           flippingTime={1000}
//           useMouseEvents={true}
//           mobileScrollSupport={true}
//           maxShadowOpacity={0}
//           drawShadow={false}
//           className="drawing-book"
//         >
//           <BookCover />
//           <IndexPage /> 
//           <AboutPage />
//           <SkillsPage />
//           <ProjectsPage />
//           <ContactPage />
//           <BackCover />
//         </HTMLFlipBook>
//       </div>
//     </div>
//   );
// }

// export default App;










// // import React from "react";
// // import HTMLFlipBook from "react-pageflip";
// // import "./App.css";

// // import BookCover from "./components/BookCover";
// // import AboutPage from "./components/AboutPage";
// // import SkillsPage from "./components/SkillsPage";
// // import ProjectsPage from "./components/ProjectsPage";
// // import ContactPage from "./components/ContactPage";
// // import BackCover from "./components/BackCoverPage";
// // console.log("BookCover:", BookCover);
// // console.log("AboutPage:", AboutPage);
// // console.log("SkillsPage:", SkillsPage);


// // function App() {
// //   return (
// //     <div className="wrapper">
// //       <HTMLFlipBook
// //         width={window.innerWidth}
// //         height={window.innerHeight}
// //         minWidth={window.innerWidth}
// //         maxWidth={window.innerWidth}
// //         minHeight={window.innerHeight}
// //         maxHeight={window.innerHeight}
// //         size="fixed"
// //         showCover={true}
// //         usePortrait={true}
// //         flippingTime={1000}
// //         useMouseEvents={true}
// //         mobileScrollSupport={true}
// //         maxShadowOpacity={0}
// //         drawShadow={false}
// //         className="drawing-book"
// //       >
// //         <BookCover />
// //         <AboutPage />
// //         <SkillsPage />
// //         <ProjectsPage />
// //         <ContactPage />
// //         <BackCover />
// //       </HTMLFlipBook>
// //     </div>
// //   );
// // }

// export default App;
