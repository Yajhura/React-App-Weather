import { useContext } from "react";
import ContextWeather from "../../context/ContextWeather";
import { imgWeather } from "../../helpers/ImgFormat";

const ActiveWeather = () => {
  const { weather, loading } = useContext(ContextWeather);

  if (!weather) {
    return;
  } else if (loading) {
    return (
      <h1 className="text-white text-5xl font-black text-center">Loading...</h1>
    );
  }

  const { location, current } = weather;

  return (
    <div className="animate__animated  animate__fadeIn custom-div flex flex-col w-full py-10 px-4 ">
      <div className=" flex flex-col">
        <div className="my-5 text-white lg:text-gray-700">
          <h2 className="text-4xl md:text-4xl uppercase font-bold text-left">
            {location?.name}
          </h2>
          <span className="text-lg uppercase text-left font-semibold">
            {location?.country}
          </span>
        </div>

        <div className=" lg:px-2 xl:px-5 flex items-center justify-between mb-10">
          <h2 className=" text-6xl lg:text-7xl font-bold text-white md:text-gray-900">
            {current?.temp_c}°
          </h2>
          <img
            width={110}
            height={110}
            src={imgWeather(current?.condition.text)}
            alt={current?.condition.text}
          />
        </div>

        <div className="mt-5 space-y-3 ">
          <div className="flex justify-between">
            <span className="text-lg font-bold  text-white">
              Humedad como porcentaje
            </span>
            <span className="text-lg font-semibold  text-white">
              {current?.humidity}%
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-lg font-bold text-white">
              Temperatura en farenheit
            </span>
            <span className="text-lg font-semibold text-white">
              {current?.temp_f}°F
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-lg font-bold text-white">
              Velocidad del Viento
            </span>
            <span className="text-lg font-semibold text-white">
              {current?.wind_kph} km/h
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-lg font-bold text-white">
              Porcentaje de Nubes
            </span>
            <span className="text-lg font-semibold text-white">
              {current?.cloud}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveWeather;
