<script>
  import Button from "$lib/components/Buttons";
  import { FormLine } from "$lib/components/Form";
  import { TextInput } from "$lib/components/Inputs";

  let globalStep = 1;
</script>

<FormLine {globalStep} />
<TextInput label="اسم المعلم" name="teacher" Icon="" />
