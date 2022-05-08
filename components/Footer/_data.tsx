import { Badge } from '@chakra-ui/react'
import * as React from 'react';

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { LINKS } from '../../constants/Links';
import { ROUTES } from '../../constants/routes';

export interface LinkGroupData {
  title: string
  links: Array<{
    label: string
    href: string
    badge?: React.ReactElement
  }>
}

export const links: LinkGroupData[] = [
  {
    title: 'Product',
    links: [
      { label: 'How it works', href: ROUTES.DOCS },
     { label: 'Pricing', href: ROUTES.PRICING },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Learn Center', href: ROUTES.DOCS },
      { label: 'Support', href: ROUTES.CONTACT_US },
      { label: 'Events', href: ROUTES.EVENTS },
      { label: 'Terms of Service', href: ROUTES.TOS },
      { label: 'Privacy Policy', href: ROUTES.PRIVACY },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Our Story', href: ROUTES.ABOUT },
      { label: 'Blog', href: ROUTES.BLOGS },
      { label: 'Email us', href: ROUTES.CONTACT_US },
    ],
  },
  {
    title: 'Get Started',
    links: [
      { label: 'Start for free', href: ROUTES.SIGNUP },
      { label: 'Sign in', href: ROUTES.SIGNIN },
    ],
  },
]

interface SocialLink {
  label: string
  icon: React.ReactElement
  href: string
}

export const socialLinks: SocialLink[] = [
  { label: 'Facebook', icon: <FaFacebook />, href: LINKS.FACEBOOK },
  { label: 'Instagram', icon: <FaInstagram />, href: LINKS.INSTAGRAM },
  { label: 'LinkedIn', icon: <FaLinkedin />, href: LINKS.LINKEDIN },
  { label: 'Twitter', icon: <FaTwitter />, href: LINKS.TWITTER },
]

interface FooterLink {
  label: string
  href: string
}

export const footerLinks: FooterLink[] = [
  { label: 'Terms of Service', href: ROUTES.TOS },
  { label: 'Privacy Policy', href: ROUTES.PRIVACY },
  { label: 'Offer terms', href: ROUTES.HOME },
  { label: 'Legal notice', href: ROUTES.HOME },
  { label: 'Sitemap', href: ROUTES.HOME },
]
