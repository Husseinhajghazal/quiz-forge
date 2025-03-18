<script>
  import { Button, IconButton } from "$lib/components/Buttons";
  import LucideIcon from "$lib/components/LucideIcon.svelte";
  import {answersTemplate, questionTemplate} from "$lib/data/pdfTemplates";
  const data = {
        metadata: {
          school: "Firat University",
          teacher: "Hussein Ghazal",
          subject: "Hussein Ghazal",
          duration: '9',
          date: "2025-04-12 15:30",
          note: "lorem ipsum ...",
        },
        questions: {
  "classical": [
    {
      "question": "What percentage of the human body is made up of water?",
      "answer": "60-70%"
    },
    {
      "question": "What are some symptoms of dehydration?",
      "answer": "Headaches, fatigue, dry mouth, confusion, and lack of focus."
    },
    {
      "question": "What is the recommended daily water intake for adults?",
      "answer": "Six to eight glasses of water per day."
    },
    {
      "question": "What is the color of urine that indicates proper hydration?",
      "answer": "Pale yellow."
    },
    {
      "question": "What are some functions of water in the human body?",
      "answer": "Regulates body temperature, lubricates joints, supplies cells with oxygen, removes waste, and protects the spinal cord."
    }
  ],
  "trueFalse": [
    {
      "question": "The human body is made up of 60-70% water.",
      "answer": "true"
    },
    {
      "question": "Dehydration can negatively impact cognitive performance and productivity.",
      "answer": "true"
    },
    {
      "question": "Dark yellow urine is a sign of proper hydration.",
      "answer": "false"
    },
    {
      "question": "Teachers do not need to worry about hydration during their busy schedules.",
      "answer": "false"
    },
    {
      "question": "Water helps regulate internal body temperature and lubricates joints.",
      "answer": "true"
    }
  ],
  "multipleChoices": [
    {
      "question": "What percentage of the human body is made up of water?",
      "choices": [
        "40-50%",
        "60-70%",
        "80-90%",
        "20-30%"
      ],
      "answer": "60-70%"
    },
    {
      "question": "Which of the following is NOT a symptom of dehydration?",
      "choices": [
        "Headaches",
        "Fatigue",
        "Clear urine",
        "Dry mouth"
      ],
      "answer": "Clear urine"
    },
    {
      "question": "What is the recommended daily water intake for adults?",
      "choices": [
        "2-3 glasses",
        "4-5 glasses",
        "6-8 glasses",
        "10-12 glasses"
      ],
      "answer": "6-8 glasses"
    },
    {
      "question": "Which of the following is a function of water in the human body?",
      "choices": [
        "Regulates body temperature",
        "Lubricates joints",
        "Supplies cells with oxygen",
        "All of the above"
      ],
      "answer": "All of the above"
    },
    {
      "question": "What is the color of urine that indicates dehydration?",
      "choices": [
        "Pale yellow",
        "Dark yellow to amber",
        "Clear",
        "Green"
      ],
      "answer": "Dark yellow to amber"
    }
  ]
}
      };

  function downloadQuestions() {
    const html = ejs.render(questionTemplate, data);
    const el = document.createElement('div');
    el.dir = 'ltr';
    el.classList.add('file');
    el.innerHTML = html;
    html2pdf(el);
  }

  function downloadAnswers() {
    const html = ejs.render(answersTemplate, data);
    const el = document.createElement('div');
    el.dir = 'ltr';
    el.classList.add('file');
    el.innerHTML = html;
    html2pdf(el);
  }
</script>

<div class="flex-1 flex gap-10 justify-center items-center">
  <div
    class="flex flex-col gap-5 bg-white min-w-64 w-64 rounded-2xl p-4 shadow-md cursor-pointer duration-300 hover:scale-105 hover:bg-green-300"
  >
    <div>
      <IconButton icon="Printer" onclick={downloadQuestions}/>
    </div>
    <div class="flex justify-center items-center">
      <LucideIcon class="text-green-600" name="FileSpreadsheet" size={165} />
    </div>
  </div>

  <div
    class="flex flex-col gap-5 bg-white min-w-64 w-64 rounded-2xl p-4 shadow-md cursor-pointer duration-300 hover:scale-105 hover:bg-green-300"
  >
    <div>
      <IconButton icon="Printer" onclick={downloadAnswers}/>
    </div>
    <div class="flex justify-center items-center">
      <LucideIcon class="text-green-600" name="FileSpreadsheet" size={165} />
    </div>
  </div>
</div>
