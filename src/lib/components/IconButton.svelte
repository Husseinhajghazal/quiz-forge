<script>
  import LucideIcon from "./LucideIcon.svelte";

  const { content, className, icon, iconColor, onClick } = $props();
</script>

<button
  class={`bg-green-600 hover:bg-green-700 duration-300 cursor-pointer px-4 w-fit py-3 text-white rounded-xl flex items-center gap-2 ${className}`}
>
  <LucideIcon name={icon} color={iconColor}/>
  {content}
</button>
