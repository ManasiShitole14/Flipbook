import React from "react";

const AboutPage = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-screen h-screen bg-[#fffdef] text-black flex flex-col md:flex-row justify-center items-start md:items-center px-6 sm:px-10 md:px-20 py-8 md:py-12 font-serif relative border-l-[4px] border-r-[4px] border-[#702283] overflow-hidden"
    >
      {/* Left - About Text */}
      <div className="w-full md:w-1/2 md:pr-10 z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#702283]">Who I'm ?</h2>
        <p className="text-sm sm:text-base md:text-lg leading-7 sm:leading-8 md:leading-10 font-light text-justify text-[#0c2233] mt-6 sm:mt-10">
          Hi! I'm <span className="text-[#702283] font-semibold">Manasi Shitole</span>, a passionate and creative tech explorer, currently pursuing my 3rd year in engineering.
          I enjoy building visually elegant user interfaces and combining creativity with functionality.
          <br /><br />
          From front-end development to crafting real-book-style portfolios like this one, I believe in giving life to ideas through code.
          Outside of coding, I find joy in sketching, learning, and occasionally sipping coffee with books.
        </p>
        <div className="mt-6 sm:mt-8">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 text-sm sm:text-base text-white bg-[#702283] hover:bg-[#702283] rounded-md shadow-md transition duration-300 font-medium"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Right - Profile Photo */}
      <div className="hidden md:block absolute right-4 lg:right-11 top-1/2 transform -translate-y-1/2 pr-8 lg:pr-20">
        <img
          src="/profile photo.png"
          alt="Manasi Shitole"
          className="w-[16rem] h-[14rem] md:w-[20rem] md:h-[18rem] lg:w-[24rem] lg:h-[20rem] object-contain"
        />
      </div>

      {/* Show profile photo in mobile view below the text */}
      <div className="md:hidden mt-10 w-full flex justify-center">
        <img
          src="/profile photo.png"
          alt="Manasi Shitole"
          className="w-[14rem] h-[12rem] sm:w-[16rem] sm:h-[14rem] object-contain"
        />
      </div>
    </div>
  );
});

export default AboutPage;

// // import React from "react";

// // const AboutPage = React.forwardRef((props, ref) => {
// //   return (
// //     <div
// //       ref={ref}
// //       className="page w-screen h-screen bg-[#0a1930] text-white flex items-center px-16 py-10 relative overflow-hidden"
// //     >
// //       {/* Left - Content */}
// //       <div className="w-1/2 pr-10 z-10">
// //         <h2 className="text-5xl font-bold mb-6 text-[#F68CB9]">Who I'm</h2>
// //         <p className="text-lg leading-8 font-light text-justify">
// //           Hi! I'm <span className="text-[#FF460F] font-semibold">Manasi Shitole</span>, a passionate and creative tech explorer, currently pursuing my 3rd year in engineering.
// //           I enjoy building visually elegant user interfaces and combining creativity with functionality.
// //           <br /><br />
// //           From front-end development to crafting real-book-style portfolios like this one, I believe in giving life to ideas through code.
// //           Outside of coding, I find joy in sketching, learning, and occasionally sipping coffee with books.
// //         </p>
// //       </div>

// //       {/* Right - Image (absolute to screen's right edge) */}
// //       <div className="absolute right-10 top-1/2 -translate-y-1/2">
// //         <img
// //           src="/images/mypic.png"
// //           alt="Manasi Shitole"
// //           className="w-80 h-80 object-cover rounded-2xl shadow-xl border-4 border-[#F68CB9]"
// //         />
// //       </div>
// //     </div>
// //   );
// // });

// // export default AboutPage;


// // import React from "react";

// // const AboutPage = React.forwardRef((props, ref) => {
// //   return (
// //     <div
// //       ref={ref}
// //       className="page min-h-screen w-full bg-[#0a1930] text-white flex items-center justify-between px-6 md:px-16 py-10 overflow-hidden"
// //     >
// //       {/* Left - Text Section */}
// //       <div className="w-full md:w-1/2 md:pr-10">
// //         <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F68CB9]">Who I'm</h2>
// //         <p className="text-base md:text-lg leading-8 font-light text-justify">
// //           Hi! I'm <span className="text-[#FF460F] font-semibold">Manasi Shitole</span>, a passionate and creative tech explorer, currently pursuing my 3rd year in engineering.
// //           I enjoy building visually elegant user interfaces and combining creativity with functionality.
// //           <br /><br />
// //           From front-end development to crafting real-book-style portfolios like this one, I believe in giving life to ideas through code.
// //           Outside of coding, I find joy in sketching, learning, and occasionally sipping coffee with books.
// //         </p>
// //       </div>

