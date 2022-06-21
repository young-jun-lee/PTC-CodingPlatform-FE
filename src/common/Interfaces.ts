export interface ProblemKeyProps {
	part: string;
	problemDescription: string;
	points: number;
	inputSpecification: string;
	outputSpecification: string;
	sampleInput: string[] | string | number;
	sampleOutput: string[] | string;
	hints: {
		text: string;
		link: string;
	}[];
}
export interface WeekProps {
	week: number;
}

export interface ProblemProps extends WeekProps {
	questionNum: number;
}
export interface PartsProps extends ProblemProps {
	// redefine type of problemKeys later
	problemKeys: ProblemKeyProps;
}
