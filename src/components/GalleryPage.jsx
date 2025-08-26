import React from "react";
import { motion } from "framer-motion";

const galleryImages = [
  { src: "/speech 2.jpg", caption: "Event Day - 2025" },
  { src: "/anchoring.jpg", caption: "Coding Bootcamp" },
  { src: "/rank.jpg", caption: "Project Showcase" },
  { src: "/speech.jpg", caption: "Tech Talk Guest" },
  { src: "/visit.jpg", caption: "Team Meetup" },
];

const GalleryPage = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-screen min-h-screen bg-[#fffdef] text-black px-4 sm:px-6 md:px-16 py-10 font-serif border-l-[4px] border-r-[3px] border-[#702283] overflow-y-auto"
    >
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#702283] mb-3">
        Gallery
      </h2>
      <p className="text-lg sm:text-xl font-light text-gray-700 mt-2 italic">
        A glimpse into the moments, events, and achievements that shaped my journey.
      </p>

      {/* Gallery Grid */}
      <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center mt-10">
        {galleryImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group w-full max-w-[260px] h-[180px] sm:h-[200px] rounded-lg overflow-hidden border-[2px] border-[#702283] shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Caption Overlay */}
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#fffdef]/90 to-transparent text-[#4B0082] text-center text-sm font-semibold py-2 px-2">
              {img.caption}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
});

export default GalleryPage;

// import React from "react";
// import { motion } from "framer-motion";

// const galleryImages = [
//   { src: "/speech 2.jpg", caption: "Event Day - 2025" },
//   { src: "/anchoring.jpg", caption: "Coding Bootcamp" },
//   { src: "/rank.jpg", caption: "Project Showcase" },
//   { src: "/speech.jpg", caption: "Tech Talk Guest" },
//   { src: "/visit.jpg", caption: "Team Meetup" },
// ];

// const GalleryPage = React.forwardRef((props, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="w-screen h-screen bg-[#fffdef] text-black px-6 md:px-16 py-10 font-serif border-l-[4px] border-r-[3px] border-[#702283] overflow-y-auto "
//     >
//       {/* Title */}
//       <h2 className="text-4xl font-extrabold text-[#702283] mb-3">Gallery</h2>
//       <p className="text-xl font-light text-gray-700 mt-2 italic">
//         A glimpse into the moments, events, and achievements that shaped my journey.
//       </p>

//       {/* Gallery Grid */}
//       <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center mt-10">
//         {galleryImages.map((img, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             className="relative group w-[260px] h-[180px] rounded-lg overflow-hidden border-[2px] border-[#702283] shadow-md hover:shadow-xl transition duration-300"
//           >
//             <img
//               src={img.src}
//               alt={img.caption}
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//             />
//             {/* Caption Overlay */}
//             <div className="absolute bottom-0w-full bg-gradient-to-t from-[#fffdef]/90 to-transparent text-[#4B0082] text-center text-sm font-semibold py-2 px-2">
//               {img.caption}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// });

// export default GalleryPage;


// import React, { useState } from "react";
// import { FaTimes } from "react-icons/fa";
// import { motion } from "framer-motion";

// const galleryImages = [
//   { src: "/speech 2.jpg", caption: "Event Day - 2025" },
//   { src: "/anchoring.jpg", caption: "Coding Bootcamp" },
//   { src: "/rank.jpg", caption: "Project Showcase" },
//   { src: "/speech.jpg", caption: "Tech Talk Guest" },
//   { src: "/visit.jpg", caption: "Team Meetup" },
// ];

// const GalleryPage = React.forwardRef((props, ref) => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   return (
//     <div
//       ref={ref}
//       className="w-screen h-screen bg-[#fffdef] text-black px-6 md:px-16 py-10 font-serif border-l-[4px] border-r-[3px] border-[#702283] overflow-y-auto"
//     >
//       {/* Title */}
//       <h2 className="text-4xl font-extrabold text-[#702283] mb-3">Gallery</h2>
//       <p className="text-lg text-[#4B0082]/80 italic mb-8">
//         A glimpse into the moments, events, and achievements that shaped my journey.
//       </p>

//       {/* Gallery Grid */}
//       <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
//         {galleryImages.map((img, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             onClick={() => setSelectedImage(img)}
//             className="relative group cursor-pointer w-[260px] h-[180px] rounded-lg overflow-hidden border-[2px] border-[#4B0082] shadow-md hover:shadow-xl hover:border-[#702283] transition duration-300"
//           >
//             <img
//               src={img.src}
//               alt={img.caption}
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//             />
//             {/* Caption Overlay */}
//             <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#fffdef]/90 to-transparent text-[#4B0082] text-center text-sm font-semibold py-2 px-2">
//               {img.caption}
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Lightbox */}
//       {selectedImage && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50">
//           <div className="relative">
//             <img
//               src={selectedImage.src}
//               alt="Enlarged"
//               className="max-w-[90vw] max-h-[85vh] rounded-lg border-[2px] border-[#702283] shadow-[0_0_25px_#702283] transition-all duration-300"
//             />
//             <button
//               onClick={() => setSelectedImage(null)}
//               className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#4B0082] text-white p-2 rounded-full hover:bg-[#702283] transition"
//             >
//               <FaTimes size={18} />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// });

