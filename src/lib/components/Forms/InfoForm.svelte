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
    onchange={(e) => changeInput("school", e.target.value)}
  />
  <TextInput
    icon="UserPen"
    label="اسم المعلم"
    onchange={(e) => changeInput("teacher", e.target.value)}
  />
  <TextInput
    icon="CalendarClock"
    label="الوقت والتاريخ"
    type="datetime-local"
    onchange={(e) => changeInput("date", e.target.value.replace("T", " "))}
  />
  <TextInput
    icon="TimerReset"
    label="مدة الامتحان (دقيقة)"
    onchange={(e) => changeInput("duration", e.target.value)}
  />
  <Textarea
    icon="NotebookPen"
    label="ملاحظة"
    divClass="col-span-2"
    onchange={(e) => changeInput("note", e.target.value)}
  />
</div>
