<script>
  import Button from "$lib/components/Button.svelte";
  import { FormLine } from "$lib/components/Form";
  import CreateGroupsForm from "$lib/components/Form/CreateGroupsForm.svelte";
  let globalStep = 1;
</script>

<div class="flex flex-col gap-10">
  <FormLine {globalStep} />
  <CreateGroupsForm />
</div>