// export default GalleryPage;





// import React, { useState } from "react";

// const galleryImages = [
//   { src: "/speech 2.jpg", alt: "Gallery Image 1" },
//   { src: "/anchoring.jpg", alt: "Gallery Image 2" },
//   { src: "/rank.jpg", alt: "Gallery Image 3" },
//   { src: "/visit.jpg", alt: "Gallery Image 4" },
//   { src: "/speech.jpg", alt: "Gallery Image 5" },
// ];

// const GalleryPage = React.forwardRef((props, ref) => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   return (
//     <div
//       ref={ref}
//       className="w-screen h-screen bg-[#fffdef] text-black flex flex-col justify-center px-10 md:px-20 py-12 font-serif border-l-[4px] border-r-[4px] border-[#702283]"
//     >
//       {/* Section Title (Styled like Index/Skills/Projects) */}
//       <h2 className="text-4xl font-extrabold text-[#702283] mb-12 text-left">
//   Gallery
// </h2>



//       {/* Row 1: First 3 Images */}
//       <div className="flex flex-wrap justify-center gap-10 mb-6">
//         {galleryImages.slice(0, 3).map((img, idx) => (
//           <img
//             key={idx}
//             src={img.src}
//             alt={img.alt}
//             className="w-60 h-40 object-cover rounded-xl border-[4px] border-[#4B0082] shadow-md cursor-pointer transform transition-transform hover:scale-105"
//             onClick={() => setSelectedImage(img.src)}
//           />
//         ))}
//       </div>

//       {/* Row 2: Centered Last 2 Images */}
//       <div className="flex justify-center gap-8">
//         {galleryImages.slice(3).map((img, idx) => (
//           <img
//             key={idx}
//             src={img.src}
//             alt={img.alt}
//             className="w-60 h-40 object-cover rounded-xl border-[4px] border-[#4B0082] shadow-md cursor-pointer transform transition-transform hover:scale-105"
//             onClick={() => setSelectedImage(img.src)}
//           />
//         ))}
//       </div>

//       {/* Pop-Up Image Preview */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
//           onClick={() => setSelectedImage(null)}
//         >
//           <div className="relative">
//             {/* Close Button (Top center of image) */}
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setSelectedImage(null);
//               }}
//               className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 bg-white text-black px-3 py-1 rounded-full text-sm font-semibold shadow-md z-50"
//             >
//               Close
//             </button>

//             {/* Zoomed Image */}
//             <img
//               src={selectedImage}
//               alt="Zoomed Preview"
//               className="max-w-[90vw] max-h-[85vh] rounded-xl border-[4px] border-[#4B0082] shadow-xl"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// });

// export default GalleryPage;


// // // src/components/GalleryPage.jsx
// // import React, { useState } from "react";

// // const galleryImages = [
// //   { src: "/gallery/image1.jpg", alt: "Certificate 1" },
// //   { src: "/gallery/image2.jpg", alt: "Event Photo" },
// //   { src: "/gallery/image3.jpg", alt: "Workshop Participation" },
// //   { src: "/gallery/image4.jpg", alt: "Award Ceremony" },
// //   // Add more images as needed
// // ];

// // const GalleryPage = React.forwardRef((props, ref) => {
// //   const [selectedImage, setSelectedImage] = useState(null);

// //   return (
// //     <div
// //       ref={ref}
// //       className="page bg-[#fffdef] text-[#1c1c1c] py-12 px-10 md:px-20 font-serif"
// //     >
// //       {/* Section Title */}
// //       <h2 className="text-4xl font-bold mb-8 border-l-4 border-[#c9a227] pl-4">
// //         Gallery
// //       </h2>

// //       {/* Gallery Grid */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //         {galleryImages.map((img, idx) => (
// //           <img
// //             key={idx}
// //             src={img.src}
// //             alt={img.alt}
// //             className="rounded-xl shadow-md cursor-pointer transform transition-transform hover:scale-105"
// //             onClick={() => setSelectedImage(img.src)}
// //           />
// //         ))}
// //       </div>

// //       {/* Lightbox Preview */}
// //       {selectedImage && (
// //         <div
// //           className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
// //           onClick={() => setSelectedImage(null)}
// //         >
// //           <img
// //             src={selectedImage}
// //             alt="Zoomed Image"
// //             className="max-w-4xl max-h-[90vh] rounded-xl shadow-lg"
// //           />
// //         </div>
// //       )}
// //     </div>
// //   );
// // });

// // export default GalleryPage;
