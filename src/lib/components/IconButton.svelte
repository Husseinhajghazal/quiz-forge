<script>
  import LucideIcon from "./LucideIcon.svelte";

  const {icon, iconColor} = $props();
</script>

<button
  class={'duration-300 cursor-pointer'}
>
  <LucideIcon name={icon} color={iconColor}/>
</button>
