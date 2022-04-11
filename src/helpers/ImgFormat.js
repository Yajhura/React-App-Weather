export const imgWeather = (text) => {
  switch (text) {
    case "Clear":
      return "https://www.metaweather.com/static/img/weather/c.svg";

    case "Sunny":
      return "https://www.metaweather.com/static/img/weather/c.svg";

    case "Snow":
      return "https://www.metaweather.com/static/img/weather/sn.svg";

    case "Partly cloudy":
      return "https://www.metaweather.com/static/img/weather/lc.svg";

    case "Overcast":
      return "https://www.metaweather.com/static/img/weather/hc.svg";

    case "Mist":
      return "https://www.metaweather.com/static/img/weather/lc.svg";

    case "Cloudy":
      return "https://www.metaweather.com/static/img/weather/lc.svg";

    case "Patchy rain nearby":
      return "https://www.metaweather.com/static/img/weather/lr.svg";

    case "Patchy snow nearby":
      return "https://www.metaweather.com/static/img/weather/sn.svg";

    case "Blowing snow":
      return "https://www.metaweather.com/static/img/weather/sn.svg";

    case "Blizzard":
      return "https://www.metaweather.com/static/img/weather/sn.svg";

    case "Patchy sleet nearby":
      return "https://www.metaweather.com/static/img/weather/sl.svg";

    case "Hail":
      return "https://www.metaweather.com/static/img/weather/h.svg";

    case "Thundery outbreaks in nearby":
      return "https://www.metaweather.com/static/img/weather/t.svg";

    case "Fog":
      return "https://www.metaweather.com/static/img/weather/hc.svg";

    case "Freezing fog":
      return "https://www.metaweather.com/static/img/weather/sl.svg";

    case "Patchy light drizzle":
      return "https://www.metaweather.com/static/img/weather/lr.svg";

    case "Light drizzle":
      return "https://www.metaweather.com/static/img/weather/lr.svg";

    default:
      return "https://www.metaweather.com/static/img/weather/c.svg";
  }
};
