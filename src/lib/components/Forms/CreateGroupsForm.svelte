<script>
  import { Button } from "$lib/components/Buttons";
  import LucideIcon from "$lib/components/LucideIcon.svelte";
  import QuestionGroupCard from "$lib/components/QuestionGroupCard.svelte";
  import { NewQuestionGroupForm } from "$lib/components/Forms";
  import { writable } from "svelte/store";

  let newGroupDialogue = $state(false);
  let groups = writable([]);

  function toggleNewGroupDialogue() {
    newGroupDialogue = !newGroupDialogue;
  }

  function addGroup(data) {
    groups.update((g) => [...g, data]);
    toggleNewGroupDialogue();
  }

  function editGroup(index, data) {
    groups.update((g) => {
      const updatedGroups = [...g];
      updatedGroups[index] = data;
      return updatedGroups;
    });
  }
  function deleteGroup(index) {
    groups.update((g) => {
      const updatedGroups = [...g];
      updatedGroups.splice(index, 1);
      return updatedGroups;
    });
  }
</script>

<div class="flex flex-col px-10 mt-10 gap-10">
  <Button
    content="مجموعة جديدة"
    icon="Plus"
    className="bg-green-600 hover:bg-green-700"
    onclick={toggleNewGroupDialogue}
  />
  <div class="flex flex-wrap gap-6">
    {#each $groups as { count, points, type, choicesCount }, index}
      <QuestionGroupCard
        {type}
        {count}
        {points}
        {choicesCount}
        {index}
        editAction={editGroup}
        deleteAction={deleteGroup}
      />
    {/each}
  </div>
</div>

{#if newGroupDialogue}
  <NewQuestionGroupForm
    choicesCount={3}
    count={10}
    points={10}
    type="كلاسيكي"
    closeAction={toggleNewGroupDialogue}
    addAction={addGroup}
  />
{/if}
