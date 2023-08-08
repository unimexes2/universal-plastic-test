import { useEffect, useState } from "react";
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";

export default function MainScreen({ navigationPage }) {
  const [latitude, setLatitude] = useState(51.505);
  const [longitude, setLongitude] = useState(-0.09);

  useEffect(() => {
    getLocation();
  }, []);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success);
    } else {
      console.log("Geolocation not supported");
    }
  }

  const handleLatitudeChange = (newLatitude) => {
    setLatitude(newLatitude);
  };

  const handleLongitudeChange = (newLongitude) => {
    setLongitude(newLongitude);
  };

  function success(position) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }

  return (
    <div className="main-screen">
      {navigationPage === 1 ? (
        <FirstScreen
          latitude={latitude}
          longitude={longitude}
          onLatitudeChange={handleLatitudeChange}
          onLongitudeChange={handleLongitudeChange}
        />
      ) : (
        <SecondScreen
          handleLatitudeChange={handleLatitudeChange}
          handleLongitudeChange={handleLongitudeChange}
        />
      )}
    </div>
  );
}
