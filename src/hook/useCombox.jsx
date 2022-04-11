import { useState, useEffect, useContext, useCallback } from "react";
import axios from "axios";
import ContextWeather from "../context/ContextWeather";

function MyCombobox() {
  const { submitLocation } = useContext(ContextWeather);

  const [query, setQuery] = useState("");
  const [listLocation, setListLocation] = useState([]);
  const [suggestion, setSuggestion] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://countriesnow.space/api/v0.1/countries/capital`
      );
      setListLocation(data.data);
    };

    fetchData();
  }, []);

  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
      setQuery(value);
      const filter = listLocation.filter((item) =>
        item.capital.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestion(filter);
    },
    [listLocation]
  );

  const handleSubmit = useCallback(
    (e) => {
      if (query.length > 2 ) {
        e.preventDefault();
        submitLocation(query);
      }
    },
    [query, submitLocation]
  );

  const onsuggestionSelected = (suggestion) => {
    setQuery(suggestion);
    setSuggestion([]);
  };

  return (
    <div className="mt-10">
      <form className="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          className="input"
          onChange={handleChange}
        />
        <div
          className={`border-x-2   border-gray-200 ${
            suggestion.length > 3 && "overflow-auto h-24"
          } bg-slate-100 border-b-2`}
        >
          {suggestion &&
            suggestion.map((item, id) => (
              <p
                onClick={() => onsuggestionSelected(item.capital)}
                className={`text-blue-400 font-semibold p-1 hover:bg-slate-600 `}
                key={id}
              >
                {item.capital}
              </p>
            ))}
        </div>
        <button
          className="p-1 mt-5 uppercase bg-sky-400 text-white font-bold text-center text-lg w-full rounded-md "
          type="submit"
        >
          enviar
        </button>
      </form>
    </div>
  );
}

export default MyCombobox;
