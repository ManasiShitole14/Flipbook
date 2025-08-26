import React from "react";

const RealisticBinding = () => {
  const ringCount = 30; // More holes = tighter spacing
  const spacing = 22;   // Closer together
  const startY = 25;
  const totalHeight = startY + spacing * (ringCount - 1);
  const holeX = 25;

  const holes = [];

  for (let i = 0; i < ringCount; i++) {
    const y = startY + i * spacing;

    holes.push(
      <g key={i}>
        {/* Outer metallic ring */}
        <circle
          cx={holeX}
          cy={y}
          r="8"
          fill="url(#metal)"
          stroke="white"
          strokeWidth="0.8"
          filter="url(#holeShadow)"
        />
        {/* Inner dark hole */}
        <circle
          cx={holeX}
          cy={y}
          r="4"
          fill="#222"
        />
      </g>
    );
  }

  return (
    <svg
      width="60"
      height={totalHeight + 60}
      style={{
        position: "absolute",
        top: "50%",
        left: [-5],
        transform: "translateY(-50%)",
        zIndex: 50,
        pointerEvents: "none",
      }}
    >
      <defs>
        {/* Subtle drop shadow */}
        <filter id="holeShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="black" floodOpacity="0.4" />
        </filter>

        {/* Metallic ring gradient */}
        <radialGradient id="metal" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#bbb" />
          <stop offset="80%" stopColor="#666" />
          <stop offset="100%" stopColor="#444" />
        </radialGradient>
      </defs>

      {holes}
    </svg>
  );
};

export default RealisticBinding;



// import React from "react";

// const SpiralBinding = () => {
//   const ringCount = 16;
//   const spacing = 50;
//   const startY = 30;
//   const totalHeight = startY + spacing * (ringCount - 1);

//   const holeX = 50;
//   const spiralX = 10;
//   const wireColor = "#3b0454";

//   const loops = [];

//   for (let i = -1; i <= ringCount; i++) {
//     const y = startY + i * spacing;

//     const spiralPath = `
//       M${spiralX} ${y - 12}
//       C${spiralX + 25} ${y - 12}, ${holeX - 20} ${y - 12}, ${holeX} ${y}
//       C${holeX + 20} ${y + 12}, ${spiralX + 25} ${y + 12}, ${spiralX} ${y + 12}
//     `;

//     // Only draw holes for visible rings (skip -1 and ringCount)
//     const showHole = i >= 0 && i < ringCount;

//     loops.push({ y, spiralPath, showHole });
//   }

//   return (
//     <svg
//       width="80"
//       height={totalHeight + 60}
//       style={{
//         position: "absolute",
//         top: "50%",
//         left: 0,
//         transform: "translateY(-50%)",
//         zIndex: 40,
//         pointerEvents: "none",
//       }}
//     >
//       <defs>
//         <filter id="holeShadow" x="-50%" y="-50%" width="200%" height="200%">
//           <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="black" floodOpacity="0.4" />
//         </filter>

//         <linearGradient id="wireGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//           <stop offset="0%" stopColor="#650b87" />
//           <stop offset="50%" stopColor="#a674c2" />
//           <stop offset="100%" stopColor="#3b0454" />
//         </linearGradient>
//       </defs>

//       {loops.map((loop, i) => (
//         <g key={i}>
//           {loop.showHole && (
//             <circle
//               cx={holeX}
//               cy={loop.y}
//               r="6"
//               stroke="white"
//               strokeWidth="2"
//               fill="transparent"
//               filter="url(#holeShadow)"
//             />
//           )}

//           <path
//             d={loop.spiralPath}
//             stroke="url(#wireGradient)"
//             strokeWidth="2.6"
//             fill="none"
//             style={{
//               filter: "drop-shadow(0px 1px 1px rgba(0,0,0,0.5))",
//             }}
//           />
//         </g>
//       ))}
//     </svg>
//   );
// };

// export default SpiralBinding;


// import React from "react";

// const SpiralBinding = () => {
//   const holes = Array.from({ length: 12 });

