import React, { useState, useEffect, useCallback } from 'react';
import Card from '../../components/card/Card';
import WeatherCard from '../../components/weathercard/WeatherCard';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CustomInput from '../../components/custominput/CustomInput';
import { IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import fetchUrls from '../../utilities/fetchfunction';
import { toggleFavorite, toggleModal } from '../../redux/weather.actions';
import { useHistory } from 'react-router-dom';
import './mainpage.styles.css';

const Mainpage = () => {
	const [currentCity, setCurrentCity] = useState({
		cityName: 'Tel Aviv',
		cityKey: '215854',
	});
	const [isFavorite, setFevorite] = useState(false);
	const [cityWeather, setCityWeather] = useState('');
	const [fiveDayForecast, setFiveDayForecast] = useState([]);

	const history = useHistory();
	const dispatch = useDispatch();
	const favorites = useSelector((state) => state.favorites);

	const fetchAndSet = useCallback(async () => {
		const [res1, res2] = await Promise.all([fetchUrls('weatherForecast', currentCity.cityKey), fetchUrls('weatherCondition', currentCity.cityKey)]);
		if (!res1.error && !res2.error) {
			setFiveDayForecast(res1.data.DailyForecasts);
			setCityWeather(res2.data[0]);
		} else {
			dispatch(toggleModal('Error fetching data...'));
		}
	}, [currentCity, dispatch]);

	useEffect(() => {
		const cityProp = history.location.state;
		cityProp && setCurrentCity(cityProp);
		fetchAndSet();
		history.replace();
	}, [currentCity, history, fetchAndSet]);

	useEffect(() => {
		setFevorite(favorites.some((city) => city.cityKey === currentCity.cityKey));
	}, [favorites, currentCity]);

	return (
		<div>
			<div className='search'>
				<CustomInput {...{ setCurrentCity }} />
			</div>
			<Card weatherIcon={cityWeather && cityWeather.WeatherIcon}>
				{cityWeather && (
					<div className='main_weather'>
						<IconButton
							onClick={() => {
								dispatch(toggleFavorite({ ...cityWeather, ...currentCity }));
							}}>
							{isFavorite ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderIcon />}
						</IconButton>
						<WeatherCard currentCity={currentCity} cityWeather={cityWeather} width='700' iconWidth='200' />
						{fiveDayForecast &&
							fiveDayForecast.map((forecast, idx) => <WeatherCard key={idx} forecast={forecast} width='120' iconWidth='100' />)}
					</div>
				)}
			</Card>
		</div>
	);
};

export default Mainpage;
