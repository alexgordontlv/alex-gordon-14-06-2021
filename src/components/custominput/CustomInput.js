import React, { useState, useEffect } from 'react';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';
import fetchUrls from '../../utilities/fetchfunction';
import { toggleModal } from '../../redux/weather.actions';
import { useDispatch } from 'react-redux';

import './custominput.styles.css';
const CustomInput = ({ setCurrentCity }) => {
	const [input, setInput] = useState('');
	const [suggestions, setSuggestions] = useState([]);
	const dispatch = useDispatch();
	const handleSuggestionClick = (city) => {
		setCurrentCity({ cityName: city.LocalizedName, cityKey: city.Key });
		setInput('');
		setSuggestions([]);
	};
	useEffect(() => {
		const timeOut = setTimeout(async () => {
			if (input.length > 0) {
				const { data, error } = await fetchUrls('autoComplete', input);
				if (error) dispatch(toggleModal('Error fetching  suggestions'));
				else setSuggestions(data);
			}
		}, 1000);
		return () => clearTimeout(timeOut);
	}, [input, dispatch]);

	return (
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
						suggestions
							.slice(0, 5)
							.map((city, idx) => (
								<ComboboxOption key={idx} value={city.LocalizedName} className='search_option' onClick={() => handleSuggestionClick(city)} />
							))}
				</ComboboxList>
			</ComboboxPopover>
		</Combobox>
	);
};

export default CustomInput;