//   return (
//     <div className="absolute left-0 top-0 h-full w-16 flex flex-col justify-evenly items-center z-30">
//       {/* Punch Holes */}
//       {holes.map((_, i) => (
//         <div
//           key={i}
//           className="w-4 h-4 bg-white rounded-full border border-gray-400 shadow-sm z-20"
//         ></div>
//       ))}

//       {/* Spiral Wire */}
//       <svg
//         className="absolute left-0 top-0 h-full w-16 z-10"
//         viewBox="0 0 60 500"
//         preserveAspectRatio="none"
//       >
//         <defs>
//           <linearGradient id="wireGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#888" />
//             <stop offset="100%" stopColor="#333" />
//           </linearGradient>
//         </defs>

//         {holes.map((_, i) => {
//           const spacing = 500 / 13;
//           const y = (i + 1) * spacing;

//           return (
//             <path
//               key={i}
//               d={`
//                 M 0 ${y - 12}
//                 C 20 ${y - 12}, 20 ${y + 12}, 0 ${y + 12}
//               `}
//               fill="none"
//               stroke="url(#wireGradient)"
//               strokeWidth="2.5"
//             />
//           );
//         })}
//       </svg>
//     </div>
//   );
// };

// export default SpiralBinding;




// import React from "react";

// const SpiralBinding = () => {
//   const ringCount = 16;
//   const spacing = 50;
//   const startY = 30;
//   const totalHeight = startY + spacing * (ringCount - 1);

//   const holeX = 50;       // Position of the hole
//   const spiralX = 20;     // Start/end of spiral wire in padding
//   const wireColor = "#3b0454";

//   const loops = [];

//   for (let i = 0; i < ringCount; i++) {
//     const y = startY + i * spacing;

//     // SVG path for circular spiral loop entering and exiting hole
//     const spiralPath = `
//       M${spiralX} ${y} 
//       C${spiralX + 10} ${y - 10}, ${holeX - 10} ${y - 10}, ${holeX} ${y}
//       C${holeX + 10} ${y + 10}, ${spiralX + 10} ${y + 10}, ${spiralX} ${y}
//     `;

//     loops.push({ y, spiralPath });
//   }

//   return (
//     <svg
//       width="80"
//       height={totalHeight + 60}
//       style={{
//         position: "absolute",
//         top: "50%",
//         left: [-20],
//         transform: "translateY(-50%)",
//         zIndex: 40,
//         pointerEvents: "none",
//       }}
//     >
//       <defs>
//         <filter id="holeShadow" x="-50%" y="-50%" width="200%" height="200%">
//           <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="black" floodOpacity="0.4" />
//         </filter>
//       </defs>

//       {loops.map((loop, i) => (
//         <g key={i}>
//           {/* Realistic punched hole */}
//           <circle
//             cx={holeX}
//             cy={loop.y}
//             r="6"
//             stroke="white"
//             strokeWidth="2"
//             fill="transparent"
//             filter="url(#holeShadow)"
//           />

//           {/* Clean spiral ring that enters and exits hole */}
//           <path
//             d={loop.spiralPath}
//             stroke={wireColor}
//             strokeWidth="2.4"
//             fill="none"
//             style={{
//               filter: "drop-shadow(0px 0px 1px rgba(0,0,0,0.4))",
//             }}
//           />
//         </g>
//       ))}
//     </svg>
//   );
// };

// export default SpiralBinding;


// import React from "react";

// const SpiralBinding = () => {
//   const ringCount = 16;
//   const spacing = 50;
//   const startY = 30;
//   const totalHeight = startY + spacing * (ringCount - 1);
//   const wireColor = "#380551ff";

//   const holeX = 50;
//   const spiralOffset = 20; // controls how much spiral curves

//   const loops = [];

