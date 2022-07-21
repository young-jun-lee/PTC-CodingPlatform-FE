export default {
	WeekNumber: "2",
	Theme: "Basic Math",
	Problems: [
		{
			Title: "The Golden Milk Auction",
			Paragraph:
				"Tom the Tanuki recently got a batch of golden milk from one of his magic cows! This golden milk is worth a lot of money, so he wants to hold a silent auction to auction it off to all the other farmers! Each farmer will bid an amount without knowing the others' bids. Tom has a small problem though... he's not good at keeping track of bids! He needs your help to figure out the winner.",
			Parts: [
				{
					part: "A",
					problemDescription:
						"Tom needs to figure out who the winner of the auction is – so he will give you the list of bids and leave it up to you to figure out the winner!",
					points: 5,
					inputSpecification:
						"The first line of input contains a single integer n, the number of bids (1 ≤ n ≤ 1000). The following n lines will each contain a string of uppercase and/or lowercase English characters (the bidder's name) followed by an integer x (1 ≤ x ≤ 10000), the bid amount. The bidder's name and bid amount are separated by a single space. It is guaranteed that no two bid amounts will be the same (i.e. there will be no ties).",
					outputSpecification: "Print the name of the winner.",
					sampleInput: ["3", "Aidan 2", "Veer 5", "Danny 3"],
					sampleOutput: ["Veer"],
				},
			],
		},
		{
			Title: "Accounting Fiasco",
			Paragraph:
				"Alvaro works at a local market and he gets paid a fixed amount every day. Before he started working, he had a little bit of money in his bank account from birthday gifts and Christmas presents. However, Alvaro isn't very good with money or calculations, and needs help with his finances. He needs you to develop a program that will act as his professional accountant and perform several calculations!",
			Parts: [
				{
					part: "A",
					problemDescription:
						"Given the amount of money Alvaro had in his bank account before he started working, his daily wage, and the days he has been working, find his final balance (the sum of all his money).",
					points: 5,
					inputSpecification:
						"The input will consist of three lines. The first line contains Alvaro's initial bank account balance B, the second line contains his daily wage W, and the third line contains the amount of days he has been working D (1 ≤ B, W, D ≤ 100000).",
					outputSpecification: "Print Alvaro's final balance.",
					sampleInput: ["15", "3", "7"],
					sampleOutput: "36",
				},
				{
					part: "B",
					problemDescription:
						"Alvaro got a promotion! He now makes an increasing wage which doubles each day! This means that his wage tomorrow will be double that of today's. Given this new information, along with his initial wage and the days he worked, find the sum of all his money.",
					points: 10,
					inputSpecification:
						"The input will consist of three lines. The first line contains Alvaro's initial bank account balance B, the second line contains his wage W on the first day (which doubles each day), and the third line contains the amount of days he has been working D (1 ≤ B, W ≤ 100000; 1 ≤ D ≤ 100).",
					outputSpecification: "Print Alvaro's final balance.",
					sampleInput: ["10", "4", "2"],
					sampleOutput: "22",
				},
			],
		},

		{
			Title: "Megachess Continued",
			Paragraph:
				"Despite playing in their first ever megachess tournament in just a few days, Alex is reading the megachess rules for the first time and realizes that there's much more to moving in megachess than they had thought! Can you help them better understand the rules of the game?",
			Parts: [
				{
					part: "A",
					problemDescription:
						"Alex is reading about moving in megachess. It turns out each square is labeled with an integer n (0 ≤ n ≤ 10000). In each move, a player can move one megachess piece from a square to another square that touches it horizontally or vertically. But, since the pieces in megachess are very big, it takes a lot of time to move them; when Alex moves a piece onto a square labeled n, they will need to spend n seconds to make that move! Overwhelmed, Alex decides to start by studying how long it will take him to just move around the board. Can you help Alex move a piece from the top left to the bottom right corner of a 3x3 grid using the least possible time?",
					points: 5,
					inputSpecification:
						"The input consists of three lines of three integers each, representing the integer labels on the corresponding squares on the 3x3 grid. Each of the integers is non-negative and less than or equal to 10000.",
					outputSpecification:
						"Output a single integer, the minimum number of seconds required to move a megachess piece from the top left corner to the bottom right corner.",
					sampleInput: ["1 2 3", "4 5 6", "7 8 9"],
					sampleOutput: "21",
				},
				{
					part: "B",
					problemDescription:
						"After Alex studied the megachess rules all night, they get to their megachess tournament, where they are greeted by an organizer and told that they are scheduled to play at table m. Since Alex stayed up all night, they can barely think about where to go to get to table m. Fortunately for them, though, the tables turn out to be numbered from 1 to n in one long row. The entrance to the tournament, where Alex is standing right now, is beside table 1. So, Alex has to walk past table 1, table 2, and so on until they walk past the entire width of table m and sit down. Note that all the tables are touching each other, but they have different widths. Alex wonders how long they need to walk to get to their assigned table, but is too sleep-deprived to calculate it on their own. Can you help him?",
					points: 10,
					inputSpecification:
						"The input consists of two lines. On the first line, there are two space-separated integers n and m (1 ≤ m ≤ n ≤ 10000) representing the total number of tables and the number of the table Alex is playing at respectively. On the second line, there are n space-separated positive integers (each less than 10000) representing the time (in seconds) it will take Alex to walk past of each of the n tables.",
					outputSpecification:
						"Output a single integer, the time (in seconds) it will take Alex to walk past table m. (Note that the mth table should be included in the calculation, since megachess games start with the players on the far side of the table.)",
					sampleInput: ["4 3", "1 4 2 3"],
					sampleOutput: "7",
				},
			],
		},
	],
};
