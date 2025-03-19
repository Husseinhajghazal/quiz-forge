<script>
  import { Button } from "$lib/components/Buttons";
  import LucideIcon from "$lib/components/LucideIcon.svelte";
  import QuestionGroupCard from "$lib/components/QuestionGroupCard.svelte";
  import { NewQuestionGroupForm } from "$lib/components/Forms";
  import {
    addGroup,
    groups,
    newGroupDialogue,
    toggleNewGroupDialogue,
  } from "../../../stores/group";
</script>

<div class="flex flex-col px-10 mt-10 gap-10">
  <Button
    content="مجموعة جديدة"
    icon="Plus"
    className="bg-green-600 hover:bg-green-700"
    onclick={toggleNewGroupDialogue}
  />
  <div class="flex flex-wrap gap-6">
    {#each $groups as { count, points, type, name, choicesCount }, index}
      <QuestionGroupCard
        {type}
        {name}
        {count}
        {points}
        {choicesCount}
        {index}
      />
    {/each}
  </div>
</div>
<input type="text" name="groups" hidden value={JSON.stringify($groups)} />

{#if $newGroupDialogue}
  <NewQuestionGroupForm
    choicesCount={3}
    count={1}
    points={10}
    type="CLASSICAL"
    closeAction={toggleNewGroupDialogue}
    addAction={addGroup}
  />
{/if}
