<script>
  import LucideIcon from "$lib/components/LucideIcon.svelte";
  import { IconButton } from "$lib/components/Buttons";
  import { TextInput, Textarea } from "$lib/components/Inputs";
  import { changeInput } from "../../../stores/info";
</script>

<div class="grid grid-cols-2 gap-8 mt-10">
  <TextInput
    icon="School"
    label="اسم مركز التعليم"
    name="school"
    onchange={(e) => changeInput("school", e.target.value)}
  />
  <TextInput
    icon="UserPen"
    label="اسم المعلم"
    name="teacher"
    onchange={(e) => changeInput("teacher", e.target.value)}
  />
  <TextInput
    icon="CalendarClock"
    label="الوقت والتاريخ"
    type="datetime-local"
    name="date"
    onchange={(e) => changeInput("date", e.target.value)}
  />
  <TextInput
    icon="TimerReset"
    label="مدة الامتحان (دقيقة)"
    name="duration"
    type="number"
    min="1"
    oninput={(e) => (e.target.value = e.target.value.replace(/\D/g, ""))}
    onchange={(e) => changeInput("duration", e.target.value)}
  />
  <Textarea
    icon="NotebookPen"
    label="ملاحظة"
    divClass="col-span-2"
    name="note"
    onchange={(e) => changeInput("note", e.target.value)}
  />
</div>