//   for (let i = 0; i < ringCount; i++) {
//     const y = startY + i * spacing;
//     loops.push({
//       holeY: y,
//       // Spiral curve now loops from left ➝ hole ➝ back to left
//       wirePath: `
//         M${holeX - spiralOffset * 2} ${y}
//         C${holeX - spiralOffset} ${y - 10},
//          ${holeX - spiralOffset} ${y + 10},
//          ${holeX} ${y}
//         C${holeX + spiralOffset} ${y - 10},
//          ${holeX + spiralOffset} ${y + 10},
//          ${holeX} ${y}
//       `,
//     });
//   }

//   return (
//     <svg
//       width="100"
//       height={totalHeight + 40}
//       style={{
//         position: "absolute",
//         top: "50%",
//         left: 0,
//         transform: "translateY(-50%)",
//         zIndex: 40,
//         pointerEvents: "none",
//       }}
//     >
//       <defs>
//         <filter id="holeShadow" x="-50%" y="-50%" width="200%" height="200%">
//           <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="black" floodOpacity="0.35" />
//         </filter>
//       </defs>

//       {loops.map((loop, i) => (
//         <g key={i}>
//           {/* Realistic hole */}
//           <circle
//             cx={holeX}
//             cy={loop.holeY}
//             r="6"
//             stroke="white"
//             strokeWidth="2"
//             fill="transparent"
//             filter="url(#holeShadow)"
//           />

//           {/* Spiral loop curve: looks like it's entering & exiting hole */}
//           <path
//             d={loop.wirePath}
//             stroke={wireColor}
//             strokeWidth="2.5"
//             fill="none"
//             style={{
//               filter: "drop-shadow(0px 0px 1px rgba(157, 83, 195, 0.6))",
//             }}
//           />
//         </g>
//       ))}
//     </svg>
//   );
// };

// export default SpiralBinding;

// import React from "react";

// const SpiralBinding = () => {
//   const ringCount = 16;
//   const spacing = 50;
//   const startY = 30;
//   const totalHeight = startY + spacing * (ringCount - 1);
//   const wireColor = "#9d53c3";

//   const holeX = 65; // position of hole on book

//   const loops = [];

//   for (let i = 0; i < ringCount; i++) {
//     const y = startY + i * spacing;

//     loops.push({
//       holeY: y,
//       wireEntryPath: `M5 ${y - 10} C25 ${y}, 45 ${y}, ${holeX} ${y}`,
//       leftLoopPath: `M-10 ${y} 
//                      A15 15 0 0 1 5 ${y}` // left-side backward coil arc
//     });
//   }

//   return (
//     <svg
//       width="120"
//       height={totalHeight + 40}
//       style={{
//         position: "absolute",
//         top: "50%",
//         left: 0,
//         transform: "translateY(-50%)",
//         zIndex: 40,
//         pointerEvents: "none",
//       }}
//     >
//       <defs>
//         <filter id="holeShadow" x="-50%" y="-50%" width="200%" height="200%">
//           <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="black" floodOpacity="0.35" />
//         </filter>
//       </defs>

//       {loops.map((loop, i) => (
//         <g key={i}>
//           {/* Punched Hole (inside book) */}
//           <circle
//             cx={holeX}
//             cy={loop.holeY}
//             r="6"
//             stroke="white"
//             strokeWidth="2"
//             fill="transparent"
//             filter="url(#holeShadow)"
//           />

//           {/* Wire Entry from Padding into Hole */}
//           <path
//             d={loop.wireEntryPath}
//             stroke={wireColor}
//             strokeWidth="2.5"
//             fill="none"
//             style={{
//               filter: "drop-shadow(0 0 1px rgba(157, 83, 195, 0.6))",
//             }}
//           />

//           {/* Left Circular Binding Extension (like backside coil) */}
//           <path
//             d={loop.leftLoopPath}
//             stroke={wireColor}
//             strokeWidth="2.5"
//             fill="none"
//             style={{
//               filter: "drop-shadow(0 0 1px rgba(157, 83, 195, 0.6))",
//             }}
//           />
//         </g>
//       ))}
//     </svg>
//   );
// };

// export default SpiralBinding;

// import React from "react";

// const SpiralBinding = () => {
//   const ringCount = 16;
//   const spacing = 50;
//   const startY = 30;
//   const totalHeight = startY + spacing * (ringCount - 1);
//   const wireColor = "#9d53c3";

