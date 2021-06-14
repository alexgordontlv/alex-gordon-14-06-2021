import React from 'react';
import './card.styles.css';
import weatherTypes from './weathertypes';
const Card = ({ children, weatherCondition }) => {
	return (
		<div className='card' style={{ background: weatherTypes[weatherCondition] }}>
			{children}
		</div>
	);
};

export default Card;
