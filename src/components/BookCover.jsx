import React from "react";

const BookCover = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="relative w-screen h-screen text-black overflow-hidden font-serif bg-[#0a1930]"
    >
      {/* ✅ Background Image */}
      {/* <img
        src="/background.png"
        alt="Background"
        className="absolute w-screen h-full object-fill object-center z-0"
      />

      <div className="absolute text-center z-10 
        left-6 sm:left-12 md:left-[100px] lg:left-[150px] xl:left-[180px] 
        top-[28%] sm:top-[30%]">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 drop-shadow-xl tracking-wider">
          FlipBook
        </h1>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 opacity-20 scale-y-[-1] mt-[-10px]">
          FlipBook
        </h1>
      </div>

      <p className="absolute z-10 
        left-6 sm:left-12 md:left-[100px] lg:left-[150px] xl:left-[180px] 
        top-[calc(33%+70px)] text-base sm:text-lg md:text-xl italic text-slate-200 drop-shadow-md">
        A Flipping Portfolio by Manasiii
      </p>

      <p className="absolute bottom-8 left-8 z-10 text-sm sm:text-base md:text-lg text-slate-100 italic tracking-wide drop-shadow-sm">
        Hover to discover. Click to turn the story.
      </p> */}
    </div>
  );
});

export default BookCover;


// import React from "react";

// const BookCover = React.forwardRef((props, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="relative w-screen h-screen text-black overflow-hidden font-serif bg-[#0a1930]"
//     >
//       {/* ✅ Background Image */}
//       <img
//         src="/background.png"
//         alt="Background"
//         className="absolute w-screen h-full object-fill object-center z-0"
//       />

//       {/* ✅ Title and Reflection */}
//       <div className="absolute text-center z-10 
//         left-6 sm:left-12 md:left-[100px] lg:left-[150px] xl:left-[180px] 
//         top-[28%] sm:top-[30%]">
//         <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 drop-shadow-xl tracking-wider">
//           Flipbook
//         </h1>
//         <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 opacity-20 scale-y-[-1] mt-[-10px]">
//           Flipbook
//         </h1>
//       </div>

//       {/* ✅ Tagline */}
//       <p className="absolute z-10 
//         left-6 sm:left-12 md:left-[100px] lg:left-[150px] xl:left-[180px] 
//         top-[calc(33%+70px)] text-base sm:text-lg md:text-xl italic text-slate-200 drop-shadow-md">
//         Where code meets creativity
//       </p>
//     </div>
//   );
// });

// export default BookCover;

// import React from "react";

// const BookCover = React.forwardRef((props, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="relative w-screen h-screen text-black overflow-hidden font-serif bg-[#0a1930]"
//     >
//       {/* ✅ Background Image */}
//       <img
//         src="/background.png"
//         alt="Background"
//         className="absolute w-screen h-full object-fill object-center z-0"
//       />

//       {/* ✅ Title and Reflection */}
//       <div className="absolute left-[180px] top-[30%] text-center">
//         <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 drop-shadow-xl tracking-wider">
//           Flipbook
//         </h1>
//         <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 opacity-20 scale-y-[-1] mt-[-10px]">
//           Flipbook
//         </h1>
//       </div>

//       {/* ✅ Tagline */}
//       <p className="absolute left-[180px] top-[calc(33%+70px)] text-xl italic text-slate-200 z-10 drop-shadow-md">
//         Where code meets creativity
//       </p>

//       {/* ✅ Email at Bottom Left */}
      

//     </div>
//   );
// });

// export default BookCover;

// import React from "react";

// const BookCover = React.forwardRef((props, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="relative w-screen h-screen text-black overflow-hidden font-serif bg-[#0a1930]" // ✅ Ensure full screen + base bg color
//     >
//       {/* ✅ Background Image */}
//       <img
//         src="/background.png"
//         alt="Background"
//         className="absolute w-screen h-full object-fill object-center z-0"
//       />

//       {/* ✅ Title and Reflection */}
//       <div className="absolute left-[180px] top-[30%] text-center">
//         <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 drop-shadow-xl tracking-wider">
//           Flipbook
//         </h1>
//         <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 opacity-20 scale-y-[-1] mt-[-10px]">
//           Flipbook
//         </h1>
//       </div>

//       {/* ✅ Tagline */}
//       <p className="absolute left-[180px] top-[calc(33%+70px)] text-xl italic text-slate-200 z-10 drop-shadow-md">
//         Where code meets creativity
//       </p>
//     </div>
//   );
// });

// export default BookCover;
