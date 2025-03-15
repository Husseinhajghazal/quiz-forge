<script>
  import Button from "$lib/components/Button.svelte";

  import { FormLine } from "$lib/components/Form";
  import CreateGroupsForm from "$lib/components/Form/CreateGroupsForm.svelte";
  let globalStep = 1;
</script>

<div class="flex flex-col min-h-screen">
  <FormLine {globalStep} />
  <div class="flex-1 px-24">
    <!-- <CreateGroupsForm /> -->
    <div class="p-10 bg-white w-full h-64 rounded-4xl mt-10">
      <div
        class="w-full h-full border-green-600 border-dashed border-5 rounded-4xl"
      >
        hi
      </div>
    </div>
  </div>
  <div class="w-full flex items-center justify-between px-24 mb-5">
    <Button
      content="الخطوة التالية"
      className="bg-green-600 hover:bg-green-700"
    />
    <Button content="الخطوة التالية" />
  </div>
</div>
