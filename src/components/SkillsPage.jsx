import React from "react";
import SkillBook from "./SkillBook";

const SkillPage = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-screen h-screen bg-[#fffdef] text-black flex flex-col justify-start px-4 sm:px-8 md:px-20 py-8 sm:py-10 md:py-12 font-serif border-l-[4px] border-r-[4px] border-[#702283] overflow-y-auto"
    >
      {/* Heading */}
      <div className="mb-8 sm:mb-10 text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#702283] drop-shadow-md">
          My Skills
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-light text-gray-700 mt-2 italic">
          Technologies and tools I use regularly.
        </p>
      </div>

      {/* Skill Books Grid */}
      <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-10 justify-center">
        <SkillBook
          logo="/react.png"
          title="React"
          description="A JS library for building elegant UIs. I use it for all frontend work."
        />
        <SkillBook
          logo="/python.png"
          title="Python"
          description="A powerful language I use for scripting, logic, and automation."
        />
        <SkillBook
          logo="/leetcode.png"
          title="LeetCode"
          description="I practice DSA regularly to build strong problem-solving skills."
        />
        <SkillBook
          logo="/git.png"
          title="Git"
          description="Version control system to manage code and collaborate efficiently."
        />
        <SkillBook
          logo="/css.png"
          title="CSS"
          description="Styles my websites beautifully using modern layouts and effects."
        />
        <SkillBook
          logo="/github.png"
          title="GitHub"
          description="I host, share, and collaborate on all my projects using GitHub."
        />
        <SkillBook
          logo="/dj.png"
          title="Django"
          description="A high-level Python web framework for rapid backend development."
        />
        <SkillBook
          logo="/tailwind.png"
          title="Tailwind CSS"
          description="A utility-first CSS framework I use to style modern UIs quickly."
        />
        <SkillBook
          logo="/mysql.png"
          title="MySQL"
          description="A relational database system I use to store and query structured data."
        />
        <SkillBook
          logo="/hackerrank.png"
          title="HackerRank"
          description="I use it to solve coding problems and participate in contests."
        />
      </div>
    </div>
  );
});

export default SkillPage;

// import React from "react";
// import SkillBook from "./SkillBook";

// const SkillPage = React.forwardRef((props, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="w-screen h-screen bg-[#fffdef] text-black flex flex-col justify-center px-10 md:px-20 py-12 font-serif border-l-[4px] border-r-[4px] border-[#702283]"
//     >
//       {/* Heading */}
//       <div className="mb-10">
//         <h2 className="text-4xl font-extrabold text-[#702283] drop-shadow-md">My Skills</h2>
//         <p className="text-xl font-light text-gray-700 mt-2 italic">
//           Technologies and tools I use regularly.
//         </p>
//       </div>

//       {/* Skill Books Grid */}
//       <div className="flex flex-wrap gap-10 justify-center">
//         <SkillBook
//           logo="/react.png"
//           title="React"
//           description="A JS library for building elegant UIs. I use it for all frontend work."
//         />
//         <SkillBook
//           logo="/python.png"
//           title="Python"
//           description="A powerful language I use for scripting, logic, and automation."
//         />
//         <SkillBook
//           logo="/leetcode.png"
//           title="LeetCode"
//           description="I practice DSA regularly to build strong problem-solving skills."
//         />
//         <SkillBook
//           logo="/git.png"
//           title="Git"
//           description="Version control system to manage code and collaborate efficiently."
//         />
//         <SkillBook
//           logo="/css.png"
//           title="CSS"
//           description="Styles my websites beautifully using modern layouts and effects."
//         />
//         <SkillBook
//           logo="/github.png"
//           title="GitHub"
//           description="I host, share, and collaborate on all my projects using GitHub."
//         />
//         <SkillBook
//           logo="/dj.png"
//           title="Django"
//           description="A high-level Python web framework for rapid backend development."
//         />
//         <SkillBook
//           logo="/tailwind.png"
//           title="Tailwind CSS"
//           description="A utility-first CSS framework I use to style modern UIs quickly."
//         />
//         <SkillBook
//           logo="/mysql.png"
//           title="MySQL"
//           description="A relational database system I use to store and query structured data."
//         />
//         <SkillBook
//           logo="/public/hackerrank.png"
//           title="HackerRank"
//           description="I use it to solve coding problems and participate in contests."
//         />
//       </div>
//     </div>
//   );
// });

// export default SkillPage;

// import React from "react";
// import SkillBook from "./SkillBook";

// const SkillPage = React.forwardRef((props, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="w-screen h-screen bg-[#fffdef] text-black flex flex-col justify-center px-10 md:px-20 py-12 font-serif  border-l-[4px] border-r-[4px] border-[#702283] "
//     >
//       {/* Heading */}
//       <h2 className="text-4xl font-bold mb-20 text-[#702283] tracking-wide">
//         My Skills
//       </h2>

