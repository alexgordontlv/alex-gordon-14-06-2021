import React, { useState, useCallback, useEffect } from 'react';
import Card from '../../components/card/Card';
import { useSelector, useDispatch } from 'react-redux';
import WeatherCard from '../../components/weathercard/WeatherCard';
import fetchUrls from '../../utilities/fetchfunction';
import { toggleModal } from '../../redux/weather.actions';

const Favorites = () => {
	const [favorites, setFavorites] = useState([]);
	const dispatch = useDispatch();
	const stateFavorites = useSelector((state) => state.favorites);

	const fetchAndSet = useCallback(async () => {
		const newFavorites = await Promise.all(
			stateFavorites.map(async (city) => {
				const { data, error } = await fetchUrls('weatherCondition', city.cityKey);
				if (error) dispatch(toggleModal('Error fetching favorites'));
				else return { ...data[0], cityName: city.cityName, cityKey: city.cityKey };
			})
		);
		setFavorites(newFavorites);
	}, [stateFavorites, dispatch]);

	useEffect(() => {
		fetchAndSet();
	}, [stateFavorites, fetchAndSet]);

	return (
		<Card>
			{favorites &&
				favorites.map((city, idx) => (
					<WeatherCard favoritecard='favoritecard' currentCity={city} key={idx} cityWeather={city} width='120' iconWidth='100' />
				))}
		</Card>
	);
};

export default Favorites;
