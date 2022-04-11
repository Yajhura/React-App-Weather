import axios from "axios";
import React, { useState } from "react";

const ContextWeather = React.createContext();

const ContextWeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState("");
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(false);

  const submitLocation = async (locationWeather) => {
    try {
      setLoading(true);
      const resp = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=52882b95a024481f92470050220704&q=${locationWeather}&days=3&aqi=no&alerts=no`
      );

      setWeather(resp.data);
      setError(false);
      setLoading(false);
    } catch (error) {
      return setError("No se encontro la localizacion");
    }
  };

  const data = { weather, submitLocation, error,loading };

  return (
    <ContextWeather.Provider value={data}>{children}</ContextWeather.Provider>
  );
};

export { ContextWeatherProvider };
export default ContextWeather;
