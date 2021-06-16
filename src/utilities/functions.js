const getImage = (imgNumber) => {
	return `https://developer.accuweather.com/sites/default/files/${imgNumber < 10 ? `0${imgNumber}` : imgNumber}-s.png`;
};

export const getWeatherProps = (cityWeather, forecast) => {
	const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	return cityWeather
		? {
				img: getImage(cityWeather.WeatherIcon),
				headline: cityWeather.WeatherText,
				value: cityWeather.Temperature.Metric.Value,
				unit: cityWeather.Temperature.Metric.Unit,
		  }
		: {
				img: getImage(forecast.Day.Icon),
				headline: weekdays[new Date(forecast.Date).getDay()],
				value: forecast.Temperature.Maximum.Value,
				unit: forecast.Temperature.Maximum.Unit,
		  };
};
