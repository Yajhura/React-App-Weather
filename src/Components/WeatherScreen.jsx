import React from "react";
import ActiveWeather from "./UI/ActiveWeather";
import FormWeather from "./UI/FormWeather";
import ListWeather from "./UI/ListWeather";

const WeatherScreen = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        maxHeight: "max-content",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1 className="text-center text-7xl text-white font-bold my-16 font-mono">
        React Weather
      </h1>

      <div className="flex flex-col lg:flex-row gap-10 w-full h-full px-5 md:p-10">
        <div className="w-full lg:w-1/2 my-10">
          <FormWeather />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-10 ">
          <div className="w-full lg:w-3/5">
            <ActiveWeather />
          </div>

          <div className="w-full md:w-2/5">
            <ListWeather />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(WeatherScreen);
