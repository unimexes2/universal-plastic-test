import React, { useState } from "react";

import MapComponent from "./MapComponent";
import CircularSlider from "./Slider";

export default function AreaComponent({ latitude, longitude }) {
  const [zoom, setZoom] = useState(15.54);

  const setZoomGlobal = (zoom) => {
    setZoom(zoom);
  };

  return (
    <>
      <div>
        <div className="map-label">
          <label htmlFor="default-range" className="header">
            Area
          </label>

          <div className="label-coordinates">max 20 km</div>
        </div>
        <CircularSlider setZoom={setZoomGlobal} />
      </div>
      <div className="map-inside">
        <MapComponent latitude={latitude} longitude={longitude} zoom={zoom} />
      </div>
    </>
  );
}
