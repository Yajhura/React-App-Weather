import WeatherScreen from "./Components/WeatherScreen";
import { ContextWeatherProvider } from "./context/ContextWeather";


function App() {
  return (
      <ContextWeatherProvider> 
        <WeatherScreen/>
      </ContextWeatherProvider>
     
  );
}

export default App;
