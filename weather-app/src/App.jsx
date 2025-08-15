import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("Punalur");
  const [weatherData, setWeatherData] = useState(null);
  const currentDate = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;
  const API_KEY = "e5fd1361394654ef75942f333f6c5177";

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  const getWeatherIconUrl = (main) => {
    switch (main) {
      case "Clouds":
        return "./src/assets/thunder.png"; 
      case "Rain":
        return "./src/assets/rain_with_cloud.png";
      case "Mist":
        return "./src/assets/Tornado.png"; 
      case "Haze":
        return "./src/assets/sun.png"; 
      default:
        return null;
    }
  };

  return (
    <>
      <div className="app">
        <div className="container">
          {weatherData && (
            <>
              <h1 className="container_date">{formattedDate}</h1>
              <div className="weather_data">
                <h2 className="container_city">{weatherData.name}</h2>
                <img
                  src={getWeatherIconUrl(weatherData.weather[0].main)}
                  alt="Weather Icon"
                  className="container_img"
                  width="180px"
                />
                <h2 className="container_degree">{weatherData.main.temp}</h2>
                <h2 className="country_per">{weatherData.weather[0].description}</h2>
                <form className="form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter city name"
                    onChange={handleInputChange}
                  />
                  <button type="submit">Get</button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
