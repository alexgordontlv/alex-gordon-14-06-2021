import React from 'react';
import './weathercartd.styles.css';
const WeatherCard = ({ cityWeather, width, iconWidth, forecast, cityName }) => {
	const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const getImage = (imgNumber) => {
		return `https://developer.accuweather.com/sites/default/files/${imgNumber < 10 ? `0${imgNumber}` : imgNumber}-s.png`;
	};

	let weather = cityWeather
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

	return (
		<div className='weather_card_body' style={{ width: width + 'px' }}>
			{cityName && <h2>{cityName}</h2>}
			<p>{weather.headline}</p>
			<div className='icon'>
				<img loading='lazy' alt='weather' src={weather.img} width={iconWidth} heigth={iconWidth} />
			</div>{' '}
			<h3 className='temprature'>{weather.value + weather.unit}</h3>
		</div>
	);
};

export default WeatherCard;
