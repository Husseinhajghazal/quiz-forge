<script>
  import LucideIcon from "./LucideIcon.svelte";

  const { count, type, points } = $props();
</script>

<div class="flex flex-col gap-5 bg-gray-300 w-64 rounded-2xl p-4">

  <!-- delete and edit buttons -->
  <div class="flex gap-3">
    <LucideIcon name="Trash2" color="red" />
    <LucideIcon name="Pencil" />
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