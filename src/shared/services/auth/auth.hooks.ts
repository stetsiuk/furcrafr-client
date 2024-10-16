import { useMutation, useQuery } from '@tanstack/react-query';

import { authApi } from './auth.api';
import { AuthLoginData } from './auth.types';

export const useAuthLoginMutation = () => {
	return useMutation({
		mutationKey: ['auth/login'],
		mutationFn: (data: AuthLoginData) => authApi.login(data),
	});
};