//   const holeX = 65; // ⬅️ Even further inside the book for realism

//   const loops = [];

//   for (let i = 0; i < ringCount; i++) {
//     const y = startY + i * spacing;
//     loops.push({
//       holeY: y,
//       wirePath: `M5 ${y - 10} C25 ${y}, 45 ${y}, ${holeX} ${y}`, // deeper wire curve
//     });
//   }

//   return (
//     <svg
//       width="120" // widen container for deeper curves
//       height={totalHeight + 40}
//       style={{
//         position: "absolute",
//         top: "50%",
//         left: 0,
//         transform: "translateY(-50%)",
//         zIndex: 40,
//         pointerEvents: "none",
//       }}
//     >
//       <defs>
//         <filter id="holeShadow" x="-50%" y="-50%" width="200%" height="200%">
//           <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="black" floodOpacity="0.35" />
//         </filter>
//       </defs>

//       {loops.map((loop, i) => (
//         <g key={i}>
//           {/* Hole positioned further inside the book */}
//           <circle
//             cx={holeX}
//             cy={loop.holeY}
//             r="6"
//             stroke="white"
//             strokeWidth="2"
//             fill="transparent"
//             filter="url(#holeShadow)"
//           />

//           {/* Wire curving from outside into inner hole */}
//           <path
//             d={loop.wirePath}
//             stroke={wireColor}
//             strokeWidth="2.5"
//             fill="none"
//             style={{
//               filter: "drop-shadow(0px 0px 1px rgba(157, 83, 195, 0.6))",
//             }}
//           />
//         </g>
//       ))}
//     </svg>
//   );
// };

// export default SpiralBinding;
// // // components/SpiralBinding.jsx
// import React from "react";

// const SpiralBinding = () => {
//   const ringCount = 16;
//   const spacing = 50;
//   const startY = 30;
//   const totalHeight = startY + spacing * (ringCount - 1);
//   const wireColor = "#380551ff";

//   const holeX = 50; // ⬅️ Moved further into the book (not on edge)

//   const loops = [];

//   for (let i = 0; i < ringCount; i++) {
//     const y = startY + i * spacing;
//     loops.push({
//       holeY: y,
//       wirePath: `M5 ${y - 10} C20 ${y}, 35 ${y}, ${holeX} ${y}`,
//     });
//   }

//   return (
//     <svg
//       width="100"
//       height={totalHeight + 40}
//       style={{
//         position: "absolute",
//         top: "50%",
//         left: 0,
//         transform: "translateY(-50%)",
//         zIndex: 40,
//         pointerEvents: "none",
//       }}
//     >
//       <defs>
//         <filter id="holeShadow" x="-50%" y="-50%" width="200%" height="200%">
//           <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="black" floodOpacity="0.35" />
//         </filter>
//       </defs>

//       {loops.map((loop, i) => (
//         <g key={i}>
//           {/* Hole moved slightly inside the book */}
//           <circle
//             cx={holeX}
//             cy={loop.holeY}
//             r="6"
//             stroke="white"
//             strokeWidth="2"
//             fill="transparent"
//             filter="url(#holeShadow)"
//           />

//           {/* Realistic wire entry from padding into hole */}
//           <path
//             d={loop.wirePath}
//             stroke={wireColor}
//             strokeWidth="2.5"
//             fill="none"
//             style={{
//               filter: "drop-shadow(0px 0px 1px rgba(157, 83, 195, 0.6))",
//             }}
//           />
//         </g>
//       ))}
//     </svg>
//   );
// };

// export default SpiralBinding;

// // // // components/SpiralBinding.jsx
// // // import React from "react";

// // // const SpiralBinding = () => {
// // //   const ringCount = 16;
// // //   const spacing = 50;
// // //   const startY = 30;
// // //   const totalHeight = startY + spacing * (ringCount - 1);
// // //   const wireColor = "#9d53c3";

// // //   const loops = [];

