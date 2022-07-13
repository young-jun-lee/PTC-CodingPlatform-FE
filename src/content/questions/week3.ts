import triangleImage from "../images/tranquil_triangle.png";
export default {
	WeekNumber: "3",
	Theme: "Intermediate Math",
	Problems: [
		{
			Title: "Overlapping Fencing",
			Paragraph:
				"Tom the Tanuki is building a fence along a straight road – but his neighbor is also doing the same! They both have an idea where they want to place the fence along the road, and they need your help to figure out if their fences will overlap!",
			Parts: [
				{
					part: "A",
					problemDescription:
						"Given that both fences are continuous and can be placed anywhere along the road, you will be given the coordinates of each fence and you need to determine if they overlap. The road spans from -1000 to 1000 units.",
					points: 5,
					inputSpecification:
						"The input consists of two lines. The first line of input contains two integers separated by a space, x and y – the starting and end coordinates of the first fence (-1000 ≤ x ≤ y ≤ 1000). The second line of input contains two integers separated by a space, a and b – the starting and end coordinates of the second fence (-1000 ≤ a ≤ b ≤ 1000).",
					outputSpecification:
						"Print a single character - Y if the fences overlap, and N if they don’t. (Print N if the fences overlap at a single point.)",
					sampleInput: ["1 4", "2 5"],
					sampleOutput: ["Y"],
				},
			],
		},
		{
			Title: "The Tranquil Triangle",
			Images: [
				{
					link: triangleImage,
				},
			],
			Paragraph:
				"Florian is a wizard who enjoys exploring mathematics. One day, he enchants a spell that creates a very odd triangle. This triangle creates a pattern on his carpet that he can’t seem to understand. It is constructed of rows that grow in size and each of which contains several numbers. He’s given you a picture of what the triangle looks like below. Remember that Florian is not great with computers and he always starts counting from 1! He needs your help to understand the secrets of this mysterious triangle and use it to do some magic!",
			Parts: [
				{
					part: "A",
					problemDescription:
						"Florian first wants a basic measurement to examine the triangle. Given the row number of the triangle, find how many numbers the row contains and find the sum of those numbers.",
					points: 3,
					inputSpecification:
						"The input will consist of a single integer N (1 ≤ N ≤ 100) which represents the row number of the triangle. Remember that all counting starts from 1; N = 1 corresponds to the first row, N = 2 corresponds to the second row, etc.",
					outputSpecification:
						"Print two space-separated integers on the same line: how many numbers are in the Nth row, followed by the sum of all the numbers in the Nth row.",
					sampleInput: ["3"],
					sampleOutput: "3 4",
				},
				{
					part: "B",
					problemDescription:
						"Florian now wants this process to be reversed in a more intricate fashion. Given all the integers in a certain row, find the row number corresponding to these integers.",
					points: 5,
					inputSpecification:
						"The input will consist of a single line of some number of space-separated integers, which represent the values of a certain row in the triangle. The number of integers will not exceed 100. Remember that all counting starts from 1.",
					outputSpecification:
						"Print which row number those integers correspond to.",
					sampleInput: ["1 3 3 1"],
					sampleOutput: "4",
				},
				{
					part: "C",
					problemDescription:
						"Florian wants to take this even further, he needs to identify a specific value in the triangle given its location. Given a certain row in the triangle and an index in that row, find the corresponding value.",
					points: 10,
					inputSpecification:
						"The input will consist of two space separated integers: N and X (1 ≤ X ≤ N ≤ 100). N corresponds to a certain row number in the triangle, and X represents the index of a value in row N. Remember that all counting starts from 1.",
					outputSpecification:
						"Print the specific value in the triangle which corresponds to the given values for N and X.",
					sampleInput: ["6 2"],
					sampleOutput: "5",
				},
			],
		},

		{
			Title: "Programming Prime Numbers",
			Paragraph:
				"After losing every game in the megachess tournament they played last week, Alex decides to learn some programming instead. Unfortunately, they are as clueless at programming as they are at megachess. Can you help them out?",
			Parts: [
				{
					part: "A",
					problemDescription:
						"Alex decides to improve their coding skills by doing Week 3 of the PTC Coding Challenge when they come across a vague problem about prime numbers. The problem reads, ‘Given an integer n (4 ≤ n ≤ 2000000), output t prime numbers (where t is an integer of your choosing such that 1 ≤ t ≤ 2000000) such that the sum of the t prime numbers is n’. Alex is disappointed with the lack of backstory and also the very difficult problem. They spend a long time thinking about different ways to go about solving the problem, and they realize that if n is even, they can just output the prime number 2, n/2 times, which would result in a sum of n. However, they can’t manage to figure out what to do if n is odd, so they come to you for help. Can you figure out how to deal with the odd numbers and help Alex solve the problem?",
					points: 10,
					inputSpecification:
						"The input consists of a single positive integer n (4 ≤ n ≤ 2000000).",
					outputSpecification:
						"Output t space-separated prime numbers (where t is a number of your choosing, and 1 ≤ t ≤ 2000000) on one line such that the sum of the t prime numbers is n. Note that you should not output t.",
					sampleInput: ["13"],
					sampleOutput: "2 3 3 5",
				},
			],
		},
	],
};
