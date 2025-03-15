<script>
  import LucideIcon from "../LucideIcon.svelte";

  const { content, className, icon } = $props();
</script>

<button
  class={`bg-green-600 px-4 py-3 text-white rounded-xl flex items-center gap-2 ${className}`}
>
  {content}
  <LucideIcon name="Apple" />
</button>
