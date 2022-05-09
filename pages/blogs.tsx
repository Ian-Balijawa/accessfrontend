import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import { App as Blog } from '../components/Blogs/App';

export default function blogsPage({
	pageComponentProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<>
			<Head>
				<title>Blogs | Read through our blogs for information </title>
				<meta
					name='description'
					content='blogging just about anything in our business events'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Blog />
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
