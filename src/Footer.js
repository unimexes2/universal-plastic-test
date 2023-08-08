import React, { useState } from "react";

import "./App.css";

const Footer = ({ navigationHandle }) => {
  const [opacitySeted, setopacity] = useState(false);
  const handleNavigationClick = (value) => {
    navigationHandle(value);
    setopacity(opacitySeted ? false : true);
  };
  return (
    <div className="footer">
      <div className="w-30 h-0.5 bg-cyan-400 opacity-20 " />

      <div className="footer-main">
        <div
          className={!opacitySeted ? "button-menu" : "button-menu-opacity"}
          onClick={() => handleNavigationClick(1)}
        >
          <div className="w-6 h-6 border-2 border-cyan-400 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 border-2 border-cyan-400 rounded-full flex items-center justify-center" />
          </div>
          <div className="w-1 h-1 border-1 border-cyan-400 bg-cyan-400 rounded-full flex items-center justify-center" />
        </div>
        <div
          className={opacitySeted ? "button-menu" : "button-menu-opacity"}
          onClick={() => handleNavigationClick(2)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#67e8f9"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
            />
          </svg>
          <div className="w-1 h-1 border-1 border-cyan-400 bg-cyan-400 rounded-full flex items-center justify-center" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
