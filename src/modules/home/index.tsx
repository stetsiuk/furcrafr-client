'use client';

import { useUserStore } from '@/shared/store';
import { useAuthLoginMutation } from '@/shared/services/auth/auth.hooks';

export const Home = () => {
	const user = useUserStore((state) => state.user);

	const { mutate } = useAuthLoginMutation();

	const handleSubmit = () => {
		const data = { identifier: '', password: '' };

		mutate(data, {
			onSuccess: () => {},
		});
	};

	if (user) {
		return <div>Welcome</div>;
	}

	return (
		<form>
			<input type="text" placeholder="Email" />
			<input type="text" placeholder="Password" />
		</form>
	);
};
