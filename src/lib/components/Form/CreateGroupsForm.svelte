<script>
  import Button from "$lib/components/Button.svelte";
  import LucideIcon from "$lib/components/LucideIcon.svelte";
  import QuestionGroupCard from "$lib/components/QuestionGroupCard.svelte";
  import Textarea from "../Inputs/Textarea.svelte";
  import TextInput from "../Inputs/TextInput.svelte";
</script>

<div class="flex flex-col mt-10 gap-10">
  <Button
    content="مجموعة جديدة"
    icon="Plus"
    className="bg-green-600 hover:bg-green-700"
  />
  <div class="flex flex-wrap gap-6">
    <QuestionGroupCard type="اختيار من متعدد" count={10} points={40} />
    <QuestionGroupCard type="صح أو خطأ" count={7} points={15} />
    <QuestionGroupCard type="كلاسيكي" count={3} points={45} />
  </div>
  <Textarea />
</div>
