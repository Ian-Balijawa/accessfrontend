import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Footer, NavBar } from '../components';
import * as React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<NavBar />
			<Component {...pageProps} />
			<Footer />
		</ChakraProvider>
	);
}

export default MyApp;
