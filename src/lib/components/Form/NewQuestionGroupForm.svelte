<script>
  import IconButton from "../IconButton.svelte";
  import LucideIcon from "../LucideIcon.svelte";
  const { count, type, points } = $props();
  const quantities = [10, 20, 30, 40, 50];
</script>

<div class="fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center gap-5 bg-gray-500/60">
  <div class="flex flex-col gap-10 h-96 bg-white p-5 rounded-3xl">
    
    <div class="flex justify-end">
      <IconButton icon='X' iconColor='red'/>
    </div>

    <div class="flex flex-col gap-2">
      <div class="flex gap-2 text-2xl">
        <LucideIcon name={"CircleHelp"} size={36} color="green"/>
        <h2>عدد الأسئلة</h2>
      </div>

      <div class="flex gap-2">
        {#each quantities as q}
          <div>
            <input class="hidden peer" id={`q-${q}`} type="radio" name="questionQuantity" value={q}>
            <label class="block bg-gray-200 p-2 text-lg rounded-lg peer-checked:text-white peer-checked:bg-green-600" for={`q-${q}`}>{q}</label>
          </div>
        {/each}
      </div>
    </div>


    <div class="flex flex-col gap-2">
      <div class="flex gap-2 text-2xl">
        <LucideIcon name={"Type"} size={36} color="green"/>
        <h2>نوع الأسئلة</h2>
      </div>

      <div class="flex gap-2">
        <div>
          <input class="hidden peer" id='q-classic' type="radio" name="questionType" value='q-classic'>
          <label class="flex flex-col gap-2 min-w-52 items-center justify-center bg-gray-200 px-7 py-3 text-lg rounded-lg peer-checked:text-white peer-checked:bg-green-600" for={'q-classic'}>
            <LucideIcon name={"MessageSquare"} size={36}/>
            <p class="text-2xl">كلاسيكي</p>
          </label>
        </div>

        <div>
          <input class="hidden peer" id='q-yesno' type="radio" name="questionType" value='q-yesno'>
          <label class="flex flex-col gap-2 min-w-52 items-center justify-center bg-gray-200 px-7 py-3 text-lg rounded-lg peer-checked:text-white peer-checked:bg-green-600" for={'q-yesno'}>
            <LucideIcon name={"Check"} size={36}/>
            <p class="text-2xl">صح أو خطأ</p>
          </label>
        </div>

        <div>
          <input class="hidden peer" id='q-multiplechoice' type="radio" name="questionType" value='q-multiplechoice'>
          <label class="flex flex-col gap-2 min-w-52 items-center justify-center bg-gray-200 px-7 py-3 text-lg rounded-lg peer-checked:text-white peer-checked:bg-green-600" for={'q-multiplechoice'}>
            <LucideIcon name={"ListTodo"} size={36}/>
            <p class="text-2xl">اختيار من متعدد</p>
          </label>
        </div>
      </div>
    </div>

  </div>
</div>