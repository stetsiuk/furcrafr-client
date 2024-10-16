'use client';

import { FC, PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
		},
	},
});

export const ReactQueryProvider: FC<PropsWithChildren> = ({ children }) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
