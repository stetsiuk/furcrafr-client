import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API;

const $axios = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
});

export { $axios };
