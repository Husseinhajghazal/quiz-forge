<script>
  import LucideIcon from "../LucideIcon.svelte";

  const { content, className, icon, type = "button", ...other } = $props();
</script>

<button
  class={`bg-gray-500 hover:bg-gray-600 duration-300 cursor-pointer px-4 w-fit py-3 text-white rounded-xl flex items-center gap-2 ${className}`}
  {type}
  {...other}
>
  {#if icon}
    <LucideIcon name={icon} />
  {/if}
  {content}
</button>
