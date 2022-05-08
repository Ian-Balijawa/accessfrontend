import {
	Box,
	Flex,
	Grid,
	Heading,
	Text,
	useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';
import { BlogAuthor } from './BlogAuthor';
import { BlogMedia } from './BlogMedia';
import { BlogMeta } from './BlogMeta';

export const App = () => {
	return (
		<Box as='section' bg={mode('gray.50', 'inherit')} py='24'>
			<Box
				maxW={{ base: 'xl', md: '7xl' }}
				mx='auto'
				px={{ base: '6', md: '8' }}
			>
				<Grid
					templateColumns={{ base: '1fr', md: '1fr 24rem' }}
					columnGap={{ base: '12', lg: '20' }}
					rowGap='10'
				>
					<BlogMedia
						alt='Getting Started with Chakra'
						src='/images/sheena.jpg'
					/>
					<Flex direction='column' h='full'>
						<Box flex='1'>
							<BlogMeta
								type='Video'
								tags={['react', 'css-in-js']}
							/>
							<Heading size='xl' mt='6' mb='4'>
								Getting Started with Business Management Systems
							</Heading>
							<Text
								fontSize='lg'
								color={mode('gray.600', 'gray.400')}
								lineHeight='tall'
							>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</Text>
						</Box>
						<BlogAuthor
							mt='8'
							name='Musoke Herbet'
							image='/images/sheena.jpg'
							role='Systems Developer and CEO'
						/>
					</Flex>
				</Grid>
			</Box>
		</Box>
	);
};
