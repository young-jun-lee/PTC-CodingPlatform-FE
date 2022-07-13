import StringImage1 from "../images/string1.png";
import StringImage2 from "../images/string2.png";
export default {
	WeekNumber: "4",
	Theme: "Combo",
	Problems: [
		{
			Title: "Marching Band",
			Paragraph:
				"Tom the Tanuki is celebrating the success of his farm and wants to host a parade to celebrate and thank the town. There’s only one problem – for the marching band to work, they need to divide everyone into equal rows (meaning each row has the same number of people). Tom wants to give you the number of people for the marching band, and you have to tell him if it’s possible to divide everyone into equal rows.",
			Parts: [
				{
					part: "A",
					problemDescription:
						"Tom will tell you the number of people in the marching band and you have to let him know if that number will allow him to divide the band into equal rows for the parade. He also tells you that he wants to divide them into rows that have a length other than 1 and the number of people in the marching band. (The rows can’t be one person each, and there can’t just be one big row with everyone in it!)",
					points: 5,
					inputSpecification:
						"The input consists of a single integer x (1 ≤ x ≤ 1000), the number of people in the marching band.",
					outputSpecification:
						"Print a single character: Y if they can be divided into equal rows, print N if they can’t.",
					sampleInput: ["15"],
					sampleOutput: ["Y"],
				},
			],
		},
		{
			Title: "String Search",
			Images: [
				{
					link: StringImage1,
				},
				{
					link: StringImage2,
				},
			],
			Paragraph:
				"Senora is a locksmith who loves to solve puzzles that involve letters of the alphabet! At work, she examines strings, sets of characters (or letters), and is tasked with finding a secret message hidden inside them. Some examples of strings include: ‘hello’, ‘howareyou’, and ‘welcome’. The strings Senora works with also have indices which are numbers used to specify the specific elements or characters. Importantly, Senora needs you to remember that the counting starts from 0! However, Senora has a problem - her job has become more and more difficult due to a surplus of strings in recent weeks. She needs you to write a program that will obtain the secrets of a string and find its hidden ‘key’!",
			Parts: [
				{
					part: "A",
					problemDescription:
						"You’re given a certain string. Senora needs you to find its longest substring that has no repeating characters.",
					points: 5,
					inputSpecification:
						"The input will consist of one string S (1 ≤ |S| ≤ 100, where |S| means ‘length of S’). S represents the main string that needs to be examined.",
					outputSpecification:
						"Print the longest substring of S that has no repeating characters.",
					sampleInput: ["kpxkpxpp"],
					sampleOutput: "kpx",
				},
				{
					part: "B",
					problemDescription:
						"Senoro requires a solution similar to the last step but with a twist! This time, you’re given a certain string and a character within this string. You must output the longest substring that contains the specific character but contains no repeating characters.",
					points: 10,
					inputSpecification:
						"The input will consist of two space-separated strings: S and X (1 ≤ |S| ≤ 100, |X| = 1). Neither string will contain a space. S represents the main string that needs to be examined, and X represents a specific character inside S. Note that X is also a string, even though it only has a length of 1. It is guaranteed that X appears within S.",
					outputSpecification:
						"Print the longest substring within S that contains the character X and contains no repeating characters.",
					sampleInput: ["abcdad c"],
					sampleOutput: "abcd",
				},
			],
		},

		{
			Title: "Alex Goes to School",
			Paragraph:
				"After solving only one problem in last week’s problems, Alex decides to go to school to improve their coding skills. ",
			Parts: [
				{
					part: "A",
					problemDescription:
						"Alex is learning about arrays in their coding class! As the teacher goes over the basics of how arrays work, Alex quickly becomes bored and stops listening, since they already know how to index from 0 to n-1 to access any element in an n-element array. Instead, Alex picks up a calculator and starts adding up positive integers (1 + 2 + 3 + ...) to waste time until class is over. As Alex adds their numbers, they suddenly realize that on the ith addition, their calculator displays the answer obtained by adding the first (i+1) positive integers. For example, their calculator displays 3 after 1 and 2 are added, and displays 6 after 3 is added to the sum of 1 and 2. Realizing that this sequence of numbers is much more exciting and fun than any sequence the teacher is discussing, Alex wants to put these numbers into an array. However, computers are banned when the teacher is teaching and they can’t make an array without a computer! Can you help them?",
					points: 10,
					inputSpecification:
						"The input consists of a single positive integer n (1 ≤ n ≤ 100000).",
					outputSpecification:
						"Output n space-separated positive integers on a single line, where the ith integer is the sum of the first i positive integers.",
					sampleInput: ["3"],
					sampleOutput: "1 3 6",
				},
			],
		},
	],
};
