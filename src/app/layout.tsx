import { FC, PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Providers } from '@/setup/providers';

import '@/styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Furcraft',
	description: 'Furcraft',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main>
					<Providers>{children}</Providers>
				</main>
			</body>
		</html>
	);
};

export default RootLayout;
