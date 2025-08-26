import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";

const ContactPage = React.forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ovswupr",
        "template_xlnnaej",
        formData,
        "jo9C7O1DtPa-YGkK_"
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("❌ Failed to send message. Please try again.");
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <div
      ref={ref}
      className="w-full min-h-screen bg-[#fffdef] text-black flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-10 font-serif border-l-[4px] border-r-[4px] border-[#702283]"
    >
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#702283] drop-shadow-md mb-8 text-center md:text-left">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Section */}
        <div className="flex flex-col space-y-10">
          {/* Contact Info */}
          <div className="space-y-5 text-sm sm:text-base">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-xl text-[#702283]" />
              <span>manasishitole14@email.com</span>
            </div>

            <div className="flex items-center space-x-3">
              <FaLinkedin className="text-xl text-[#702283]" />
              <a
                href="https://www.linkedin.com/in/manasi-shitole-8157152a3"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-[#702283]"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              ref={nameRef}
              value={formData.name}
              onChange={handleChange}
              onMouseEnter={() => nameRef.current?.focus()}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm text-sm placeholder:italic transition duration-200 hover:border-[#702283] hover:ring-1 hover:ring-[#702283] focus:outline-none focus:ring-2 focus:ring-[#702283]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              ref={emailRef}
              value={formData.email}
              onChange={handleChange}
              onMouseEnter={() => emailRef.current?.focus()}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm text-sm placeholder:italic transition duration-200 hover:border-[#702283] hover:ring-1 hover:ring-[#702283] focus:outline-none focus:ring-2 focus:ring-[#702283]"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              ref={messageRef}
              value={formData.message}
              onChange={handleChange}
              onMouseEnter={() => messageRef.current?.focus()}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm text-sm placeholder:italic transition duration-200 hover:border-[#702283] hover:ring-1 hover:ring-[#702283] focus:outline-none focus:ring-2 focus:ring-[#702283]"
              required
            ></textarea>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-5 py-2 bg-[#702283] text-white rounded-md hover:bg-[#702283] hover:text-black text-sm font-medium transition-all shadow"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Right Section - Image */}
        <div className="w-full flex justify-center items-center">
          <img
            src="/envelope 2.png"
            alt="Tech Envelope"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
});

export default ContactPage;

// import React, { useState, useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";

// const ContactPage = React.forwardRef((props, ref) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   // Refs for hover focus
//   const nameRef = useRef(null);
//   const emailRef = useRef(null);
//   const messageRef = useRef(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         "service_ovswupr",    // Your EmailJS Service ID
//         "template_xlnnaej",   // Your Template ID
//         formData,
//         "jo9C7O1DtPa-YGkK_"   // Your Public Key
//       )
//       .then(() => {
//         alert("✅ Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       })
//       .catch((error) => {
//         alert("❌ Failed to send message. Please try again.");
//         console.error("EmailJS Error:", error);
//       });
//   };

//   return (
//     <div
//       ref={ref}
//       className="w-screen h-screen bg-[#fffdef] text-black flex flex-col justify-center px-10 md:px-20 py-12 font-serif border-l-[4px] border-r-[4px] border-[#702283]"
//     >
//       {/* Title */}
//       <h2 className="text-4xl font-extrabold text-[#702283] drop-shadow-md mb-10">
//         Contact Me
//       </h2>

//       <div className="grid md:grid-cols-2 gap-10 items-start">
//         {/* Left Section - Info + Form */}
//         <div className="flex flex-col space-y-10">
//           {/* Contact Info */}
//           <div className="space-y-5">
//             <div className="flex items-center space-x-3 text-[17px]">
//               <FaEnvelope className="text-xl text-[#702283]" />
//               <span>manasishitole14@email.com</span>
//             </div>

//             <div className="flex items-center space-x-3 text-[17px]">
//               <FaLinkedin className="text-xl text-[#702283]" />
//               <a
//                 href="https://www.linkedin.com/in/manasi-shitole-8157152a3"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="underline underline-offset-4 hover:text-[#702283]"
//               >
//                 LinkedIn Profile
//               </a>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <form onSubmit={handleSubmit} className="space-y-4 w-full">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               ref={nameRef}
//               value={formData.name}
//               onChange={handleChange}
//               onMouseEnter={() => nameRef.current?.focus()}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm text-[15px] placeholder:italic transition-all duration-200 hover:border-[#702283] hover:ring-1 hover:ring-[#702283] focus:outline-none focus:ring-2 focus:ring-[#e702283]"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               ref={emailRef}
//               value={formData.email}
//               onChange={handleChange}
//               onMouseEnter={() => emailRef.current?.focus()}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm text-[15px] placeholder:italic transition-all duration-200 hover:border-[#702283] hover:ring-1 hover:ring-[#702283] focus:outline-none focus:ring-2 focus:ring-[#e702283]"
//               required
//             />
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               rows="4"
//               ref={messageRef}
//               value={formData.message}
//               onChange={handleChange}
//               onMouseEnter={() => messageRef.current?.focus()}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm text-[15px] placeholder:italic transition-all duration-200 hover:border-[#702283] hover:ring-1 hover:ring-[#702283] focus:outline-none focus:ring-2 focus:ring-[#e702283]"
//               required
//             ></textarea>

//             <div className="flex justify-end">
//               <button
//                 type="submit"
//                 className="px-5 py-1.5 bg-[#702283] text-white rounded-md hover:bg-[#702283] hover:text-black text-sm font-medium transition-all shadow"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Right Section - Tech 3D Envelope Image */}
//         <div className="w-full flex justify-center items-center">
//           <img
//             src="/envelope 2.png" // 👈 Replace with your actual path
//             alt="Tech Envelope"
//             className="w-[90%] max-w-[400px]"
//           />
//         </div>
//       </div>
//     </div>
//   );
// });

// export default ContactPage;




// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";

// const ContactPage = React.forwardRef((props, ref) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         "service_ovswupr",    // Your EmailJS Service ID
//         "template_xlnnaej",   // Your Template ID
//         formData,
//         "jo9C7O1DtPa-YGkK_"   // Your Public Key
//       )
//       .then(() => {
//         alert("✅ Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       })
//       .catch((error) => {
//         alert("❌ Failed to send message. Please try again.");
//         console.error("EmailJS Error:", error);
//       });
//   };

//   return (
//     <div
//       ref={ref}
//        className="w-screen h-screen bg-[#fffdef] text-black flex flex-col justify-center px-10 md:px-20 py-12 font-serif border-l-[4px] border-r-[4px] border-[#702283]"
//     >
//       {/* Title */}
//       <h2 className="text-4xl font-extrabold text-[#702283] drop-shadow-md">Contact Me</h2>

//       <div className="grid md:grid-cols-2 gap-10 items-start">
//         {/* Left Section - Info + Form */}
//         <div className="flex flex-col space-y-10">
//           {/* Contact Info */}
//           <div className="space-y-5">
//             <div className="flex items-center space-x-3 text-[17px]">
//               <FaEnvelope className="text-xl text-[#e77d11]" />
//               <span>manasishitole14@email.com</span>
//             </div>
//             <div className="flex items-center space-x-3 text-[17px]">
//               <FaPhoneAlt className="text-xl text-[#e77d11]" />
//               <span>+91 98765 43210</span>
//             </div>
//             <div className="flex items-center space-x-3 text-[17px]">
//               <FaLinkedin className="text-xl text-[#e77d11]" />
//               <a
//                 href="https://linkedin.com/in/manasishitole"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="underline underline-offset-4 hover:text-[#e77d11]"
//               >
//                 LinkedIn Profile
//               </a>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <form onSubmit={handleSubmit} className="space-y-4 w-full">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               onMouseEnter={(e) => e.target.focus()}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e77d11] text-[15px] placeholder:italic"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               onMouseEnter={(e) => e.target.focus()}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e77d11] text-[15px] placeholder:italic"
//               required
//             />
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               rows="4"
//               value={formData.message}
//               onChange={handleChange}
//               onMouseEnter={(e) => e.target.focus()}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e77d11] text-[15px] placeholder:italic"
//               required
//             ></textarea>

//             <div className="flex justify-end">
//               <button
//                 type="submit"
//                 className="px-5 py-1.5 bg-[#1c1c1c] text-white rounded-md hover:bg-[#e77d11] hover:text-black text-sm font-medium transition-all shadow"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Right Section - Tech 3D Envelope Image */}
//         <div className="w-full flex justify-center items-center">
//           <img
//             src="envelope 2.png" // 👈 Replace with your actual path
//             alt="Tech Envelope"
//            className="w-[90%] max-w-[400px]"
//           />
//         </div>
//       </div>
//     </div>
//   );
// });

// export default ContactPage;















// import React, { useState } from "react";
// import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

// const ContactPage = React.forwardRef((props, ref) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Thanks for reaching out! (This form is not connected to backend)");
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <div
//       ref={ref}
//       className="w-full min-h-screen bg-[#f5f5f5] text-purple-800 px-6 md:px-20 py-16 flex flex-col justify-between"
//     >
//       {/* Header */}
//       <div>
//         <h2 className="text-2xl font-semibold text-purple-500 tracking-widest mb-2">
//           Page 06
//         </h2>
//         <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-800">
//           Contact Me
//         </h1>
//         <p className="text-base md:text-lg text-purple-600 max-w-xl">
//           Have a project in mind, want to collaborate, or just say hi? Feel free to drop a message below!
//         </p>
//       </div>

//       {/* Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="mt-10 grid grid-cols-1 gap-6 max-w-xl"
//       >
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className="p-3 rounded-xl bg-white border border-purple-200 text-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="p-3 rounded-xl bg-white border border-purple-200 text-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           rows="5"
//           value={formData.message}
//           onChange={handleChange}
//           required
//           className="p-3 rounded-xl bg-white border border-purple-200 text-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
//         ></textarea>
//         <button
//           type="submit"
//           className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition duration-300"
//         >
//           Send Message
//         </button>
//       </form>

//       {/* Footer-style bottom */}
//       <div className="mt-14 flex flex-col items-center text-center space-y-4">
//         <div className="flex space-x-6 text-xl text-purple-700">
//           <a
//             href="https://www.linkedin.com/in/yourprofile"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-purple-500 transition"
//           >
//             <FaLinkedin />
//           </a>
//           <a
//             href="https://github.com/yourusername"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-purple-500 transition"
//           >
//             <FaGithub />
//           </a>
//           <a
//             href="mailto:youremail@example.com"
//             className="hover:text-purple-500 transition"
//           >
//             <FaEnvelope />
//           </a>
//         </div>
//         <p className="text-sm text-purple-400">
//           Built with 💜 using React & Tailwind · © {new Date().getFullYear()} Manasi Shitole
//         </p>
//       </div>
//     </div>
//   );
// });

// export default ContactPage;



// import React from "react";

// const ContactPage = React.forwardRef((props, ref) => {
//   return (
//     <div className="page" ref={ref}>
//       <h2>Contact</h2>
//       <p>Email: manasi@example.com</p>
//       <p>LinkedIn: linkedin.com/in/manasi</p>
//     </div>
//   );
// });

// export default ContactPage;
