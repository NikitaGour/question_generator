/*const readline = require("readline");

const questionStore = [
  {
    question: "What is the speed of light",
    subject: "Physics",
    topic: "Waves",
    difficulty: "Easy",
    marks: 80,
  },
  {
    question: "What is atom ",
    subject: "chemistry",
    topic: "Atom",
    difficulty: "Hard",
    marks: 90,
  },
  {
    question: "What is cube  ",
    subject: "Maths",
    topic: "Algebra",
    difficulty: "Medium",
    marks: 100,
  },
  // Add more questions to the questionStore
];

function validateInput(totalMarks, difficulty) {
  const totalMarksForDifficulty = questionStore
    .filter((q) => q.difficulty === difficulty)
    .reduce((sum, q) => sum + q.marks, 0);

  return totalMarks === totalMarksForDifficulty;
}

function generateQuestionPaper(totalMarks, difficulty) {
  if (!validateInput(totalMarks, difficulty)) {
    console.log(
      "Invalid input: Total marks do not match the specified difficulty level."
    );
    return [];
  }

  const questionPaper = [];
  const totalQuestions = questionStore.length;

  const count = Math.floor((totalMarks / 100) * 100); // Assuming 100% for the specified difficulty
  const filteredQuestions = questionStore.filter(
    (q) => q.difficulty === difficulty && !questionPaper.includes(q)
  );

  for (let i = 0; i < count && i < filteredQuestions.length; i++) {
    questionPaper.push(filteredQuestions[i]);
  }

  return questionPaper;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter total marks: ", (totalMarks) => {
  rl.question("Enter difficulty (e.g., Easy, Medium, Hard): ", (difficulty) => {
    const generatedQuestionPaper = generateQuestionPaper(
      parseInt(totalMarks),
      difficulty
    );
    console.log("Generated Question Paper:");
    console.log(generatedQuestionPaper);

    rl.close();
  });
}); */

const readline = require("readline");

const questionStore = [
  {
    question: "What is the speed of light",
    subject: "Physics",
    topic: "Waves",
    difficulty: "Easy",
    marks: 80,
  },
  {
    question: "What is atom ",
    subject: "chemistry",
    topic: "Atom",
    difficulty: "Hard",
    marks: 90,
  },
  {
    question: "What is cube  ",
    subject: "Maths",
    topic: "Algebra",
    difficulty: "Medium",
    marks: 100,
  },
  // Add more questions to the questionStore
];

const validTotalMarks = [80, 90, 100];

function validateInput(totalMarks, difficulty) {
  const totalMarksForDifficulty = questionStore
    .filter((q) => q.difficulty === difficulty)
    .reduce((sum, q) => sum + q.marks, 0);

  return totalMarks === totalMarksForDifficulty;
}

function isValidTotalMarks(totalMarks) {
  return validTotalMarks.includes(totalMarks);
}

function generateQuestionPaper(totalMarks, difficulty) {
  if (!isValidTotalMarks(totalMarks)) {
    console.log("Invalid total marks, please give marks 80/90/100");
    return [];
  }

  if (!validateInput(totalMarks, difficulty)) {
    console.log(
      "Invalid input: Total marks do not match the specified difficulty level."
    );
    return [];
  }

  const questionPaper = [];
  const totalQuestions = questionStore.length;

  const count = Math.floor((totalMarks / 100) * 100); // Assuming 100% for the specified difficulty
  const filteredQuestions = questionStore.filter(
    (q) => q.difficulty === difficulty && !questionPaper.includes(q)
  );

  for (let i = 0; i < count && i < filteredQuestions.length; i++) {
    questionPaper.push(filteredQuestions[i]);
  }

  return questionPaper;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter total marks: ", (totalMarks) => {
  rl.question("Enter difficulty (e.g., Easy, Medium, Hard): ", (difficulty) => {
    const generatedQuestionPaper = generateQuestionPaper(
      parseInt(totalMarks),
      difficulty
    );
    console.log("Generated Question Paper:");
    console.log(generatedQuestionPaper);

    rl.close();
  });
});
