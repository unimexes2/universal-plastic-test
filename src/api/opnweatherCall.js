import axios from "axios";
export default async function openweatherCall(cityGps) {
  let apiURL =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    cityGps[0] +
    "&lon=" +
    cityGps[1] +
    "&appid=" +
    process.env.REACT_APP_API_KEY;

  try {
    let response = await axios(apiURL);

    return response.data;
  } catch {
    console.error();
  }
}
