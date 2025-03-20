<script>
  import { Button, IconButton } from "$lib/components/Buttons";
  import LucideIcon from "$lib/components/LucideIcon.svelte";
  import { answersTemplate, questionTemplate } from "$lib/data/pdfTemplates";
  import { get } from "svelte/store";
  import { formData } from "../../../stores/info";
  import { questions } from "../../../stores/questions";

  const data = {
    metadata: get(formData),
    questions: $questions,
  };

  function downloadQuestions() {
    const html = ejs.render(questionTemplate, data);
    const el = document.createElement("div");
    el.dir = "ltr";
    el.classList.add("file");
    el.innerHTML = html;
    html2pdf()
      .set({
        margin: [10, 0, 10, 0],
      })
      .from(el)
      .save();
  }

  function downloadAnswers() {
    const html = ejs.render(answersTemplate, data);
    const el = document.createElement("div");
    el.dir = "ltr";
    el.classList.add("file");
    el.innerHTML = html;
    html2pdf()
      .set({
        margin: [10, 0, 10, 0],
      })
      .from(el)
      .save();
  }
</script>

<div class="flex-1 flex gap-10 justify-center items-center">
  <div
    class="flex flex-col gap-5 bg-white min-w-64 w-64 rounded-2xl p-4 shadow-md cursor-pointer duration-300 hover:scale-105 hover:bg-green-300"
  >
    <div class="flex items-center justify-between">
      <p class="text-xl font-semibold">الأسئلة</p>
      <IconButton icon="Printer" onclick={downloadQuestions} />
    </div>
    <div class="flex justify-center items-center">
      <LucideIcon class="text-green-600" name="FileText" size={165} />
    </div>
  </div>

  <div
    class="flex flex-col gap-5 bg-white min-w-64 w-64 rounded-2xl p-4 shadow-md cursor-pointer duration-300 hover:scale-105 hover:bg-green-300"
  >
    <div class="flex items-center justify-between">
      <p class="text-xl font-semibold">الأجوبة</p>
      <IconButton icon="Printer" onclick={downloadAnswers} />
    </div>
    <div class="flex justify-center items-center">
      <LucideIcon class="text-green-600" name="FileSpreadsheet" size={165} />
    </div>
  </div>
</div>
