import React from 'react';
import { useHistory } from 'react-router-dom';
import { getWeatherProps } from '../../utilities/functions';
import './weathercartd.styles.css';

const WeatherCard = (props) => {
	const { cityWeather, width, iconWidth, forecast, currentCity, favoritecard } = props;
	const history = useHistory();
	const weather = getWeatherProps(cityWeather, forecast);
	return (
		<div
			onClick={() => {
				favoritecard &&
					history.push({
						pathname: '/',
						state: { cityName: currentCity.cityName, cityKey: currentCity.cityKey },
					});
			}}
			className={`weather_card_body ${favoritecard}`}
			style={{ width: width + 'px' }}>
			{<h2>{currentCity?.cityName}</h2>}
			<p>{weather.headline}</p>
			<div className='icon'>
				<img loading='lazy' alt='weather' src={weather.img} width={iconWidth} heigth={iconWidth} />
			</div>{' '}
			<h3 className='temprature'>{weather.value + weather.unit}</h3>
		</div>
	);
};

export default WeatherCard;
