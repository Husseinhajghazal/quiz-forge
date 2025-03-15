<script>
  import LucideIcon from "../LucideIcon.svelte";

  const {
    type = "text",
    name,
    label,
    divClass,
    inputClass,
    labelClass,
    icon,
    ...other
  } = $props();
</script>

<div class={`flex flex-col gap-2 ${divClass}`}>
  <div class="flex gap-2 pr-3">
    {#if icon}
      <LucideIcon name={icon} class="text-green-600" />
    {/if}
    <label for={name} class={`font-semibold text-lg ${labelClass}`}>
      {label}
    </label>
  </div>
  <input
    {type}
    {name}
    id={name}
    class={`border-gray-500 rounded-xl hover:border-green-600 focus:border-green-600 focus:ring-0 p-2 duration-300 ${inputClass}`}
    {...other}
  />
</div>
