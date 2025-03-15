<script>
  import LucideIcon from "./LucideIcon.svelte";
  const { icon, iconColor, className, ...other } = $props();
</script>

<button class={`duration-300 cursor-pointer ${className}`}>
  <LucideIcon name={icon} color={iconColor} {...other} />
</button>