// //       {/* Right - Profile Image Fixed to Right Side of Screen */}
// //       <div className="w-full md:w-[40%] flex justify-end items-center">
// //         <img
// //           src="/profile photo.jpg" // Keep this inside your `public` folder
// //           alt="Manasi Shitole"
// //           className="w-80 h-80 object-cover rounded-2xl shadow-xl border-4 border-[#F68CB9]"
// //           loading="eager"
// //         />
// //       </div>
// //     </div>
// //   );
// // });

// // export default AboutPage;


// // // // import React from "react";

// // // // const AboutPage = React.forwardRef((props, ref) => {
// // // //   return (
// // // //     <div
// // // //       ref={ref}
// // // //       className="page w-screen h-screen bg-[#0a1930] text-white flex relative overflow-hidden"
// // // //     >
// // // //       {/* Left - Text */}
// // // //       <div className="w-1/2 p-16 flex flex-col justify-center">
// // // //         <h2 className="text-5xl font-bold mb-6 text-[#F68CB9]">Who I'm</h2>
// // // //         <p className="text-lg leading-8 font-light text-justify">
// // // //           Hi! I'm <span className="text-[#FF460F] font-semibold">Manasi Shitole</span>, a passionate and creative tech explorer, currently pursuing my 3rd year in engineering.
// // // //           I enjoy building visually elegant user interfaces and combining creativity with functionality.
// // // //           <br /><br />
// // // //           From front-end development to crafting real-book-style portfolios like this one, I believe in giving life to ideas through code.
// // // //           Outside of coding, I find joy in sketching, learning, and occasionally sipping coffee with books.
// // // //         </p>
// // // //       </div>

// // // //       {/* Right - Profile Image */}
// // // //       <div className="absolute top-1/2 right-16 transform -translate-y-1/2">
// // // //         <img
// // // //           src="/images/mypic.png"
// // // //           alt="Manasi Shitole"
// // // //           className="w-80 h-80 object-cover rounded-2xl shadow-xl border-4 border-[#F68CB9]"
// // // //         />
// // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // });

// // // // // export default AboutPage;


// // // // // // import React from "react";

// // // // // // const AboutPage = React.forwardRef((props, ref) => {
// // // // // //   return (
// // // // // //     <div
// // // // // //       ref={ref}
// // // // // //       className="page w-screen h-screen bg-[#0a1930] text-white flex relative overflow-hidden"
// // // // // //     >
// // // // // //       {/* Left Side - Text Content */}
// // // // // //       <div className="w-1/2 p-16 flex flex-col justify-center">
// // // // // //         <h2 className="text-5xl font-bold mb-6 text-[#F68CB9]">Who I'm ?</h2>
// // // // // //         <p className="text-lg leading-8 font-light text-justify">
// // // // // //           Hi! I'm <span className="text-[#F68CB9] font-semibold">Manasi Shitole</span>, a passionate and creative tech explorer, currently pursuing my 3rd year in engineering.
// // // // // //           I enjoy building visually elegant user interfaces and combining creativity with functionality.
// // // // // //           <br /><br />
// // // // // //           From front-end development to crafting real-book-style portfolios like this one, I believe in giving life to ideas through code.
// // // // // //           Outside of coding, I find joy in sketching, learning, and occasionally sipping coffee with books.
// // // // // //         </p>
// // // // // //       </div>

// // // // // //       {/* Right Side - Profile Image on the Edge */}
// // // // // //       <div className="absolute top-1/2 right-16 transform -translate-y-1/2">
// // // // // //         <img
// // // // // //           src="/public/profile photo.jpg" // Update path if needed
// // // // // //           alt="Manasi Shitole"
// // // // // //           className="w-80 h-80 object-cover rounded-2xl shadow-xl border-4 border-[#F68CB9]"
// // // // // //         />
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // });

// // // // // // export default AboutPage;


// import React from "react";

