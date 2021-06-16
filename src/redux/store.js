import { createStore } from 'redux';
import weatherReducer from './weather.reducer';

const Store = createStore(weatherReducer);

export default Store;
