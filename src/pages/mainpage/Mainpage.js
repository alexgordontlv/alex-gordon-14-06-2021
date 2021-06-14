import React, { useState, useEffect } from 'react';
import Card from '../../components/card/Card';
import axios from 'axios';

import './mainpage.styles.css';
import { useQuery } from 'react-query';
const API = 'KMQOVqRgfYZd7EkMk5e2xVcabmETmQvd';
const Mainpage = () => {
	const [input, setInput] = useState('');
	const [suggestions, setSuggestions] = useState('');

	const getAutoComplete = async (location) => {
		const { data } = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API}&q=${location}`);
		setSuggestions(data);
	};

	useEffect(() => {
		const timeOut = setTimeout(() => {
			getAutoComplete(input);
		}, 1000);
		return () => clearTimeout(timeOut);
	}, [input]);
	console.log('suggestions', suggestions);
	return (
		<div>
			<input onChange={(e) => setInput(e.target.value)} className='location_input' tpye='text' placeholder='Enter Location' />
			<Card weatherCondition='cloudy'>hi</Card>
		</div>
	);
};

export default Mainpage;
