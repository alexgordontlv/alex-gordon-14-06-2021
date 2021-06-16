import { WEATHER_TYPES } from './weather.types';

export const setTheme = (theme) => {
	return {
		type: WEATHER_TYPES.SET_THEME,
		payload: theme,
	};
};

export const toggleFavorite = (favorite) => {
	return {
		type: WEATHER_TYPES.TOGGLE_FAVORITE,
		payload: favorite,
	};
};
