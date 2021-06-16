import axios from 'axios';
const API = process.env.REACT_APP_WEATHER_API;
const fetchUrls = async (queryKey, cityKey) => {
	let error;
	let data;
	const urls = {
		autoComplete: `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API}&q=${cityKey}`,
		weatherCondition: `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API}`,
		weatherForecast: `http://dataservice.accuweather.com//forecasts/v1/daily/5day/${cityKey}?metric=true&apikey=${API}`,
	};
	try {
		const res = await axios.get(urls[queryKey]);
		data = res.data;
	} catch (err) {
		error = err;
	}

	return { data, error };
};
export default fetchUrls;
