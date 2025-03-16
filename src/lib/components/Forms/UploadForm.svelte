<script>
  import { IconButton } from "$lib/components/Buttons";
  import LucideIcon from "$lib/components/LucideIcon.svelte";

  import { fly } from "svelte/transition";

  import { writable } from "svelte/store";

  let uploadedFiles = writable([]);

  function handleFileChange(event) {
    const files = Array.from(event.target.files);
    uploadedFiles.update((current) => [...current, ...files]);
  }

  function removeFile(index) {
    uploadedFiles.update((current) => current.filter((_, i) => i !== index));
  }
</script>

<div class="p-10 bg-white w-full h-80 rounded-4xl mt-10">
  <label
    for="files"
    class="w-full h-full border-green-600 border-8 border-dashed rounded-2xl flex items-center justify-center gap-10 cursor-pointer"
  >
    <p class="text-5xl font-semibold">ارفع ملفاتك هنا</p>
    <LucideIcon name="CloudUpload" size={150} class="text-green-600" />
  </label>
  <input
    accept=".pdf"
    type="file"
    name="files"
    id="files"
    multiple
    hidden
    on:change={handleFileChange}
  />
</div>

<div class="border-t-2 border-gray-400 mt-5 pt-5">
  <div class="flex gap-2 pr-3">
    <LucideIcon name="FileCheck2" class="text-green-600" />
    <p class="font-semibold text-xl">الملفات المرفوعة:</p>
  </div>
</div>
<div class="flex-1 grid grid-cols-2 items-start gap-4 mt-3">
  {#each $uploadedFiles as file, index}
    <div transition:fly={{ x: 100 }} class="flex items-center gap-3">
      <span class="text-green-600 text-2xl">{index + 1}.</span>
      <div
        class="bg-white flex-1 flex items-center justify-between py-3 px-4 rounded-xl shadow-md cursor-pointer hover:shadow-2xl duration-300"
      >
        <div class="flex items-center gap-3">
          <IconButton icon="FileText" className="text-green-600" />
          <p class="text-lg">{file.name}</p>
        </div>
        <IconButton
          icon="Trash2"
          iconColor="red"
          onclick={() => removeFile(index)}
        />
      </div>
    </div>
  {/each}
</div>
