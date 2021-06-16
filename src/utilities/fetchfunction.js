import axios from 'axios';

const API = 'KMQOVqRgfYZd7EkMk5e2xVcabmETmQvd';
const fetchUrls = async (queryKey, cityKey) => {
	let error;
	let data;
	const urls = {
		autoComplete: `https://cors-anywhere.herokuapp.com/https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API}&q=${cityKey}`,
		weatherCondition: `https://cors-anywhere.herokuapp.com/https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API}`,
		weatherForecast: `https://cors-anywhere.herokuapp.com/https://dataservice.accuweather.com//forecasts/v1/daily/5day/${cityKey}?metric=true&apikey=${API}`,
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
