import {
	Box,
	Button,
	Flex,
	FlexProps,
	HStack,
	useDisclosure,
	VisuallyHidden,
	useColorModeValue as mode,
} from '@chakra-ui/react';
import Image from 'next/image';
import { ROUTES } from '../../constants/routes';
import { NavLink } from './NavLink';
import { NavMenu } from './NavMenu';
import { Submenu } from './Submenu';
import { ToggleButton } from './ToggleButton';
import { links } from './_data';

const MobileNavContext = (props: FlexProps) => {
	const { isOpen, onToggle } = useDisclosure();
	return (
		<>
			<Flex
				align='center'
				justify='space-between'
				className='nav-content__mobile'
				{...props}
			>
				<Box flexBasis='6rem'>
					<ToggleButton isOpen={isOpen} onClick={onToggle} />
				</Box>
				<Box as='a' rel='home' mx='auto'>
					<Image
						src={'/icons/Logo.png'}
						width={40}
						height={40}
						alt='logo'
					/>
				</Box>
				<Box visibility={{ base: 'hidden', sm: 'visible' }}>
					<Button as='a' colorScheme='blue'>
						Get Started
					</Button>
				</Box>
			</Flex>
			<NavMenu animate={isOpen ? 'open' : 'closed'}>
				{links.map((link, idx) =>
					link.children ? (
						<Submenu.Mobile key={idx} link={link} />
					) : (
						<NavLink.Mobile key={idx} href={link.href}>
							{link.label}
						</NavLink.Mobile>
					)
				)}
				<Box>
					<Image
						src={'/images/sheena.jpg'}
						width={50}
						height={50}
						alt={'user'}
					/>
				</Box>
				<Button colorScheme='blue' w='full' size='lg' mt='5'>
					Try for free
				</Button>
			</NavMenu>
		</>
	);
};

const DesktopNavContent = (props: FlexProps) => {
	return (
		<Flex
			className='nav-content__desktop'
			align='center'
			justify='space-between'
			{...props}
		>
			<Box as='a' href={ROUTES.HOME} rel='home'>
				<VisuallyHidden>accessadvancedsystems</VisuallyHidden>
				{/* <Logo h='6' iconColor='blue.500' /> */}
				<Image
					src={'/icons/Logo.png'}
					width={40}
					height={40}
					alt='logo'
				/>
			</Box>
			<HStack
				as='ul'
				id='nav__primary-menu'
				aria-label='Main Menu'
				listStyleType='none'
			>
				{links.map((link, idx) => (
					<Box as='li' key={idx} id={`nav__menuitem-${idx}`}>
						{link.children ? (
							<Submenu.Desktop link={link} />
						) : (
							<NavLink.Desktop href={link.href}>
								{link.label}
							</NavLink.Desktop>
						)}
					</Box>
				))}
			</HStack>
			<HStack spacing='8' minW='240px' justify='space-between'>
				<Box
					as='a'
					href={ROUTES.SIGNIN}
					color={mode('blue.600', 'blue.300')}
					fontWeight='bold'
				>
					Sign In
				</Box>
				<Button
					as='a'
					href={ROUTES.SIGNUP}
					colorScheme='blue'
					fontWeight='bold'
				>
					Sign up for free
				</Button>

				<Box>
					<Flex>
						<Image
							src={'/images/sheena.jpg'}
							width={50}
							height={50}
							alt='customerphoto'
						/>
					</Flex>
				</Box>
			</HStack>
		</Flex>
	);
};

export const NavContent = {
	Mobile: MobileNavContext,
	Desktop: DesktopNavContent,
};