//       {/* Skill Books Grid */}
//       <div className="flex flex-wrap gap-10 justify-center ">
//         <SkillBook
//           logo="/react.png"
//           title="React"
//           description="A JS library for building elegant UIs. I use it for all frontend work."
//         />
//         <SkillBook
//           logo="/python.png"
//           title="Python"
//           description="A powerful language I use for scripting, logic, and automation."
//         />
//         <SkillBook
//           logo="/leetcode.png"
//           title="LeetCode"
//           description="I practice DSA regularly to build strong problem-solving skills."
//         />
//         <SkillBook
//           logo="/git.png"
//           title="Git"
//           description="Version control system to manage code and collaborate efficiently."
//         />
//         {/* <SkillBook
//           logo="/html.png"
//           title="HTML"
//           description="The structural foundation of all websites and applications."
//         /> */}
//         <SkillBook
//           logo="/css.png"
//           title="CSS"
//           description="Styles my websites beautifully using modern layouts and effects."
//         />
//         <SkillBook
//           logo="/github.png"
//           title="GitHub"
//           description="I host, share, and collaborate on all my projects using GitHub."
//         />
//         <SkillBook
//           logo="/dj.png"
//           title="Django"
//           description="A high-level Python web framework for rapid backend development."
//         />
//         <SkillBook
//           logo="/tailwind.png"
//           title="Tailwind CSS"
//           description="A utility-first CSS framework I use to style modern UIs quickly."
//         />
//         <SkillBook
//           logo="/mysql.png"
//           title="MySQL"
//           description="A relational database system I use to store and query structured data."
//         />
//         <SkillBook
//           logo="/public/hackerrank.png"
//           title="HackerRank"
//           description="I use it to solve coding problems and participate in contests."
//         />
//       </div>
//     </div>
//   );
// });

// export default SkillPage;

// import React from "react";
// import SkillBook from "./SkillBook";

// const SkillPage = React.forwardRef((props, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="page w-full h-full bg-[#fffdef] text-white flex flex-col items-center justify-center px-6 py-10"
//     >
//       {/* Heading */}
//       <h2 className="text-5xl font-bold mb-12 text-[#0a1930] tracking-wide">
//         My Skills
//       </h2>

//       {/* Mini Books Section */}
//       <div className="flex flex-wrap gap-10 justify-center">
//         <SkillBook
//           logo="/react.jpeg"
//           title="React"
//           description="A JS library for building elegant UIs. I use it for all frontend work."
//         />
//         <SkillBook
//           logo="/python.png"
//           title="Python"
//           description="A powerful programming language. I use it for logic, scripting, and automation."
//         />
//         <SkillBook
//           logo="/leetcode.png"
//           title="LeetCode"
//           description="I practice DSA regularly to build strong problem-solving skills."
//         />
//         <SkillBook
//           logo="/git.png"
//           title="Git"
//           description="Version control system I use to track and manage my code history."
//         />
//         <SkillBook
//           logo="/html.png"
//           title="HTML"
//           description="The structure of every webpage. I use semantic HTML in all projects."
//         />
//         <SkillBook
//           logo="/css.png"
//           title="CSS"
//           description="I style my websites beautifully using modern CSS and layouts."
//         />
//       </div>
//     </div>
//   );
// });

// export default SkillPage;

// // // // src/components/SkillPage.jsx
// // // import React from "react";
// // // import SkillBook from "./SkillBook";

// // // const SkillPage = () => {
// // //   return (
// // //     <div className="w-screen h-screen bg-[#0a1930] text-white px-10 py-16 flex flex-col items-center">
// // //       {/* Heading */}
// // //       <h2 className="text-5xl font-bold mb-12 text-[#7EAFFF] tracking-wide">
// // //         My Skills
// // //       </h2>

// // //       {/* Skill Books */}
// // //       <div className="flex flex-wrap justify-center gap-10">
// // //         <SkillBook
// // //           logo="/react.jpeg"
// // //           title="React.js"
// // //           description="A powerful JavaScript library for building UIs with reusable components."
// // //         />
// // //         {/* Add more SkillBook components below as needed */}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SkillPage;


// // // components/Skills.jsx
// // import React from "react";
// // import SkillBook from "./SkillBook";


// // import reactLogo from "../assets/logos/react.png";

// // const Skills = () => {
// //   const skills = [
    
// //     {
// //       logo: reactLogo,
// //       title: "React",
// //       description: "A JavaScript library for building user interfaces.",
// //     },
// //   ];

// //   return (
// //     <div className="w-screen h-screen bg-[#FCFCF6] flex flex-col items-center justify-center px-6 py-10">
// //       <h2 className="text-4xl font-bold mb-10 text-[#111]">My Skills</h2>
// //       <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
// //         {skills.map((skill, index) => (
// //           <SkillBook
// //             key={index}
// //             logo={skill.logo}
// //             title={skill.title}
// //             description={skill.description}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Skills;

// // import React from "react";
// // import SkillBook from "./SkillBook";


// // const SkillsPage = React.forwardRef((props, ref) => {
// //   return (
// //     <div
// //   ref={ref}
// //   className="page w-screen h-screen bg-[#fffdef] text-black flex flex-col justify-center px-10 py-10 overflow-hidden"
// // >
// //       <SkillBook
// //         logo="/react.jpeg"
// //         title="React"
// //         description="A JavaScript library for building user interfaces."
// //       />
// //     </div>
// //   );
// // });

// // export default SkillsPage;

// // import React from "react";
// // import SkillBook from "./SkillBook";

// // const SkillPage = React.forwardRef((props, ref) => {
// //   return (
// //     <div
// //       ref={ref}
// //       className="page w-screen h-screen bg-[#fffdef] text-white flex items-center justify-center"
// //     >
// //       <SkillBook
// //         logo="/react.jpeg"
// //         title="React"
// //         description="A JS library for building elegant UIs. I use it for all frontend work."
// //       />
// //     </div>
// //   );
// // });

// // export default SkillPage;


