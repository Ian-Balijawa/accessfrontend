import { NextPage } from 'next';
import Head from 'next/head';

import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import SignupContainer from '../components/auth/signup/SignupContainer';

export default function signupPage({
	pageComponentProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<>
			<Head>
				<title>Create an account</title>
				<meta
					name='description'
					content='create a free account with us'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<SignupContainer />
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
