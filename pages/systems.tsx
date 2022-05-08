import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import data from '../data/systems.json';
import {
	Box,
	Flex,
	Heading,
	Img,
	Link,
	LinkBox,
	LinkOverlay,
	SimpleGrid,
	Button,
	Text,
	useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';
import { BsArrowRight, BsClockFill } from 'react-icons/bs';
import { LINKS } from '../constants/Links';
import { ROUTES } from '../constants/routes';

interface BlogProps {
	id: string;
	name: string;
	href: string;
	image: string;
	description: string;
	price: number;
}

const Card = (props: BlogProps) => {
	const { href, description, image, name, price, id } = props;
	return (
		<LinkBox
			as='article'
			bg={{ sm: mode('white', 'gray.700') }}
			shadow={{ sm: 'base' }}
			rounded={{ sm: 'md' }}
			overflow='hidden'
			transition='all 0.2s'
			_hover={{ shadow: { sm: 'lg' } }}
		>
			<Flex direction='column'>
				<Img height='60' objectFit='cover' alt={name} src={image} />
				<Flex direction='column' px={{ sm: '6' }} py='5'>
					<Text
						casing='uppercase'
						letterSpacing='wider'
						fontSize='xs'
						fontWeight='semibold'
						mb='2'
						color='gray.500'
					>
						{name}
					</Text>
					<Heading as='h3' size='sm' mb='2' lineHeight='base'>
						<LinkOverlay href={href}>{name}</LinkOverlay>
					</Heading>
					<Text
						noOfLines={2}
						mb='8'
						color={mode('gray.600', 'gray.400')}
					>
						{description}
					</Text>
					<Flex
						align='baseline'
						justify='space-between'
						fontSize='sm'
						color={mode('gray.600', 'gray.400')}
					>
						<Text>
							<Box as='a' textDecor='ButtonShadow' href={href}>
								<Button>{`Price: UGX${price}`}</Button>
							</Box>
						</Text>
						<Link href='#'>
							<Button colorScheme='blue' size='md' fontSize='md'>
								{'Download Now'}
							</Button>
						</Link>
					</Flex>
				</Flex>
			</Flex>
		</LinkBox>
	);
};

export default function systemsPage({
	pageComponentProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<Box
			as='section'
			bg={mode('gray.50', 'gray.800')}
			py={{ base: '10', sm: '24' }}
		>
			<Box
				maxW={{ base: 'xl', md: '7xl' }}
				mx='auto'
				px={{ base: '6', md: '8' }}
			>
				<Heading size='xl' mb='8' fontWeight='extrabold'>
					Featured Systems
				</Heading>
				<SimpleGrid columns={{ base: 1, md: 3 }} spacing='12' mb='10'>
					{data.map((system) => (
						<Card
							price={system.price}
							name={system.name}
							description={system.description}
							key={system.id}
							id={system.id}
							href={system.href}
							image={system.image}
						/>
					))}
				</SimpleGrid>
			</Box>
		</Box>
	);
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
	return {
		props: {
			pageComponentProps: {},
		},
	};
}
