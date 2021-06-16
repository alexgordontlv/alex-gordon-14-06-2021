import React, { useState } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../../redux/weather.actions';
import './navigation.styles.css';
import { Link } from 'react-router-dom';
const Navigation = () => {
	const [selected, setSelected] = useState(false);
	const currentTheme = useSelector((state) => state.theme);
	const dispatch = useDispatch();

	return (
		<div className={`navigation navigation_${currentTheme}`}>
			<Link to='/'>
				<h2 className={`nav_option nav_option_${currentTheme}`}>Home</h2>
			</Link>
			<Link to='/favorites'>
				<h2 className={`nav_option nav_option_${currentTheme}`}>Favorites</h2>
			</Link>
			<ToggleButton
				value='check'
				selected={selected}
				style={{ color: selected && '#82ca9d', fontSize: 16 }}
				onChange={() => {
					setSelected((selected) => !selected);
					dispatch(setTheme(selected ? 'light' : 'dark'));
				}}>
				{currentTheme}
			</ToggleButton>{' '}
		</div>
	);
};

export default Navigation;
