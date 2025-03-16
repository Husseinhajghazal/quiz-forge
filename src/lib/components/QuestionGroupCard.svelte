<script>
  import { IconButton } from "$lib/components/Buttons";
  import LucideIcon from "$lib/components/LucideIcon.svelte";
  import { fly } from "svelte/transition";
  import { NewQuestionGroupForm } from "./Forms";

  let newGroupDialogue = $state(false);

  const { count, type, points, choicesCount, editAction, deleteAction, index } =
    $props();

  function toggleNewGroupDialogue() {
    newGroupDialogue = !newGroupDialogue;
  }

  function addGroup(data) {
    editAction(index, data);
    toggleNewGroupDialogue();
  }
</script>

<div
  transition:fly={{ y: 100 }}
  class="flex flex-col gap-5 bg-white min-w-64 w-64 rounded-2xl p-4 shadow-md cursor-pointer hover:scale-105 transition-all duration-300"
>
  <div class="flex gap-3">
    <IconButton
      icon="Trash2"
      iconColor="red"
      onclick={deleteAction.bind(this, index)}
    />
    <IconButton icon="Pencil" onclick={toggleNewGroupDialogue} />
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

{#if newGroupDialogue}
  <NewQuestionGroupForm
    {choicesCount}
    {count}
    {points}
    {type}
    closeAction={toggleNewGroupDialogue}
    addAction={addGroup}
  />
{/if}
