import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { Team } from '../components';

export default function teamPage({
	pageComponentProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return <Team />;
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
	return {
		props: {
			pageComponentProps: {},
		},
	};
}
