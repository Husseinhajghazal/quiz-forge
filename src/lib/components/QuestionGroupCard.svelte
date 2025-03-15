<script>
  import Button from "./Button.svelte";
  import IconButton from "./IconButton.svelte";
  import LucideIcon from "./LucideIcon.svelte";
  const { count, type, points } = $props();
</script>

<div class="flex flex-col gap-5 bg-gray-300 w-64 rounded-2xl p-4">

  <!-- delete and edit buttons -->
  <div class="flex gap-3">
    <Button icon="Trash2" iconColor="red"/>
    <Button icon="Pencil" className="bg-transparent"/>
  </div>

  <div class="flex text-green-600 gap-1.5 text-xl">
    <p>{count}</p>
    <p>سؤال</p>
  </div>

  <div class="flex text-3xl">
    <p>{type}</p>
  </div>

  <div class="flex gap-1.5 justify-end text-xl">
    <p>{points}</p>
    <p>علامة</p>
  </div>

</div>