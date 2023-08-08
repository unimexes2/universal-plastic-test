import React from "react";

export default function ProgressBar({ humidity }) {
  let setHumidity = humidity + "%";

  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: setHumidity, borderRadius: "1vh" }}
      ></div>
      <div className="progress-overlay"></div>
    </div>
  );
}
