import { useEffect, useState } from "react";
import openweatherCall from "../../api/opnweatherCall";
import "../../App.css";
import ProgressBar from "./ProgressBar";
import unixToReadableConverter from "../../helpers/unixToReadableConverter";
export default function CityBox({ cityGps, citySelectedName }) {
  const [dataFromApi, setDataFromapi] = useState(null);

  useEffect(() => {
    async function getData() {
      let data = await openweatherCall(cityGps);
      setDataFromapi(data);
    }

    getData();
  }, [cityGps]);

  return (
    <>
      {dataFromApi ? (
        <div className="city-box">
          <div className="city-box-first-line">
            <img
              src={
                "https://openweathermap.org/img/wn/" +
                dataFromApi.weather[0].icon +
                "@2x.png"
              }
              className="small-image"
            />
            <div className="city-box-first-line-text-box">
              <div className="label-coordinates"> WEATHER</div>
              <div>{dataFromApi.weather[0].main}</div>
            </div>

            <div className="city-box-first-line-text-box">
              <div className="label-coordinates"> DESCRIPTION</div>
              <div>{dataFromApi.weather[0].description}</div>
            </div>
          </div>
          <div
            className="w-30 h-0.5 bg-cyan-400 opacity-20 "
            style={{ width: "85%" }}
          ></div>
          <div className="city-box-first-line">
            <div className="city-box-first-line-text-box">
              <div className="label-coordinates"> SUNSET</div>
              <div>{unixToReadableConverter(dataFromApi.sys.sunset)}</div>
            </div>

            <div className="city-box-first-line-text-box">
              <div className="label-coordinates"> SUNRISE</div>
              <div>{unixToReadableConverter(dataFromApi.sys.sunrise)}</div>
            </div>
            <div className="city-box-first-line-text-box">
              <div className="label-coordinates">LOCATION</div>

              <div className="icon-marker-div">
                <img
                  src="/map-marker-alt-solid.svg"
                  style={{
                    maxWidth: "1rem",
                    maxHeight: "1rem",
                    marginRight: "1.5vh",
                    marginTop: "0.5vh",
                    opacity: "0.5",
                  }}
                />
                {citySelectedName}
              </div>
            </div>
          </div>
          <div className="city-box-first-line">
            <div className="city-box-first-line-text-box">
              <div className="label-coordinates"> TEMPERATURE</div>
              <div>
                {parseFloat((dataFromApi.main.temp - 273.15).toFixed(4))}
              </div>
            </div>

            <div className="city-box-first-line-text-box">
              <div className="label-coordinates"> FEELS LIKE</div>
              <div>
                {" "}
                {parseFloat((dataFromApi.main.feels_like - 273.15).toFixed(4))}
              </div>
            </div>
          </div>
          <div className="city-box-first-line">
            <div className="humidity">
              {dataFromApi.main.humidity}% Humidity
            </div>
          </div>
          <ProgressBar humidity={dataFromApi.main.humidity} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
