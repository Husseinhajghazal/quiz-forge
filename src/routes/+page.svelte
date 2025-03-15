<script>
  import Button from "$lib/components/Button.svelte";

  import { FormLine } from "$lib/components/Form";
  import DownloadForm from "$lib/components/Form/DownloadForm.svelte";
  let globalStep = 1;
</script>

<div class="flex flex-col min-h-screen">
  <FormLine {globalStep} />
  <div class="flex-1 px-24">
    <DownloadForm />
  </div>
  {#if globalStep < 4}
    <div class="w-full flex items-center justify-between px-24 mb-5">
      <Button
        content="الخطوة التالية"
        className="bg-green-600 hover:bg-green-700"
      />
      <Button content="الخطوة السابقة" />
    </div>
  {/if}
</div>
