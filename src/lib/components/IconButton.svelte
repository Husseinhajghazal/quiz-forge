<script>
  import LucideIcon from "./LucideIcon.svelte";

  const {icon, iconColor, ...other} = $props();
</script>

<button
  class={'duration-300 cursor-pointer'}
  {...other}
>
  <LucideIcon name={icon} color={iconColor}/>
</button>
