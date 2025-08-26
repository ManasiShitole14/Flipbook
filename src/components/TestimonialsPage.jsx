import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Dr.Sameer Katekar,TPO SKNSCOEK",
    image: "/katekar-sir.png",
    text: "Manasi is a focused and driven student with a strong sense of responsibility. Her consistent efforts, adaptability, and eagerness to grow make her a standout candidate for any opportunity..",
  },
  {
    id: 2,
    name: "Prof.Altaf Mulani,HOD Entc",
    image: "/altaf mulani.png",
    text: "Manasi has always demonstrated a proactive attitude and a genuine passion for learning. Her discipline, creativity, and technical skills reflect her commitment to excellence",
  },
  {
    id: 3,
    name: "Prof.S.V.Pingale,HOD Cse",
    image: "/pingale sir.jpg",
    text: "Manasi is a dedicated and creative student with a strong technical grasp. Her innovative portfolio project reflects her passion and precision. She’s proactive, sincere, and shows great potential for future success."

,
  },
  {
    id: 4,
    name: "Vaishnavi Utpat,Assistant Professor,Entc",
    image: "/utpat-mam.jpg",
    text: "Manasi is a creative, dedicated, and technically strong individual with a proactive mindset. Her quick grasp of complex concepts and passion for innovation make her stand out. She’s truly an asset to any team."
  },
  {
    id: 5,
    name: "Rutuja Kodag,Collaborative Project Partner",
    image: "/rutuja.png",
    text: "Manasi is a dedicated and enthusiastic junior with a strong eagerness to learn. Her curiosity, quick grasp of concepts, and consistent efforts make her stand out as a truly promising individual."
  },
  {
    id: 6,
    name: "Sakshi Patil,Collaborative Project Partner",
    image: "/sakshi.jpg",
    text: "Manasi is a dedicated and creative learner. Her technical skills and eye for design, especially in her portfolio work, are impressive. I’ve seen her grow through projects and tech events, and I’m confident she has a bright future.",
  },
];

const TestimonialsPage = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-full min-h-screen bg-[#fffdef] px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-12 font-serif border-l-[4px] border-r-[4px] border-[#702283]"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 md:mb-10 text-[#702283] tracking-wide text-center sm:text-left">
        Testimonials
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map(({ id, image, name, text }) => (
          <div
            key={id}
            className="bg-white rounded-xl shadow-md p-4 flex items-start gap-4 hover:shadow-xl transition duration-300 border-l-4 border-[#702283] h-auto"
          >
            <img
              src={image}
              alt={name}
              className="w-14 h-14 min-w-14 rounded-full object-cover border-2 border-[#702283] mt-1"
            />
            <div className="overflow-hidden">
              <p className="text-sm text-gray-700 italic leading-tight mb-1">
                “{text}”
              </p>
              <p className="text-sm font-semibold text-[#702283]">- {name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default TestimonialsPage;

// import React from "react";

// const testimonials = [
//   {
//     id: 1,
//     name: "Dr.Sameer Katekar(TPO SKNSCOEK)",
//     image: "https://i.pravatar.cc/150?img=32",
//     text: "Manasi is a focused and driven student with a strong sense of responsibility. Her consistent efforts, adaptability, and eagerness to grow make her a standout candidate for any opportunity..",
//   },
//   {
//     id: 2,
//     name: "Prof.Aksaltaaf Mulani(HOD ENTC)",
//     image: "https://i.pravatar.cc/150?img=45",
//     text: "Manasi has always demonstrated a proactive attitude and a genuine passion for learning. Her discipline, creativity, and technical skills reflect her commitment to excellence",
//   },
//   {
//     id: 3,
//     name: "Priya Desai",
//     image: "https://i.pravatar.cc/150?img=47",
//     text: "Her flipping book portfolio is one of the most unique and beautiful ones I’ve seen!",
//   },
//   {
//     id: 4,
//     name: "Vaishnavi Utpat,Assistant Professor,Entc",
//     image: "https://i.pravatar.cc/150?img=48",
//     text: "Manasi is a creative, dedicated, and technically strong individual with a proactive mindset. Her quick grasp of complex concepts and passion for innovation make her stand out. She’s truly an asset to any team."
//   },
//   {
//     id: 5,
//     name: "Rutuja Kodag,Collaborative Project Partner",
//     image: "https://i.pravatar.cc/150?img=50",
//     text: "Manasi is a dedicated and enthusiastic junior with a strong eagerness to learn. Her curiosity, quick grasp of concepts, and consistent efforts make her stand out as a truly promising individual."
//   },
//   {
//     id: 6,
//     name: "Rohit Mehra",
//     image: "https://i.pravatar.cc/150?img=52",
//     text: "The elegance and realism in her flipping book portfolio blew me away.",
//   },
// ];

// const TestimonialsPage = React.forwardRef((props, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="w-full h-full bg-[#fffdef] px-6 md:px-20 py-12 font-serif border-l-[4px] border-r-[4px] border-[#702283]"
//     >
//       <h2 className="text-3xl font-bold mb-10 text-[#702283] tracking-wide">
//         Testimonials
//       </h2>

//       {/* 3-column grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {testimonials.map(({ id, image, name, text }) => (
//           <div
//             key={id}
//             className="bg-white h-[200px] rounded-xl shadow-md p-3 flex items-start gap-4 hover:shadow-xl transition duration-300 border-l-4 border-[#702283]"
//           >
//             <img
//               src={image}
//               alt={name}
//               className="w-14 h-14 rounded-full object-cover border-2 border-[#702283] mt-1"
//             />
//             <div className="overflow-hidden">
//               <p className="text-sm text-gray-700 italic leading-tight mb-1">
//                 “{text}”
//               </p>
//               <p className="text-sm font-semibold text-[#702283]">- {name}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// });

// export default TestimonialsPage;




// import React from "react";

// const TestimonialsPage = React.forwardRef((props, ref) => {
//   return (
//     <div ref={ref} className="w-full h-full bg-[#fffdef] px-10 md:px-20 py-12 font-serif border-l-[4px] border-r-[4px] border-[#702283]">
//       <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
//       <p>This is the testimonials section.</p>
//     </div>
//   );
// });

// export default TestimonialsPage;
