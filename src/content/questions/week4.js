export default {
  WeekNumber: '4',
  Theme: 'Week 4',
  Problems: [
    {
      Title: 'Week 4 problem 1',
      Paragraph:
        'Tom the tanuki is a farmer excited to build a brand new cow farm! In a few days, his friend Isabelle is going to send him a few special cows that produce magic milk... but he doesn’t know how many! Unfortunately, tanukis are not very good at math, so he needs your help to manage his farm finances before he can start raising the magic cows.',
      Parts: [
        {
          part: 'A',
          problemDescription:
            'The first thing Tom wants to do is calculate the weekly expenses of caring for any number of magic cows. He knows that each magic cow eats 10 pounds of enchanted hay 3 times a day, and that enchanted hay costs $5 for every 2 pounds. Can you help him calculate the weekly expense of caring for his cows?',
          points: 3,
          inputSpecification:
            'The first and only line of input contains a single integer n (1 ≤ n ≤ 1000), the number of cows.',
          outputSpecification:
            'Print the weekly expenses of caring for n cows as an integer. (Do not print the dollar sign.)',
          sampleInput: ['3'],
          sampleOutput: ['1575'],
          hints: [
            {
              text: 'Hint',
              link: 'TEMPLINK'
            }
          ]
        },
        {
          part: 'B',
          problemDescription:
            'Tom is selling magic milk from his cows and they’re insanely popular - his dedicated customers make sure his store is sold out every single day. Unfortunately, he doesn’t know how much money he’s really making! Tom sells magic milk bags for $95 (they’re so expensive because they’re magical), but the cows produce a different number of milk bags every day. Assuming that all his milk bags will be bought each day, can you help him determine if the money he makes will be greater than the daily expense of caring for the cows?',
          points: 5,
          inputSpecification:
            'The first line of input contains a single integer n (1 ≤ n ≤ 1000), the number of cows. The second line of input contains a single integer L (0 ≤ L ≤ 10), the number of milk bags produced in total (by all the cows) on a single day.',
          outputSpecification:
            'Output a single character - Y if Tom makes more money than he spends caring for the cows, and N if not.',
          sampleInput: ['3', '5'],
          sampleOutput: ['Y'],
          hints: [
            {
              text: 'Hint',
              link: 'TEMPLINK'
            }
          ]
        }
      ]
    },
    {
      Title: 'Desk Area',
      Paragraph:
        'Rose works in a furniture store that sells rectangular desks. She has been tasked with measuring the surface area of the desks in the store. Remember that the area of a rectangular figure is equal to the length times the width (A = L x W)!',
      Parts: [
        {
          part: 'A',
          problemDescription:
            'Given the length and width of a single desk, determine its area.',
          points: 1,
          inputSpecification:
            'The first and only line of input contains two space-separated integers L and W (1 ≤ L, W ≤ 100), the length and width of the given desk',
          outputSpecification: 'Output the area of the given desk.',
          sampleInput: ['3 4'],
          sampleOutput: '12',
          hints: [
            {
              text: 'Hint',
              link: 'TEMPLINK'
            }
          ]
        },
        {
          part: 'B',
          problemDescription:
            'Given the length and width of N different desks, determine their total area.',
          points: 4,
          inputSpecification:
            'The first line contains an integer N (1 ≤ N ≤ 100), the number of desks being measured. N more lines follow, in which the ith line (1 ≤ i ≤ n) contains two space-separated integers, aᵢ and bᵢ (1 ≤ aᵢ, bᵢ ≤ 100), that represent the length and width of the ith desk.',
          outputSpecification: 'Output the total area of the given desks.',
          sampleInput: ['3', '5 7', '4 10', '7 6'],
          sampleOutput: '117',
          hints: [
            {
              text: 'Hint',
              link: 'TEMPLINK'
            }
          ]
        },
        {
          part: 'C',
          problemDescription:
            'Given the length and width of N different desks, determine the desk with the largest area. It is guaranteed that no two desks will have the same area.',
          points: 6,
          inputSpecification:
            'The first line contains an integer N (1 ≤ N ≤ 100), the number of desks being measured. N more lines follow, in which the ith line (1 ≤ i ≤ n) contains two space-separated integers, aᵢ and bᵢ (1 ≤ aᵢ, bᵢ ≤ 100), that represent the length and width of the ith desk.',
          outputSpecification:
            'Output two space-separated integers - the length and width (dimensions) of the desk with the largest area.',
          sampleInput: ['3', '5 7', '4 10', '7 6'],
          sampleOutput: '7 6',
          hints: [
            {
              text: 'Hint',
              link: 'TEMPLINK'
            }
          ]
        },
        {
          part: 'D',
          problemDescription:
            'Given the length and width of N different desks, determine the difference between the area of the largest and smallest desks. It is guaranteed that no two desks will have the same area.',
          points: 10,
          inputSpecification:
            'The first line contains an integer N (1 ≤ N ≤ 100), the number of desks being measured. N more lines follow, in which the ith line (1 ≤ i ≤ n) contains two space-separated integers, aᵢ and bᵢ (1 ≤ aᵢ, bᵢ ≤ 100), that represent the length and width of the ith desk.',
          outputSpecification:
            'Output the difference between the area of the largest and smallest desks.',
          sampleInput: ['3', '5 7', '4 10', '7 6'],
          sampleOutput: '7',
          hints: [
            {
              text: 'Hint',
              link: 'TEMPLINK'
            }
          ]
        }
      ]
    },

    {
      Title: 'Megachess',
      Paragraph:
        'Megachess is a game similar to regular chess. However, the main difference between the games is that while the regular chess board is only 8 tiles long, the megachessboard is 10000 tiles long! So, in megachess, players often have to spend a lot of time moving their pieces around, leaving them tired and with less time to think about their moves.',
      Parts: [
        {
          part: 'A',
          problemDescription:
            'Alex is practicing for their megachess tournament next week. They want to budget their time by finding out how long it will take them to make a move between two sets of coordinates, but they forgot how to calculate the distance between two pairs of coordinates! Can you help them out?',
          points: 5,
          inputSpecification:
            'The input consists of two lines of two space-separated integers each. The two numbers on each line represent the x- and y-coordinates of the two corresponding points on the megachessboard (1 ≤ x, y ≤ 10000).',
          outputSpecification:
            'Output a single integer, the square of the distance between the two points.',
          sampleInput: ['1 2', '3 4'],
          sampleOutput: '8',
          hints: [
            {
              text: 'Hint',
              link: 'TEMPLINK'
            }
          ]
        },
        {
          part: 'B',
          problemDescription:
            'Alex is still practicing for their megachess tournament! Since Alex realized that they wouldn’t be able to learn all the strategies and theories within a week, they came up with a new strategy: they will spend all of their time making random moves as fast as possible, and hope that their opponents use up all their time thinking so Alex wins by default. There are four types of moves in megachess, which take a, b, c, and d seconds (1 ≤ a, b, c, d ≤ 10000) per move respectively. Alex wants to make sure that they don’t run out of time before their opponent does! Given that Alex has t (1 ≤ t ≤ 10000) seconds in total, can you help them find out the maximum number of moves they can make in that time if they spend no time at all on thinking?',
          points: 10,
          inputSpecification:
            'The input consists of one line of five space-separated integers. The first integer represents the total time, in seconds, <person> has to make all of their moves, t (1 ≤ t ≤ 10000), and the four remaining integers represent the number of seconds it takes to make each of the four types of moves, a, b, c, and d (1 ≤ a, b, c, d ≤ 10000).',
          outputSpecification:
            'Output a single integer, the maximum number of moves <person> can make in their allotted time.',
          sampleInput: ['5 1 2 3 4'],
          sampleOutput: '5',
          hints: [
            {
              text: 'Hint',
              link: 'TEMPLINK'
            }
          ]
        }
      ]
    }
  ]
};
