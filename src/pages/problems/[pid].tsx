import Topbar from "@/components/topbar";
import Workspace from "@/components/Workspace/workspace";
import React from "react";
import { problems } from "@/utils/problems";
import { Problem } from "@/utils/types/problem";
import useHasMounted from "@/hooks/useHasMounted";

type ProblemPageProps = {
    problem: Problem,
};

export default function ProblemPage({problem}: ProblemPageProps) {
	const hasMounted = useHasMounted();

	if(!hasMounted) return null;

    return <div>
        <Topbar problemPage />
        <Workspace problem={problem} />
    </div>;
};

export async function getStaticPaths() {
	const paths = Object.keys(problems).map((key) => ({
		params: { pid: key },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }: { params: { pid: string } }) {
	const { pid } = params;
	const problem = problems[pid];

	if (!problem) {
		return {
			notFound: true,
		};
	}
	problem.handlerFunction = problem.handlerFunction.toString();
	return {
		props: {
			problem,
		},
	};
}