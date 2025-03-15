<script>
  import * as icons from "@lucide/svelte";
  let { name, ...others } = $props();

  const Icon = icons[name];
</script>

<Icon {...others} />
