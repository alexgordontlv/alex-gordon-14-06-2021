import React, { useState, useEffect } from 'react';
import Card from '../../components/card/Card';
import WeatherCard from '../../components/weathercard/WeatherCard';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toggleFavorite } from '../../redux/weather.actions';
import './mainpage.styles.css';

const API = 'rYBVyyZFhtZkPwiQI6eQWaIYipiGFVma';
const Mainpage = () => {
	const [input, setInput] = useState('');
	const [cityWeather, setCityWeather] = useState('');
	const [cityName, setCityName] = useState('');
	const dispatch = useDispatch();
	const isFavorite = useSelector((state) => state.isFavorite);

	const [fiveDayForecast, setFiveDayForecast] = useState([]);
	const [suggestions, setSuggestions] = useState([]);

	const getAutoComplete = async (location) => {
		const { data } = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API}&q=${location}`);
		setSuggestions(data);
	};

	const getWeatherCondition = async (cityKey) => {
		const { data } = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API}`);
		setCityWeather(data);
	};
	const getWeatherForecast = async (cityKey) => {
		const { data } = await axios.get(`http://dataservice.accuweather.com//forecasts/v1/daily/5day/${cityKey}?metric=true&apikey=${API}`);
		setFiveDayForecast(data.DailyForecasts);
	};

	useEffect(() => {
		const timeOut = setTimeout(() => {
			getAutoComplete(input);
		}, 1000);
		return () => clearTimeout(timeOut);
	}, [input]);
	console.log(isFavorite);
	return (
		<div>
			<div className='search'>
				<Combobox onSelect={(city) => setCityName(city)}>
					<ComboboxInput
						value={input}
						onChange={(e) => {
							setInput(e.target.value);
						}}
						placeholder='Search your city weather!'
					/>
					<ComboboxPopover>
						<ComboboxList className='option'>
							{suggestions &&
								suggestions.slice(0, 5).map((city, idx) => (
									<ComboboxOption
										key={idx}
										value={city.LocalizedName}
										className='search_option'
										onClick={() => {
											getWeatherCondition(city.Key);
											getWeatherForecast(city.Key);
											setInput('');
											setSuggestions([]);
										}}
									/>
								))}
						</ComboboxList>
					</ComboboxPopover>
				</Combobox>
			</div>
			<Card weatherIcon={cityWeather && cityWeather[0].WeatherIcon}>
				{cityWeather && (
					<div className='main_weather'>
						<IconButton
							onClick={() => {
								dispatch(toggleFavorite({ ...cityWeather[0], cityName }));
							}}>
							{isFavorite ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderIcon />}
						</IconButton>
						<WeatherCard cityName={cityName} cityWeather={cityWeather[0]} width='700' iconWidth='200' />
						{fiveDayForecast &&
							fiveDayForecast.map((forecast, idx) => <WeatherCard key={idx} forecast={forecast} width='120' iconWidth='100' />)}
					</div>
				)}
			</Card>
		</div>
	);
};

export default Mainpage;
