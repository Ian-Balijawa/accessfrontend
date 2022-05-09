import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { Docs as Doc } from '../../components/Docs/App';

export default function systemManaulPage({
	pageComponentProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return <Doc />;
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
	return {
		props: {
			pageComponentProps: { data: {} },
		},
	};
}
