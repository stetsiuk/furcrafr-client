import { create } from 'zustand';

import { User } from '@/shared/types/user';

type UserStoreType = {
	user: User | null;
};

export const useUserStore = create<UserStoreType>((set) => ({
	user: null,

	setUser: (user: User) => set({ user }),
}));
