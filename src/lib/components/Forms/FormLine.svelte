<script>
  import LucideIcon from "$lib/components/LucideIcon.svelte";

  import { formLineItems } from "$lib/data";

  const { globalStep } = $props();
</script>

<div class="flex items-center justify-center w-full mt-5">
  {#each formLineItems as { icon, step }}
    <div
      class={`w-14 h-14 rounded-full flex items-center justify-center cursor-pointer ${globalStep < step ? "bg-white text-black" : "bg-green-600 text-white"}`}
    >
      <LucideIcon name={icon} size={30} />
    </div>
    {#if step < 4}
      <span
        class={`w-20 h-3 ${globalStep > step ? "bg-green-600" : "bg-white"}`}
      >
      </span>
    {/if}
  {/each}
</div>
