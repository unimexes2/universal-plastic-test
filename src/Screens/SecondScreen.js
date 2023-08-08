import Dropdown from "./Components/Dropdown";
import cityArray from "../Screens/Components/testLocation";
import { useState } from "react";
import CityBox from "./Components/CityBox";

export default function SecondScreen({
  handleLatitudeChange,
  handleLongitudeChange,
}) {
  const [citySelected, setCitySelected] = useState(
    cityArray[0].location.coordinates,
  );
  const [citySelectedName, setCitySelectedName] = useState(cityArray[0].city);
  const handleOptionSelect = (selectedOption) => {
    setCitySelected(selectedOption.value.location.coordinates);
    handleLatitudeChange(selectedOption.value.location.coordinates[1]);
    handleLongitudeChange(selectedOption.value.location.coordinates[0]);

    setCitySelectedName(selectedOption.value.city);
  };
  let nameArray = cityArray.map((val) => {
    return { value: val, label: val.city };
  });

  return (
    <div className="screen">
      <h1 className="page-name">Weather city</h1>
      <h3 className="header">City</h3>
      <Dropdown options={nameArray} onSelect={handleOptionSelect} />
      <CityBox
        cityGps={citySelected}
        citySelectedName={citySelectedName}
        handleLatitudeChange={handleLatitudeChange}
        handleLongitudeChange={handleLongitudeChange}
      />
    </div>
  );
}
