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
  import { writable } from "svelte/store";
  import { resetFiles, uploadedFiles } from "../stores/files";
  import { groups, resetGroups } from "../stores/group";
  import { setQuestions } from "../stores/questions";

  let globalStep = $state(1);
  const loading = writable(false);

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

  const handleSubmit = async ({ result }) => {
    await formHandler(result);
    if (result.type === "success") nextStep();
    loading.set(false);
    if (globalStep === 4) {
      setQuestions(result.data.res);
    }
  };
</script>

<div class="flex flex-col min-h-screen">
  <FormLine {globalStep} />
  <form
    use:enhance={() => handleSubmit}
    action={formAction[globalStep - 1]}
    method="post"
    class="flex-1 flex flex-col"
    enctype="multipart/form-data"
  >
    <div class="flex-1 px-24 flex flex-col">
      <CurrentForm />
    </div>
    {#if globalStep < 4}
      <div class="w-full flex items-center justify-between px-24 my-5">
        <Button content="الخطوة السابقة" onclick={prevStep} />
        <Button
          content="الخطوة التالية"
          className="bg-green-600 hover:bg-green-700"
          type="submit"
          onclick={() => {
            loading.set(true);
          }}
        />
      </div>
    {:else}
      <div class="flex gap-10 justify-center mb-5">
        <!-- <Button
          className="bg-green-600 hover:bg-green-700"
          content="إعادة إنشاء"
        /> -->
        <Button content="العودة للبداية" onclick={reset} />
      </div>
    {/if}
  </form>
</div>

{#if $loading && globalStep === 3}
  <div
    class="fixed top-0 left-0 z-50 bg-black/70 w-full h-screen flex flex-col items-center justify-center text-white"
  >
    <div class="relative w-16 h-16">
      <div
        class="absolute inset-0 animate-ping rounded-full border-4 border-green-500 opacity-75"
      ></div>
      <div
        class="absolute inset-0 animate-spin rounded-full border-t-4 border-green-400"
      ></div>
    </div>
    <p class="mt-4 text-lg font-semibold animate-pulse">AI is processing...</p>
  </div>
{/if}
