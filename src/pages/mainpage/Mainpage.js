import React, { useState, useEffect } from 'react';
import Card from '../../components/card/Card';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';
import axios from 'axios';

import './mainpage.styles.css';
import { useQuery } from 'react-query';
const API = 'WJ9kOJdwSpEsVz3E6l5ULWiPpX8JoJL0';
const Mainpage = () => {
	const [input, setInput] = useState('');
	const [suggestions, setSuggestions] = useState([]);
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
			<div className='search'>
				<Combobox>
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
								suggestions.map((city, idx) => <ComboboxOption key={idx} value={city.LocalizedName} className='search_option' />)}
						</ComboboxList>
					</ComboboxPopover>
				</Combobox>
			</div>
			<Card weatherCondition='cloudy'>hi</Card>
		</div>
	);
};

export default Mainpage;
