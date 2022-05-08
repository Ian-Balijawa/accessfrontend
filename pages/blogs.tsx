import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

import { App as Blog } from '../components/Blogs/App';

export default function blogsPage({
	pageComponentProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return <Blog />;
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
	return {
		props: {
			pageComponentProps: { data: {} },
		},
	};
}
