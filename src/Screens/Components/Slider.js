import React, { useState } from "react";
import mapSliderValueToRange from "../../helpers/mapSliderValueToRange";

const CircularSlider = ({ setZoom }) => {
  const [sliderValue, setSliderValue] = useState(0); // Initial value

  const handleSliderInput = (event) => {
    let newValue = event.target.value;
    setSliderValue(newValue);
    setZoom(mapSliderValueToRange(newValue));
  };

  const getSliderColor = () => {
    return `hsl(192, 87%, 70%)`;
  };

  return (
    <div className="circular-slider-container">
      <div className="w-2 h-2 border-1 border-cyan-200 bg-cyan-400 rounded-full" />
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderInput}
        className="circular-slider"
        style={{
          "--slider-color": getSliderColor(),
          "--slider-value": sliderValue,
        }}
      />
      <div className="w-2 h-2 border-1 border-cyan-200 bg-cyan-400 rounded-full" />
    </div>
  );
};

export default CircularSlider;
