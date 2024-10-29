type ExercisesQuestions = {
  exerciseNumber: number;
  data: DATA[];
};

type DATA = {
  question: string;
  options: string[];
  ans: number;
  hint: string;
};

export const exercisesQuestions: ExercisesQuestions[] = [
  {
    exerciseNumber: 1,
    data: [
      {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        ans: 0,
        hint: "It's also known as the 'City of Light.'",
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        ans: 1,
        hint: "It's the fourth planet from the Sun.",
      },
      {
        question: "What is 5 + 7?",
        options: ["10", "12", "15", "14"],
        ans: 1,
        hint: "It's a simple addition.",
      },
    ],
  },
  {
    exerciseNumber: 2,
    data: [
      {
        question: "What is the boiling point of water?",
        options: ["50°C", "75°C", "100°C", "150°C"],
        ans: 2,
        hint: "It's a round number in Celsius.",
      },
      {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Shark", "Giraffe"],
        ans: 1,
        hint: "It lives in the ocean.",
      },
      {
        question: "Who wrote 'Hamlet'?",
        options: ["Shakespeare", "Hemingway", "Dickens", "Tolkien"],
        ans: 0,
        hint: "He is known as the Bard.",
      },
    ],
  },
  {
    exerciseNumber: 3,
    data: [
      {
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        ans: 2,
        hint: "It's an even number.",
      },
      {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        ans: 2,
        hint: "More than six.",
      },
      {
        question: "Which gas do plants absorb for photosynthesis?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
        ans: 2,
        hint: "It's essential for plant life.",
      },
    ],
  },
];