// // //   for (let i = 0; i < ringCount; i++) {
// // //     const y = startY + i * spacing;
// // //     loops.push({
// // //       holeY: y,
// // //       holeX: 40, // hole now appears deeper into the book
// // //       wirePath: `M5 ${y - 10} C15 ${y}, 25 ${y}, 40 ${y}`, // curve wire from padding into hole
// // //     });
// // //   }

// // //   return (
// // //     <svg
// // //       width="90"
// // //       height={totalHeight + 40}
// // //       style={{
// // //         position: "absolute",
// // //         top: "50%",
// // //         left: 0,
// // //         transform: "translateY(-50%)",
// // //         zIndex: 40,
// // //         pointerEvents: "none",
// // //       }}
// // //     >
// // //       <defs>
// // //         <filter id="holeShadow" x="-50%" y="-50%" width="200%" height="200%">
// // //           <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="black" floodOpacity="0.35" />
// // //         </filter>
// // //       </defs>

// // //       {loops.map((loop, i) => (
// // //         <g key={i}>
// // //           {/* New Hole Position: inside book */}
// // //           <circle
// // //             cx={loop.holeX}
// // //             cy={loop.holeY}
// // //             r="6"
// // //             stroke="white"
// // //             strokeWidth="2"
// // //             fill="transparent"
// // //             filter="url(#holeShadow)"
// // //           />

// // //           {/* Wire Arc: from padding into the hole */}
// // //           <path
// // //             d={loop.wirePath}
// // //             stroke={wireColor}
// // //             strokeWidth="2.5"
// // //             fill="none"
// // //             style={{
// // //               filter: "drop-shadow(0px 0px 1px rgba(157, 83, 195, 0.6))",
// // //             }}
// // //           />
// // //         </g>
// // //       ))}
// // //     </svg>
// // //   );
// // // };

// // // export default SpiralBinding;

// // // // // components/SpiralBinding.jsx
// // // // import React from "react";

// // // // const SpiralBinding = () => {
// // // //   const ringCount = 16;
// // // //   const spacing = 50;
// // // //   const startY = 30;
// // // //   const totalHeight = startY + spacing * (ringCount - 1);
// // // //   const wireColor = "#9d53c3";

// // // //   const loops = [];

// // // //   for (let i = 0; i < ringCount; i++) {
// // // //     const y = startY + i * spacing;
// // // //     loops.push({
// // // //       holeY: y,
// // // //       arcPath: `M5 ${y - 10} C10 ${y}, 10 ${y}, 25 ${y}`,
// // // //     });
// // // //   }

// // // //   return (
// // // //     <svg
// // // //       width="90"
// // // //       height={totalHeight + 40}
// // // //       style={{
// // // //         position: "absolute",
// // // //         top: "50%",
// // // //         left: 0,
// // // //         transform: "translateY(-50%)",
// // // //         zIndex: 40,
// // // //         pointerEvents: "none",
// // // //       }}
// // // //     >
// // // //       <defs>
// // // //         <filter id="holeShadow" x="-50%" y="-50%" width="200%" height="200%">
// // // //           <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="black" floodOpacity="0.35" />
// // // //         </filter>
// // // //       </defs>

// // // //       {loops.map((loop, i) => (
// // // //         <g key={i}>
// // // //           {/* Hole */}
// // // //           <circle
// // // //             cx="25"
// // // //             cy={loop.holeY}
// // // //             r="6"
// // // //             stroke="white"
// // // //             strokeWidth="2"
// // // //             fill="transparent"
// // // //             filter="url(#holeShadow)"
// // // //           />

// // // //           {/* Left Entry Curve (realistic extension) */}
// // // //           <path
// // // //             d={loop.arcPath}
// // // //             stroke={wireColor}
// // // //             strokeWidth="2.5"
// // // //             fill="none"
// // // //             style={{
// // // //               filter: "drop-shadow(0px 0px 1px rgba(157, 83, 195, 0.6))",
// // // //             }}
// // // //           />
// // // //         </g>
// // // //       ))}
// // // //     </svg>
// // // //   );
// // // }

// // // // export default SpiralBinding;
