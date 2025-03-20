<script>
  import { createEventDispatcher } from "svelte";
  import { Button, IconButton } from "$lib/components/Buttons";
  import { TextInput } from "$lib/components/Inputs";
  import LucideIcon from "$lib/components/LucideIcon.svelte";
  import { fly, fade } from "svelte/transition";
  import { groupsTypes } from "$lib/data";

  let { count, type, points, choicesCount, addAction, closeAction } = $props();

  const quantities = [1, 2, 3, 4, 5];
</script>

<button
  type="button"
  onclick={closeAction}
  aria-label="modal-background"
  transition:fade
  class="fixed left-0 right-0 top-0 bottom-0 cursor-pointer bg-gray-500/60"
></button>
<div
  transition:fly={{ y: 300 }}
  class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-3xl"
>
  <div class="flex justify-end pb-3">
    <IconButton icon="X" iconColor="red" onclick={closeAction} />
  </div>

  <div class="flex flex-col gap-5 divide-y-2 divide-gray-200">
    <div class="flex flex-col gap-2 pb-3">
      <div class="flex gap-2 text-2xl">
        <LucideIcon name="CircleHelp" size={36} class="text-green-600" />
        <h2>عدد الأسئلة</h2>
      </div>
      <div class="grid gap-2 grid-cols-5">
        {#each quantities as q}
          <div>
            <input
              id={`q-${q}`}
              class="peer hidden"
              type="radio"
              name="questionQuantity"
              bind:group={count}
              value={q}
            />
            <label
              class="cursor-pointer bg-gray-200 p-4 text-xl rounded-lg peer-checked:text-white hover:bg-green-400 duration-300 peer-checked:bg-green-600 items-center flex justify-center"
              for={`q-${q}`}>{q}</label
            >
          </div>
        {/each}
      </div>
    </div>
    <div class="flex flex-col gap-2 pb-3">
      <div class="flex gap-2 text-2xl">
        <LucideIcon name="Type" size={36} class="text-green-600" />
        <h2>نوع الأسئلة</h2>
      </div>
      <div class="flex gap-2">
        {#each groupsTypes as option}
          <div>
            <input
              class="hidden peer"
              id={option.id}
              type="radio"
              name="questionType"
              value={option.id}
              bind:group={type}
            />
            <label
              class="hover:bg-green-400 duration-300 flex flex-col gap-2 min-w-52 items-center justify-center bg-gray-200 px-7 py-3 text-lg rounded-lg peer-checked:text-white peer-checked:bg-green-600"
              for={option.id}
            >
              <LucideIcon name={option.icon} size={36} />
              <p class="text-2xl">{option.label}</p>
            </label>
          </div>
        {/each}
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <TextInput
        bind:value={points}
        type="number"
        name="points"
        label="علامة المجموعة"
        icon="FileDigit"
        divClass={type !== "MULTIPLE_CHOICES" && "col-span-2"}
      />
      {#if type === "MULTIPLE_CHOICES"}
        <TextInput
          bind:value={choicesCount}
          type="number"
          name="choicesCount"
          label="عدد الخيارات"
          icon="ArrowDown01"
          onchange={(e) => {
            const value = e.target.value;
            if (value > 5 || value < 3) {
              e.target.value = 3;
            } else {
              e.target.value = value;
            }
          }}
        />
      {/if}
    </div>
  </div>
  <Button
    onclick={() =>
      addAction({
        count,
        type,
        name: groupsTypes.find((e) => e.id === type).label,
        points,
        choicesCount,
      })}
    content="أنشاء"
    icon="Plus"
    className="mt-3 mx-auto bg-green-600 hover:bg-green-700"
  />
</div>
