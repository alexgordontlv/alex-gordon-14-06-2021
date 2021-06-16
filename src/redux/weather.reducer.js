import { WEATHER_TYPES } from './weather.types';
const INITIAL_STATE = {
	autoCompleteLocations: [],
	weather: [],
	favorites: [],
	isFavorite: false,
	theme: 'light',
};

const weatherReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case WEATHER_TYPES.SET_THEME:
			return { ...state, theme: action.payload };
		case WEATHER_TYPES.TOGGLE_FAVORITE:
			let newFavorites;
			if (state.isFavorite) {
				newFavorites = state.favorites.filter((city) => city.cityName !== action.payload.cityName);
				return {
					...state,
					isFavorite: false,
					favorites: newFavorites,
				};
			} else {
				newFavorites = [...state.favorites, action.payload];
				return { ...state, isFavorite: true, favorites: newFavorites };
			}

		default:
			return state;
	}
};

export default weatherReducer;
