<script>
  import { Button } from "$lib/components/Buttons";

  import {
    FormLine,
    DownloadForm,
    CreateGroupsForm,
    InfoForm,
    UploadForm,
  } from "$lib/components/Forms";

  let globalStep = $state(1);

  const nextStep = () => {
    if (globalStep < 4) globalStep++;
  };

  const prevStep = () => {
    if (globalStep > 1) globalStep--;
  };

  const reset = () => (globalStep = 1);

  const Pages = [UploadForm, CreateGroupsForm, InfoForm, DownloadForm];

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
      <Button
        content="الخطوة التالية"
        className="bg-green-600 hover:bg-green-700"
        onclick={nextStep}
      />
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
