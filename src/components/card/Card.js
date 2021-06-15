import React from 'react';
import './card.styles.css';
import weatherTypes from './weathertypes';
const Card = ({ children, weatherIcon }) => {
	let weatherCondition;
	if (weatherIcon < 4) weatherCondition = 'sunny';
	else if (weatherIcon >= 4 && weatherIcon < 11) weatherCondition = 'cloudy';
	else weatherCondition = 'stormy';

	return (
		<div className='card' style={{ background: weatherTypes[weatherCondition] }}>
			{children}
		</div>
	);
};

export default Card;
