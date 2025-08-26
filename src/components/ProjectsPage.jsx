import React, { useState } from "react";

const ProjectsPage = React.forwardRef((props, ref) => {
  const projects = [
    {
      title: "EngiTrack - Skill Tracker",
      description:
        "A Django-based platform to help engineering students track and showcase their technical skills.",
      videoSrc: "/EnggiTrack.mp4",
    },
    {
      title: "FlipBook Portfolio",
      description:
        "An interactive React flipbook-style portfolio with realistic animations.",
      videoSrc: "path_to_your_video_2.mp4",
    },
    {
      title: "CareerXpert",
      description:
        "A responsive platform on which a candidate can prepare for their job interviews and can be prepare for their coding rounds.",
      videoSrc: "path_to_your_video_3.mp4",
    },
  ];

  const [activeProject, setActiveProject] = useState(null);

  return (
    <div
      ref={ref}
      className="w-screen h-screen bg-[#fffdef] text-[#1c1c1c] flex flex-col justify-center px-10 md:px-20 py-12 font-serif border-l-[4px] border-r-[4px] border-[#702283]"
    >
      {/* Section Header */}
      <div className="mb-10">
        <h2 className="text-4xl font-extrabold text-[#702283] drop-shadow-md">
          Projects
        </h2>
        <p className="text-xl font-light text-gray-700 mt-2 italic">
          Check out my recent work in web development and data visualization.
        </p>
      </div>

      {/* Projects Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-r from-[#c8b6ff] via-[#ddbdfc] to-[#f3c4fb] rounded-xl min-h-[140px] flex flex-col justify-between shadow-lg transition-transform hover:-translate-y-1 duration-300"
          >
            {/* Play Button + Title */}
            <div className="flex items-center gap-3 mb-2 px-6 pt-6">
              <div
                onMouseEnter={() => setActiveProject(project)}
                className="w-8 h-8 flex items-center justify-center bg-[#4a2377] text-white rounded-full hover:bg-[#b80257] transition-transform hover:scale-110 cursor-pointer"
                title="Preview Video"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.271 4.055a.5.5 0 0 1 .52.038l4.5 3a.5.5 0 0 1 0 .814l-4.5 3A.5.5 0 0 1 6 10.5v-6a.5.5 0 0 1 .271-.445z" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-[#4a2377]">
                {project.title}
              </span>
            </div>
            <p className="text-sm text-gray-800 px-6 pb-6">{project.description}</p>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg p-6 max-w-3xl w-full shadow-xl relative flex flex-col items-center">
            <button
              className="absolute top-2 left-1/2 -translate-x-1/2 text-sm font-semibold text-gray-600 hover:text-red-600"
              onClick={() => setActiveProject(null)}
              title="Click to close"
            >
              Close
            </button>

            <h3 className="text-xl font-semibold text-center text-[#4a2377] mb-2 mt-4">
              {activeProject.title}
            </h3>
            <p className="text-sm text-gray-800 text-center mb-4">
              {activeProject.description}
            </p>
            <video
              src={activeProject.videoSrc}
              controls
              autoPlay
              className="w-full max-h-[60vh] mx-auto rounded-md shadow-md"
            />
          </div>
        </div>
      )}
    </div>
  );
});

export default ProjectsPage;

// import React, { useState } from "react";

// const ProjectsPage = React.forwardRef((props, ref) => {
//   const projects = [
//     {
//       title: "EngiTrack - Skill Tracker",
//       description:
//         "A Django-based platform to help engineering students track and showcase their technical skills.",
//       videoSrc: "path_to_your_video_1.mp4",
//     },
//     {
//       title: "FlipBook Portfolio",
//       description:
//         "An interactive React flipbook-style portfolio with realistic animations.",
//       videoSrc: "path_to_your_video_2.mp4",
//     },
//     {
//       title: "CodeQuiz Web App",
//       description:
//         "A responsive quiz platform for practicing coding concepts with real-time feedback.",
//       videoSrc: "path_to_your_video_3.mp4",
//     },
//   ];

//   const [activeProject, setActiveProject] = useState(null);

//   return (
//     <div
//       ref={ref}
//       className="page bg-[#fefaf5] text-[#1c1c1c] py-10 flex flex-col"
//     >
//       {/* Section Header */}
//       <h2 className="text-4xl font-extrabold text-[#4a2377] mb-2 pl-6">
//         Projects
//       </h2>

//       <p className="text-base mb-8 text-[#3a3a3a] pl-6">
//         Check out my recent work in web development and data visualization.
//       </p>

//       {/* Projects Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-4">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="relative bg-gradient-to-r from-[#c8b6ff] via-[#ddbdfc] to-[#f3c4fb] rounded-xl min-h-[140px] flex flex-col justify-between shadow-lg transition-transform hover:-translate-y-1 duration-300"
//           >
//             {/* Play Button + Title Together */}
//             <div className="flex items-center gap-3 mb-2 px-6 pt-6">
//               <div
//                 onMouseEnter={() => setActiveProject(project)}
//                 className="w-8 h-8 flex items-center justify-center bg-[#4a2377] text-white rounded-full hover:bg-[#b80257] transition-transform hover:scale-110 cursor-pointer"
//                 title="Preview Video"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-4 h-4"
//                   fill="currentColor"
//                   viewBox="0 0 16 16"
//                 >
//                   <path d="M6.271 4.055a.5.5 0 0 1 .52.038l4.5 3a.5.5 0 0 1 0 .814l-4.5 3A.5.5 0 0 1 6 10.5v-6a.5.5 0 0 1 .271-.445z" />
//                 </svg>
//               </div>

//               <span className="text-lg font-semibold text-[#4a2377]">
//                 {project.title}
//               </span>
//             </div>

//             <p className="text-sm text-gray-800 px-6 pb-6">{project.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Video Modal */}
//       {activeProject && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4">
//           <div className="bg-white rounded-lg p-6 max-w-3xl w-full shadow-xl relative flex flex-col items-center">
//             <button
//               className="absolute top-2 left-1/2 -translate-x-1/2 text-sm font-semibold text-gray-600 hover:text-red-600"
//               onClick={() => setActiveProject(null)}
//               title="Click to close"
//             >
//               Close
//             </button>

//             <h3 className="text-xl font-semibold text-center text-[#4a2377] mb-2 mt-4">
//               {activeProject.title}
//             </h3>
//             <p className="text-sm text-gray-800 text-center mb-4">
//               {activeProject.description}
//             </p>
//             <video
//               src={activeProject.videoSrc}
//               controls
//               autoPlay
//               className="w-full max-h-[60vh] mx-auto rounded-md shadow-md"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// });

// export default ProjectsPage;
