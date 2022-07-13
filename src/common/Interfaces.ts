import { StaticImageData } from "next/image";
export interface ContentProps {
	WeekNumber: string;
	Theme: string;
	Problems: {
		Title: string;
		Images?: { link: StaticImageData }[];
		Paragraph: string;
		Parts: {
			part: string;
			problemDescription: string;
			points: number;
			inputSpecification: string;
			outputSpecification: string;
			sampleInput: string[] | string | number;
			sampleOutput: string[] | string;
		}[];
	}[];
}
export interface ProblemKeyProps {
	part: string;
	problemDescription: string;
	points: number;
	inputSpecification: string;
	outputSpecification: string;
	sampleInput: string[] | string | number;
	sampleOutput: string[] | string;
	hints?: {
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
	problemKeys: ProblemKeyProps;
}
