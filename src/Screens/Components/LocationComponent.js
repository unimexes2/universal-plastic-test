export default function LocationComponent({
  latitude,
  longitude,
  onLatitudeChange,
  onLongitudeChange,
}) {
  const handleInputChangeLatitude = (event) => {
    const newLatitude = event.target.value;
    onLatitudeChange(newLatitude);
  };
  const handleInputChangeLongitude = (event) => {
    const newLongitude = event.target.value;
    onLongitudeChange(newLongitude);
  };

  return (
    <div className="coordinates">
      <div className="input-coordinates-block">
        <label htmlFor="first_name" className="label-coordinates">
          LATITUDE
        </label>

        <input
          type="text"
          className="input-coordinates-left"
          id="first_name"
          placeholder={latitude}
          onChange={handleInputChangeLatitude}
        />
      </div>

      <div className="input-coordinates-block">
        <label htmlFor="first_name" className="label-coordinates">
          LONGITUDE
        </label>

        <input
          type="text"
          id="first_name"
          placeholder={longitude}
          onChange={handleInputChangeLongitude}
          className="input-coordinates-right"
          required
        />
      </div>
    </div>
  );
}
