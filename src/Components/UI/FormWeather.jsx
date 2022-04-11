import { useContext } from "react";
import ContextWeather from "../../context/ContextWeather";
import MyCombobox from "../../hook/useCombox";

const FormWeather = () => {
  const { error } = useContext(ContextWeather);
  return (
    <div className="w-full md:w-4/5 mx-auto custom-div p-10 transition-all  flex flex-col ">
      <h3 className="text-lg text-red-500 text-center">{error}</h3>
      <h1 className="text-center text-4xl font-mono text-gray-700 font-bold">
        Busque el clima de su ciudad capital
      </h1>
      <MyCombobox />
    </div>
  );
};

export default FormWeather;
