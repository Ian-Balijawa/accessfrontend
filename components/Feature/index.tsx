import {
	Box,
	Center,
	Heading,
	Img,
	SimpleGrid,
	Stack,
	useColorModeValue as mode,
} from '@chakra-ui/react';
import { FaCopy, FaPlug, FaRecycle } from 'react-icons/fa';
import { FeatureComponent } from './FeatureComponent';

export function Feature() {
	return (
		<Box as='section' bg={mode('gray.50', 'gray.800')} pt='16' pb='32'>
			<Box
				maxW={{ base: 'xl', md: '7xl' }}
				mx='auto'
				px={{ base: '6', md: '8' }}
			>
				<Heading
					textAlign='center'
					letterSpacing='tight'
					fontWeight='extrabold'
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing
				</Heading>
				<Box mt='24'>
					<SimpleGrid
						columns={{ base: 1, md: 2 }}
						spacing={{ base: '16', md: '8' }}
					>
						<Stack spacing='12' maxW='lg'>
							<FeatureComponent
								icon={<Box as={FaCopy} w='6' h='6' />}
								title='100% transparent'
							>
								Amet minim mollit non deserunt ullamco est sit
								aliqua dolor do amet sint. Velit officia
								consequat duis enim velit mollit. Exercitation
								veniam consequat sunt.
							</FeatureComponent>
							<FeatureComponent
								icon={<Box as={FaPlug} w='6' h='6' />}
								title='Local bank support'
								// children={undefined}
							>
								Amet minim mollit non deserunt ullamco est sit
								aliqua dolor do amet sint. Velit officia
								consequat duis enim velit mollit. Exercitation
								veniam consequat sunt.
							</FeatureComponent>
							<FeatureComponent
								icon={<Box as={FaRecycle} w='6' h='6' />}
								title='Savings automation'
								// children={undefined}
							>
								Amet minim mollit non deserunt ullamco est sit
								aliqua dolor do amet sint. Velit officia
								consequat duis enim velit mollit. Exercitation
								veniam consequat sunt.
							</FeatureComponent>
						</Stack>
						<Center shadow='lg' minH='26rem'>
							<Img
								objectFit='cover'
								w='full'
								h='full'
								src='/images/sheena.jpg'
								alt='Holding phone with app installed'
							/>
						</Center>
					</SimpleGrid>
				</Box>
			</Box>
		</Box>
	);
}
