import LocationComponent from "./Components/LocationComponent";
import AreaComponent from "./Components/AreaComponent";

export default function FirstScreen({
  latitude,
  longitude,
  onLatitudeChange,
  onLongitudeChange,
}) {
  return (
    <div className="screen">
      <h1 className="page-name">Area selector</h1>
      <h3 className="header">Location</h3>

      <LocationComponent
        latitude={latitude}
        longitude={longitude}
        onLatitudeChange={onLatitudeChange}
        onLongitudeChange={onLongitudeChange}
      />
      <AreaComponent latitude={latitude} longitude={longitude} />
    </div>
  );
}
