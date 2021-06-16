import { WEATHER_TYPES } from './weather.types';
const INITIAL_STATE = {
	error: {
		open: false,
		message: '',
	},
	favorites: [],
	theme: 'light',
};

const weatherReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case WEATHER_TYPES.SET_THEME:
			return { ...state, theme: action.payload };
		case WEATHER_TYPES.TOGGLE_FAVORITE:
			let flag = state.favorites.some((city) => city.cityKey === action.payload.cityKey);
			let newFavorites;
			if (flag) {
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
		case WEATHER_TYPES.TOGGLE_MODAL:
			return { ...state, error: { ...state.error, open: true, message: action.payload } };
		case WEATHER_TYPES.HIDE_MODAL:
			return INITIAL_STATE;
		default:
			return state;
	}
};

export default weatherReducer;
