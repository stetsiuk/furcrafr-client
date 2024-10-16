import { $axios } from '@/setup/libs/axios';

import { AuthLoginData } from './auth.types';

export const authApi = {
	login(data: AuthLoginData) {
		return $axios.post('/auth/login');
	},
};
