// components/PageWrapper.jsx
import React from "react";

const PageWrapper = ({ children, bgColor, textColor = "white" }) => {
  return (
    <div
      className={`w-screen h-screen px-10 py-8 overflow-hidden`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
