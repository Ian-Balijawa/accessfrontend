import { Box, SimpleGrid, useColorModeValue as mode } from '@chakra-ui/react';
;
import { Component } from './Component';

export const Testimonial = () => {
	return (
		<Box as='section' bg={mode('gray.50', 'gray.800')}>
			<Box
				maxW={{ base: 'xl', md: '7xl' }}
				mx='auto'
				px={{ base: '6', md: '8' }}
			>
				<SimpleGrid
					py='16'
					columns={{ base: 1, lg: 2 }}
					spacing={{ base: '16', lg: '32' }}
				>
					<Component
						name='Sheena'
						role='Marketing Manager @ SomeSchool.com'
						image='/images/sheena.jpg'
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</Component>
					<Component
						name='Sheena'
						role='Engineering Manager @ Someclinic.com'
						image='/images/sheena2.jpg'
					>
						Accumsan tortor posuere ac ut consequat semper. Turpis
						cursus in hac habitasse platea. Hendrerit dolor magna
						eget est
					</Component>
				</SimpleGrid>
			</Box>
		</Box>
	);
};
