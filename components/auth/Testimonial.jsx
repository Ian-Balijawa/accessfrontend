import { Box, Flex, HStack, Img, Text, useColorModeValue as mode } from '@chakra-ui/react'

import { ImQuotesLeft } from 'react-icons/im';

export const Testimonial = () => {
	return (
		<Flex as='blockquote' flex='1'>
			<Box marginEnd='4' fontSize='32px' color='gray.300'>
				<ImQuotesLeft />
			</Box>
			<Box>
				<Text fontSize='2xl' mt='4'>
					Lorem dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna
					aliqua.Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</Text>
				<HStack spacing='4' mt='8'>
					<Img
						w='12'
						h='12'
						alt='Sheena'
						rounded='full'
						objectFit='cover'
						src='/images/sheena2.jpg'
					/>
					<Box>
						<Text as='cite' fontStyle='normal' fontWeight='medium'>
							Sheena
						</Text>
						<Text color={mode('gray.600', 'gray.400')}>
							VP, Product and Engineering @somecompany
						</Text>
					</Box>
				</HStack>
			</Box>
		</Flex>
	);
};
