import { writable } from "svelte/store";

export const questions = writable({
  CLASSICAL: [
    {
      question:
        "What are some functions that water performs within the human body mentioned in the text?",
      answer:
        "Water helps to regulate the internal body temperature, lubricate and cushion joints, supply cells with oxygen and nutrients, get rid of waste in the body, and protect the spinal cord. It also helps with digestion and circulation.",
    },
    {
      question:
        "What are some symptoms of dehydration mentioned in the article?",
      answer:
        "Some symptoms of dehydration include headaches, feeling weak or dizzy, fatigue, dry mouth, dry lips, dry eyes, feelings of confusion, and lack of focus.",
    },
    {
      question:
        "What is the recommended daily water intake for adults as mentioned in the text?",
      answer:
        "The recommended daily water intake for adults is six to eight glasses of water per day.",
    },
    {
      question:
        "What are some strategies mentioned in the article for increasing one’s water consumption throughout the day?",
      answer:
        "Strategies include keeping a bottle of water with you during the day, adding a slice of lemon or lime to plain water if you don't like its taste, drinking a glass of water when you wake up, before each meal, and one hour before bed, keeping track of your water intake with phone reminders or a mobile app, and consuming foods high in water content such as apples, oranges, watermelon, cucumber, and lettuce.",
    },
  ],
  MULTIPLE_CHOICES: [
    {
      question:
        "What is one of the biggest challenges identified by teachers in staying properly hydrated?",
      choices: [
        "Lack of access to clean water",
        "Lack of time to get water or refill water at work",
      ],
      answer: "Lack of time to get water or refill water at work",
    },
    {
      question:
        "What color should your urine ideally be to indicate proper hydration?",
      choices: ["Dark yellow to amber", "Pale yellow"],
      answer: "Pale yellow",
    },
  ],
  TRUE_FALSE: [
    {
      question: "The human body is made up of 60-70% water.",
      answer: "true",
    },
    {
      question:
        "Even mild dehydration can negatively impact a person’s cognitive performance and productivity.",
      answer: "true",
    },
    {
      question:
        "A test for dehydration is the color of urine, where dark yellow to amber urine indicates proper hydration.",
      answer: "false",
    },
    {
      question:
        "The recommended daily water intake for adults is six to eight glasses of water per day.",
      answer: "true",
    },
    {
      question:
        "Drinking water does not have any impact on joint health because cartilage in joints does not need water for lubrication.",
      answer: "false",
    },
  ],
});

export const setQuestions = (data) => {
  questions.set(data);
};
