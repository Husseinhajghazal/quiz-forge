<script>
  import Button from "$lib/components/Button.svelte";

  import { FormLine } from "$lib/components/Form";

  import DownloadForm from "$lib/components/Form/DownloadForm.svelte";
  import CreateGroupsForm from "$lib/components/Form/CreateGroupsForm.svelte";
  import InfoForm from "$lib/components/Form/InfoForm.svelte";
  import UploadForm from "$lib/components/Form/UploadForm.svelte";

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
  <div class="flex-1 px-24">
    <CurrentForm />
  </div>
  {#if globalStep < 4}
    <div class="w-full flex items-center justify-between px-24 mb-5">
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
