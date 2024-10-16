import { FC, PropsWithChildren } from 'react';

import { ReactQueryProvider } from './react-query.provider';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
	return <ReactQueryProvider>{children}</ReactQueryProvider>;
};