// const AboutPage = React.forwardRef((props, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="page w-screen h-screen bg-[#fffdef] text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 overflow-hidden"
//     >
//       {/* Left - About Text */}
//       <div className="w-1/2 px-16 py-10 flex flex-col justify-center space-y-6">
//         <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F68CB9]">Who I'm</h2>
//         <p className="text-base md:text-lg leading-8 font-light text-justify text-[#0c2233]">
//           Hi! I'm <span className="text-[#F68CB9] font-semibold">Manasi Shitole</span>, a passionate and creative tech explorer, currently pursuing my 3rd year in engineering.
//           I enjoy building visually elegant user interfaces and combining creativity with functionality.
//           <br /><br />
//           From front-end development to crafting real-book-style portfolios like this one, I believe in giving life to ideas through code.
//           Outside of coding, I find joy in sketching, learning, and occasionally sipping coffee with books.
//         </p>
//         <div className="mt-8">
//     <a
//   href="/resume.pdf"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="inline-block px-4 py-2 text-sm md:text-base text-white bg-[#F68CB9] hover:bg-[#F68CB9] rounded-md shadow-md transition duration-300 font-medium"
// >
// //   Resume
// // </a>

// //   </div>
// //       </div>

// //       {/* Right - Just the Profile Photo */}
// //       <div className="absolute right-8 top-1/2 transform -translate-y-1/2">

// //         <img
// //           src="/profile photo.jpg" // Update this path as per your file location
// //           alt="Manasi Shitole"
// //           className="w-80 h-80 object-cover rounded-2xl shadow-xl border-4 border-[#F68CB9]"
// //         />
// //       </div>
// //     </div>
// //   );
// // });

// //export default AboutPage;

// // import React from "react";

// // const AboutPage = React.forwardRef((props, ref) => {
// //   return (
// //     <div
// //       ref={ref}
// //       className="page w-screen h-screen bg-[#fffdef] text-white flex items-center justify-between px-16 py-10 overflow-hidden"
// //     >
// //       {/* Left - Content */}
// //       <div className="w-1/2 pr-10">
// //         <h2 className="text-5xl font-bold mb-6 text-[#F68CB9]">Who I'm ?</h2>
// //         <p className="text-lg leading-8 font-light text-justify text-[#0c2233] ">
// //           Hi! I'm <span className="text-[#0c2233] font-semibold">Manasi Shitole</span>, a passionate and creative tech explorer, currently pursuing my 3rd year in engineering.
// //           I enjoy building visually elegant user interfaces and combining creativity with functionality.
// //           <br /><br />
// //           From front-end development to crafting real-book-style portfolios like this one, I believe in giving life to ideas through code.
// //           Outside of coding, I find joy in sketching, learning, and occasionally sipping coffee with books.
// //         </p>
// //       </div>

// //       {/* Right - Image */}
// //       <div className="absolute right-10 top-1/2 -translate-y-1/2">
// //         <img
// //           src="/images/mypic.png" // Make sure your image exists at this path
// //           alt="Manasi Shitole"
// //           className="w-80 h-80 object-cover rounded-2xl shadow-xl border-4 border-[#F68CB9]"
// //         />
// //       </div>
// //     </div>
// //   );
// // });

// // export default AboutPage;

// import React from "react";

// const AboutPage = React.forwardRef((props, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="w-[100vw] h-[100vh] bg-[#3B2F2F] text-white flex flex-row items-center justify-between px-16 py-10 overflow-hidden"
//       style={{ margin: 0, padding: 0 }}
//     >
//       {/* Left Content */}
//       <div className="w-1/2 pr-10">
//         <h2 className="text-5xl font-bold mb-6 text-[#F68CB9]">Who I'm</h2>
//         <p className="text-lg leading-8 font-light text-justify">
//           Hi! I'm <span className="text-[#FF460F] font-semibold">Manasi Shitole</span>, a passionate and creative tech explorer, currently pursuing my 3rd year in engineering.
//           I enjoy building visually elegant user interfaces and combining creativity with functionality.
//           <br /><br />
//           From front-end development to crafting real-book-style portfolios like this one, I believe in giving life to ideas through code.
//           Outside of coding, I find joy in sketching, learning, and occasionally sipping coffee with books.
//         </p>
//       </div>

//       {/* Right Image */}
//       <div className="w-1/2 flex justify-center items-center">
//         <img
//           src="/react.jpeg" // Adjust the path if needed
//           alt="Manasi Shitole"
//           className="w-80 h-80 object-cover rounded-2xl shadow-xl border-4 border-[#F68CB9]"
//         />
//       </div>
//     </div>
//   );
// });

// export default AboutPage;






// // // // // // // // import React from "react";

// // // // // // // // const AboutPage = React.forwardRef((props, ref) => {
// // // // // // // //   return (
// // // // // // // //     <div className="page" ref={ref}>
// // // // // // // //       <h2>About Me</h2>
// // // // // // // //       <p>I’m a passionate developer building meaningful digital experiences.</p>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // });

// // // // // // // // export default AboutPage;
