<script>
  import LucideIcon from "$lib/components/LucideIcon.svelte";
  import { IconButton } from "$lib/components/Buttons";
  import { TextInput, Textarea } from "$lib/components/Inputs";
</script>

<div class="grid grid-cols-2 gap-8 mt-10">
  <TextInput icon="School" label="اسم مركز التعليم" />
  <TextInput icon="UserPen" label="اسم المعلم" />
  <TextInput
    icon="CalendarClock"
    label="الوقت والتاريخ"
    type="datetime-local"
  />
  <TextInput icon="TimerReset" label="مدة الامتحان (دقيقة)" />
  <Textarea icon="NotebookPen" label="ملاحظة" divClass="col-span-2" />
</div>
