import { writable } from "svelte/store";

export const questions = writable({
  classical: [
    {
      question: "What percentage of the human body is made up of water?",
      answer: "60-70%",
    },
    {
      question: "What are some symptoms of dehydration?",
      answer: "Headaches, fatigue, dry mouth, confusion, and lack of focus.",
    },
    {
      question: "What is the recommended daily water intake for adults?",
      answer: "Six to eight glasses of water per day.",
    },
    {
      question: "What is the color of urine that indicates proper hydration?",
      answer: "Pale yellow.",
    },
    {
      question: "What are some functions of water in the human body?",
      answer:
        "Regulates body temperature, lubricates joints, supplies cells with oxygen, removes waste, and protects the spinal cord.",
    },
  ],
  trueFalse: [
    {
      question: "The human body is made up of 60-70% water.",
      answer: "true",
    },
    {
      question:
        "Dehydration can negatively impact cognitive performance and productivity.",
      answer: "true",
    },
    {
      question: "Dark yellow urine is a sign of proper hydration.",
      answer: "false",
    },
    {
      question:
        "Teachers do not need to worry about hydration during their busy schedules.",
      answer: "false",
    },
    {
      question:
        "Water helps regulate internal body temperature and lubricates joints.",
      answer: "true",
    },
  ],
  multipleChoices: [
    {
      question: "What percentage of the human body is made up of water?",
      choices: ["40-50%", "60-70%", "80-90%", "20-30%"],
      answer: "60-70%",
    },
    {
      question: "Which of the following is NOT a symptom of dehydration?",
      choices: ["Headaches", "Fatigue", "Clear urine", "Dry mouth"],
      answer: "Clear urine",
    },
    {
      question: "What is the recommended daily water intake for adults?",
      choices: ["2-3 glasses", "4-5 glasses", "6-8 glasses", "10-12 glasses"],
      answer: "6-8 glasses",
    },
    {
      question:
        "Which of the following is a function of water in the human body?",
      choices: [
        "Regulates body temperature",
        "Lubricates joints",
        "Supplies cells with oxygen",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "What is the color of urine that indicates dehydration?",
      choices: ["Pale yellow", "Dark yellow to amber", "Clear", "Green"],
      answer: "Dark yellow to amber",
    },
  ],
});

export const setQuestions = (data) => {
  questions.set(data);
};
