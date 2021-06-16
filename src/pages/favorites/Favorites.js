import React, { useState } from 'react';
import Card from '../../components/card/Card';
import { useSelector } from 'react-redux';
import WeatherCard from '../../components/weathercard/WeatherCard';

const Favorites = () => {
	const favorites = useSelector((state) => state.favorites);
	return (
		<Card>{favorites && favorites.map((city) => <WeatherCard cityName={city.cityName} cityWeather={city} width='120' iconWidth='100' />)}</Card>
	);
};

export default Favorites;
