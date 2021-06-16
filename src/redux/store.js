import { createStore } from 'redux';
import weatherReducer from './weather.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	user: weatherReducer,
});
const Store = createStore(weatherReducer);

export default Store;
