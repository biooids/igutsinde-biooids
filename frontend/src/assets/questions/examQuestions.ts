type ExamQuestions = {
  examNumber: number;
  data: DATA[];
};

type DATA = {
  question: string;
  options: string[];
  ans: number;
  hint: string;
};

export const examQuestions: ExamQuestions[] = [
  {
    examNumber: 1,
    data: [
      {
        question:
          "Utugarura rumuri turi kuruhande rw'imbere rw'ikinyabiziga tugomba gusa : ",
        options: [
          "N'umuhondo",
          "N'umutuku",
          "N'umweru",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        ans: 2,
        hint: "It's also known as the 'City of Light.'",
      },
      {
        question:
          "Icyapa gisobanura akazamuko gashinze cyane kirimubwoko bw'ibyapa bikurikira :",
        options: [
          "Ibyapa biburira",
          "Ibyapa bibuza n'ibitegeka",
          "Ibyapa byogutambuka bibiri",
          "B na C nibyo bisubizo by'ukuri",
        ],
        ans: 0,
        hint: "It's the fourth planet from the Sun.",
      },
      {
        question:
          "Ikinyabiziga kigendeshwa na moteri nikinyabiziga gikururwa n'inyamwanswa ntibishobora gukurura ",
        options: [
          "ibinyabiziga birenze bine",
          "ibinyabiziga bipakiye birenze bibiri",
          "ibinyabiziga birenze bibiri",
          "B na C nibyo bisubizo by'ukuri",
        ],
        ans: 1,
        hint: "It's a simple addition.",
      },
    ],
  },
  {
    examNumber: 2,
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
    examNumber: 3,
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
