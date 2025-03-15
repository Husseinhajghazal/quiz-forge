<script>
  import LucideIcon from "$lib/components/LucideIcon.svelte";
  import IconButton from "$lib/components/IconButton.svelte";
</script>

<div class="p-10 bg-white w-full h-80 rounded-4xl mt-10">
  <div
    class="w-full h-full border-green-600 border-8 border-dashed rounded-2xl flex items-center justify-center gap-10"
  >
    <p class="text-5xl font-semibold">ارفع ملفاتك هنا</p>
    <LucideIcon name="CloudUpload" size={150} class="text-green-600" />
  </div>
</div>
<div class="border-t-2 border-gray-400 mt-5 pt-5">
  <div class="flex gap-2 pr-3">
    <LucideIcon name="FileCheck2" class="text-green-600" />
    <p class="font-semibold text-xl">الملفات المرفوعة:</p>
  </div>
</div>
<div class="grid grid-cols-2 gap-4 mt-3">
  <div class="flex items-center gap-3">
    <span class="text-green-600 text-2xl">1.</span>
    <div
      class="bg-white flex-1 flex items-center justify-between py-3 px-4 rounded-xl shadow-md cursor-pointer hover:shadow-2xl duration-300"
    >
      <div class="flex items-center gap-3">
        <IconButton icon="FileText" className="text-green-600" />
        <p class="text-lg">الملف الاول</p>
      </div>
      <IconButton
        icon="Trash2"
        iconColor="red"
        className="hover:scale-110 hover:rotate-360 duration-500"
      />
    </div>
  </div>
</div>
