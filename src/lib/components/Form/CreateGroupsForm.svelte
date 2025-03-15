<script>
  import Button from "$lib/components/Button.svelte";
  import LucideIcon from "$lib/components/LucideIcon.svelte";
  import QuestionGroupCard from "$lib/components/QuestionGroupCard.svelte";
</script>

<div class="flex flex-col p-10 gap-10">
  <Button content="مجموعة جديدة" icon="Plus"/>

  <div class="flex flex-wrap gap-6">
    <QuestionGroupCard type="اختيار من متعدد" count={10} points={40} />
    <QuestionGroupCard type="صح أو خطأ" count={7} points={15} />
    <QuestionGroupCard type="كلاسيكي" count={3} points={45} />
  </div>
</div>
