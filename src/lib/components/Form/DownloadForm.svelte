<script>
  import Button from "$lib/components/Button.svelte";
  import IconButton from "$lib/components/IconButton.svelte";
  import LucideIcon from "$lib/components/LucideIcon.svelte";
</script>

<div class="flex flex-col p-10 gap-10">
  <div class="flex gap-10 justify-center">
    <div class="flex flex-col gap-5 bg-white min-w-64 w-64 rounded-2xl p-4 shadow-md">
      <div>
        <IconButton icon="Printer"/>
      </div>
      <div class="flex justify-center items-center">
        <LucideIcon class="text-green-600" name="FileSpreadsheet" size={162}/>
      </div>
    </div>
  
    <div class="flex flex-col gap-5 bg-white min-w-64 w-64 rounded-2xl p-4 shadow-md">
      <div>
        <IconButton icon="Printer"/>
      </div>
      <div class="flex justify-center items-center">
        <LucideIcon class="text-green-600" name="FileSpreadsheet" size={162}/>
      </div>
    </div>
  </div>

  <div class="flex gap-10 justify-center">
    <Button className="bg-green-600 hover:bg-green-700" content="إعادة إنشاء"/>
    <Button content="العودة للبداية"/>
  </div>
</div>
