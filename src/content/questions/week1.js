export default {
  WeekNumber: "1: Basics",
  Theme: "Basics",
  Problems: [
    {
      Title: "Back to the Basics", 
      Paragraph: "Eliza is trying bubble tea for the first time ever! Excited by this news, her friend Alexander buys different flavours for her to try out. Eliza quickly realizes that some flavours of bubble tea taste better than others and gives each of the drinks a score (note that this score can be negative if Eliza really dislikes the flavour!). Eliza also realizes she can drink up to two flavours of bubble tea at a time, so she defines the happiness of two bubble teas as the two individual scores added together. Unfortunately, Eliza is not very good at math, so please write a program to help her do calculations!", 
      Parts: [
        {
          part: "A",
          problemDescription: "Given the scores of two bubble teas, what is Eliza’s happiness from drinking both at once?",
          points: 2,
          inputSpecification:
            "The first line of input contains two space-separated integers a and b (|a|, |b| ≤ 10³), the individual scores of each bubble tea.",
          outputSpecification: "Output the happiness of this pair of bubble teas on a single line.",
          sampleInput: ["4 6"],
          sampleOutput: ["10"],
          hints: [
       {
          text: "Hint", 
          link: "https://docs.google.com/document/d/1JkQMIzyeD2G7rKQyJ1BVRY_lOwDKOnb_wETDrlAjmRs/edit?usp=sharing"
        }
     ]
        },
        {
          part: "B",
          problemDescription: "Given the scores of n different pairs of bubble teas, what is Eliza’s happiness from drinking each pair?",
          points: 4,
          inputSpecification:
            "The first line of input contains the integer n (0 ≤ n ≤ 10⁴). The next n lines of input each contain two space-separated integers, aᵢ and bᵢ (|aᵢ|, |bᵢ| ≤ 10⁴), the individual scores of each bubble tea.",
          outputSpecification: "Output n lines with the happiness of the i-th pair of bubble teas on the i-th line (1 ≤ i ≤ n).",
          sampleInput: ["3", "4 6", "-5 3", "0 -3"],
          sampleOutput: ["10", "-2", "-3"],
          hints: [
       {
          text: "Hint", 
          link: "https://docs.google.com/document/d/1zu3HBRbucXeIudjU_7X7CXbjzjyb3hSHxrI83nDADWg/edit?usp=sharing"
        }
     ]
        },
        {
          part: "C",
          problemDescription: "Given the scores of n different pairs of bubble teas, what is Eliza’s maximum happiness?",
          points: 7,
          inputSpecification:
            "The first line of input contains the integer n (1 ≤ n ≤ 10⁴). The next n lines of input each contain two space-separated integers, aᵢ and bᵢ (|aᵢ|, |bᵢ| ≤ 10⁵), the individual scores of each bubble tea.",
          outputSpecification: "Output Eliza’s maximum happiness from any of the n pairs of bubble tea.",
          sampleInput: ["3", "4 6", "-5 3", "0 -3"],
          sampleOutput: ["10"],
          hints: [
       {
          text: "Hint", 
          link: "https://docs.google.com/document/d/1gqdYo11mEosmgBGsr8DtqriMDFKxW5-ezHHtmhugmWI/edit?usp=sharing"
        }
     ]
        },
        {
          part: "D",
          problemDescription: "Given the scores of n different pairs of bubble teas, what is Eliza’s second greatest happiness?",
          points: 10,
          inputSpecification:
            "The first line of input contains the integer n (2 ≤ n ≤ 10⁵). The next n lines of input each contain two space-separated integers, aᵢ and bᵢ (|aᵢ|, |bᵢ| ≤ 10⁵), the individual scores of each bubble tea.",
          outputSpecification: "Output Eliza’s second largest happiness from any of the n pairs of bubble tea.",
          sampleInput: ["3", "4 6", "-5 3", "0 -3"],
          sampleOutput: ["-2"],
          hints: [
       {
          text: "Hint", 
          link: "https://docs.google.com/document/d/1oKkwkpB7_AxgjrwdlPGzC8KmAE3SJXknTykYyEz77TE/edit?usp=sharing"
        }
     ]
        },
      ],
    },
    {
      Title: "Compressing Secrets",
      Paragraph: "Hailey the Hedgehog is sending messages to her friend Theo the Turtle. To avoid the evil (and not very smart) Callie the Crocodile from reading their messages, Hailey sends all her messages in a secret code. Unfortunately, Theo isn’t the brightest either (he only got a C- in his C++ programming classes), and he’s having trouble decoding Hailey’s messages. Can you help him decode his friend’s messages?", 
      Parts: [
        {
          part: "A",
          problemDescription: "Hailey’s first message is simple: she sends an integer n and a character c. The decoded message is the character c repeated n times.",
          points: 2,
          inputSpecification:
            "The first and only line of input contains an integer n (0 ≤ n ≤ 100) and a lowercase character c, separated by a space.",
          outputSpecification: "Output the decoded message on a single line.",
          sampleInput: ["7 d"],
          sampleOutput: "ddddddd",
          hints: [
       {
          text: "Hint", 
          link: "https://docs.google.com/document/d/1nuT3HDtaXAPS03aIJC0_5LDe2vOX0InXb2vYkzQBk1s/edit?usp=sharing"
        }
     ]
        },
        {
          part: "B",
          problemDescription: "Hailey gets lazy and decides to get rid of the space in between the number and character. The decoded message is the character c repeated n times.",
          points: 4,
          inputSpecification: "The first and only line of input contains an integer n (0 ≤ n ≤ 10⁴) followed by a lowercase character c.",
          outputSpecification: "Output the decoded message on a single line.",
          sampleInput: ["7d"],
          sampleOutput: "ddddddd",
          hints: [
       {
          text: "Hint", 
          link: "https://docs.google.com/document/d/1zCxrz9pe7CZfTKZtjSXb9y03Cct5dtzIa9qhrzYhGBM/edit?usp=sharing"
        }
     ]
        },
        {
          part: "C",
          problemDescription: "Hailey gets even lazier and wants to send more detail in each message. She codes messages with integer-character pairs on a single line. To decode the message, print each character (cᵢ) nᵢ times, where n is the number appearing before the character.",
          points: 10,
          inputSpecification:
            "The first and only line of input contains some number of non-space-separated alternating sequences of integers and characters, where every integer nᵢ satisfies the condition 1 ≤ nᵢ ≤ 10⁵. It is guaranteed that neither the length of the input nor the sum of all nᵢ exceeds 10⁶.",
            outputSpecification: "Output the decoded message in a single line.",
          sampleInput: "1p1r1e2t1y1l2o1p1s",
          sampleOutput: "prettyloops",
          hints: [
       {
          text: "Hint", 
          link: "https://docs.google.com/document/d/1RPhFIOFo7s1j6kiGi_ckaxFmGneUEhm4BmhPzRG5ixY/edit?usp=sharing"
        }
     ]
        },
      ],
    },
  
    {
      Title: "Turbofrog’s Garden",
      Paragraph: "Turbofrog is a walking, talking, programming frog! Turbofrog has just discovered the joys of gardening, and he’s making his own fences for his three beautiful gardens. Unfortunately, Turbofrog is not very good at math and needs your help to figure out how to put his garden fence together.", 
      Parts: [
        {
          part: "A",
          problemDescription:
            "Turbofrog finds a pile of wooden planks in his garage and decides to make the fence for his first garden by arranging the planks from shortest to longest. Unfortunately, Turbofrog isn’t sure where each fence piece will end up. Can you help him determine the order of the planks in his fence?",
          points: 3,
          inputSpecification:
            "The first line of input contains a single integer n, the number of planks (1 ≤ n ≤ 10³). The second line of input contains n space-separated positive integers L (-10⁵ ≤ L ≤ 10⁵), the length of each plank. Note that some planks might have the same length!",
          outputSpecification: "Output n space-separated integers on a single line: the height of each piece of Turbofrog’s fence in order from shortest to longest, starting from the shortest piece.",
          sampleInput: ["4", "5 2 6 8"],
          sampleOutput: "2 5 6 8",
          hints: [
       {
          text: "Hint", 
          link: "https://docs.google.com/document/d/1KOJfF4Y8OnmVrGu7UkzUlgNgsmDrF1EI4HE1Y814acE/edit?usp=sharing"
        }
     ]
        },
        {
          part: "B",
          problemDescription: "For his second garden, Turbofrog wants to use one long wooden plank. He will cut the plank into four pieces and use those pieces to make a rectangle around the garden. Turbofrog wonders what the maximum possible area of his garden can be. Can you help him find the maximum possible area?",
          points: 3,
          inputSpecification: "The first and only line of input contains a single integer n, the length of the wooden plank (0 ≤ n ≤ 10⁹).",
          outputSpecification:"Print the maximum possible area of a rectangle bordered by the plank, rounded to exactly one decimal place.",
          sampleInput: 25,
          sampleOutput: "39.1",
          hints: [
       {
          text: "Hint", 
          link: "https://docs.google.com/document/d/17e4qGZfiExG00mfQLrK9dbm0YW03U8N-lP9WhpsMkXI/edit?usp=sharing"
        }
     ]
        },
        {
          part: "C",
          problemDescription: "For his third garden, Turbofrog found a pile of shiny rope and a pile of nylon rope. He can create a super rope by combining a piece of shiny rope and a nylon rope, where the length of the super rope will be the two ropes’ lengths added together. Turbofrog wants to fence off individual rectangular areas with each of these super ropes and maximize the total area he creates. Can you help him find the maximum combined area he can fence off?",
          points: 10,
          inputSpecification:
            "The first line of input contains a single integer n, the number of shiny ropes AND the number of nylon ropes (1 ≤ n ≤ 10⁵). The second line of input contains n space-separated integers s₁, s₂, …, sₙ, the lengths of the shiny ropes. The third line of input contains n space-separated integers r₁, r₂, …, rₙ, the lengths of the nylon ropes (0 ≤ sᵢ, rᵢ ≤ 10⁵).",
          outputSpecification: "Print the maximum combined area that Turbofrog can fence off with super rope, rounded to exactly one decimal place.\nNote that you should round after summing all the areas.\nYour answer will be accepted as correct if the absolute value of the difference between your answer and the correct answer is less than or equal to 0.1.",
          sampleInput: ["4", "5 2 6 8", "7 2 4 3"],
          sampleOutput: "25.3",
          hints: [
       {
          text: "Hint", 
          link: "https://docs.google.com/document/d/1n1-8-VVvpm5aUKwir455INXw-Q9jWtToD37Rm9_iOPo/edit?usp=sharing"
        }
     ]
        },
      ],
    },
  ],
 };
 