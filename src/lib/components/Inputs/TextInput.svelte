<script>
  import LucideIcon from "../LucideIcon.svelte";

  const { type = "text", name, label, divClass, inputClass, Icon } = $props();
</script>

<div class={`flex flex-col gap-2 ${divClass}`}>
  <div>
    <LucideIcon name={Icon} />
    <label for={name}>{label}</label>
  </div>
  <input {type} {name} id={name} class={`${inputClass}`} />
</div>
