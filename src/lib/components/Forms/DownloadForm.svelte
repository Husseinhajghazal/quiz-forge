<script>
  import { Button, IconButton } from "$lib/components/Buttons";
  import LucideIcon from "$lib/components/LucideIcon.svelte";
</script>

<div class="flex-1 flex gap-10 justify-center items-center">
  <div
    class="flex flex-col gap-5 bg-white min-w-64 w-64 rounded-2xl p-4 shadow-md cursor-pointer duration-300 hover:scale-105 hover:bg-green-300"
  >
    <div>
      <IconButton icon="Printer" />
    </div>
    <div class="flex justify-center items-center">
      <LucideIcon class="text-green-600" name="FileSpreadsheet" size={165} />
    </div>
  </div>

  <div
    class="flex flex-col gap-5 bg-white min-w-64 w-64 rounded-2xl p-4 shadow-md cursor-pointer duration-300 hover:scale-105 hover:bg-green-300"
  >
    <div>
      <IconButton icon="Printer" />
    </div>
    <div class="flex justify-center items-center">
      <LucideIcon class="text-green-600" name="FileSpreadsheet" size={165} />
    </div>
  </div>
</div>
