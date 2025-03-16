<script>
  import LucideIcon from "../LucideIcon.svelte";

  const { icon, iconColor, className, type = "button", ...other } = $props();
</script>

<button
  type="button"
  class={`duration-300 cursor-pointer ${className}`}
  {...other}
>
  <LucideIcon name={icon} color={iconColor} />
</button>
