import Head from 'next/head';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

import { App as Header } from '../components/Header/App';
import { Text } from '@chakra-ui/react';

export default function contactPage({
	pageComponentProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<>
			<Head>
				<title>Contact us | accessadvancedsystems </title>
				<meta
					name='contact us'
					content='contact us through this form with the folling address'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<Text margin='10'>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Pariatur veniam asperiores incidunt labore iusto. Ex,
				perferendis maxime ea eius odit, voluptates unde odio, nisi
				exercitationem ipsa illum quam laboriosam sed quia corporis?
				Officiis, quis, modi autem quasi maiores obcaecati incidunt sint
				ipsam provident eos distinctio fugit qui harum doloremque.
				Inventore, totam? Impedit vitae eum, unde consectetur qui
				quaerat atque molestiae modi iusto consequatur, rerum soluta
				odit sunt voluptatem quia? Aperiam omnis repudiandae eaque
				sapiente sed molestias dolorum, deleniti odio ex nemo,
				praesentium alias natus eos obcaecati? Velit pariatur,
				repudiandae explicabo delectus debitis culpa laborum
				necessitatibus, cupiditate nostrum quo soluta consequatur.
			</Text>
		</>
	);
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
	return {
		props: {
			pageComponentProps: { data: {} },
		},
	};
}
