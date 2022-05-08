import { IoCalendar, IoGrid, IoHelpBuoy } from 'react-icons/io5';
import { MdWeb } from 'react-icons/md';
import { ROUTES } from '../../constants/routes';
import * as React from 'react';

export interface Link {
	label: string;
	href?: string;
	children?: Array<{
		label: string;
		description?: string;
		href: string;
		icon?: React.ReactElement;
	}>;
}

export const links: Link[] = [
	{ label: 'Systems', href: ROUTES.PRODUCTS },
	{ label: 'Pricing', href: ROUTES.PRICING },
	{
		label: 'Resources',
		children: [
			{
				label: 'Get Help From Documentation',
				description:
					'Read our documentation and FAQs, or get in touch.',
				href: ROUTES.DOCS,
				icon: <IoHelpBuoy />,
			},
			{
				label: 'Events & Meetups',
				description: 'Discover and join your local Sketch community.',
				href: ROUTES.EVENTS,
				icon: <IoCalendar />,
			},
			{
				label: 'Blog',
				description:
					'Get updates, articles and insights from the team.',
				href: ROUTES.BLOGS,
				icon: <MdWeb />,
			},
		],
	},
	{ label: 'Web Design', href: ROUTES.WEBDESIGN },
];
