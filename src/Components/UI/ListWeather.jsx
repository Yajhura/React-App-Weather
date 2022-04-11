import React, { useContext } from "react";
import ContextWeather from "../../context/ContextWeather";
import { DateFormat } from "../../helpers/DateFormat";

const ListWeather = () => {
  const { weather, loading } = useContext(ContextWeather);

  if (!weather) {
    return;
  } else if (loading) {
    return (
      <h1 className="text-white text-5xl font-black text-center">Loading...</h1>
    );
  }

  const { forecast } = weather;

  return (
    <div className="animate__animated  animate__fadeIn  p-2 sm:h-full md:h-5/6 lg:h-5/6 w-full custom-div ">
      <h1 className="my-1 text-3xl text-center font-black font-mono text-white md:text-gray-700">
        Pronosticos en los siguientes dias
      </h1>
      <div className="flex flex-col  px-5">
        <ul>
          {forecast?.forecastday.map((day, id) => (
            <li key={id}>
              <div className="bg-gray-100 border-2 rounded-lg border-gray-300 w-full h-16 my-5">
                <div className="flex justify-between items-center px-4">
                  <div>
                    <h2>{DateFormat(day?.date)}</h2>
                    <p>{day?.day?.maxtemp_c}°</p>
                  </div>

                  <div>
                    <img
                      src={day.day.condition.icon}
                      alt={day.day.condition.text}
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListWeather;
