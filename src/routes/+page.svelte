<script>
  import { enhance } from "$app/forms";
  import { Button } from "$lib/components/Buttons";

  import {
    FormLine,
    DownloadForm,
    CreateGroupsForm,
    InfoForm,
    UploadForm,
  } from "$lib/components/Forms";
  import { formHandler } from "$lib/functions/general.js";

  import { resetFiles, uploadedFiles } from "../stores/files";
  import { groups, resetGroups } from "../stores/group";
  import { formData } from "../stores/info";

  let globalStep = $state(1);

  const nextStep = () => {
    if (globalStep < 4) globalStep++;
  };

  const prevStep = () => {
    if (globalStep > 1) globalStep--;
  };

  const reset = () => {
    resetFiles();
    resetGroups();
    globalStep = 1;
  };

  const Pages = [UploadForm, CreateGroupsForm, InfoForm, DownloadForm];
  const formAction = ["?/uploadForm", "?/createGroups", "?/enterInfo"];

  let CurrentForm = $derived(Pages[globalStep - 1]);

  const { data } = $props();
</script>

<div class="flex flex-col min-h-screen">
  <FormLine {globalStep} />
  <div class="flex-1 px-24 flex flex-col">
    <CurrentForm />
  </div>
  {#if globalStep < 4}
    <div class="w-full flex items-center justify-between px-24 my-5">
      <Button content="الخطوة السابقة" onclick={prevStep} />
      <form
        use:enhance={() =>
          async ({ result }) => {
            formHandler(result);
            if (result.type === "success") nextStep();
          }}
        action={formAction[globalStep - 1]}
        method="post"
      >
        <input
          type="text"
          name="files"
          hidden
          value={JSON.stringify($uploadedFiles)}
        />
        <input
          type="text"
          name="groups"
          hidden
          value={JSON.stringify($groups)}
        />
        <input
          type="text"
          name="metadata"
          hidden
          value={JSON.stringify($formData)}
        />
        <Button
          content="الخطوة التالية"
          className="bg-green-600 hover:bg-green-700"
          type="submit"
        />
      </form>
    </div>
  {:else}
    <div class="flex gap-10 justify-center mb-5">
      <Button
        className="bg-green-600 hover:bg-green-700"
        content="إعادة إنشاء"
      />
      <Button content="العودة للبداية" onclick={reset} />
    </div>
  {/if}
</div>
