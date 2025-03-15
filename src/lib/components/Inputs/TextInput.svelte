<script>
  const { type = "text", name } = $props();
</script>

<div>
  <label for={name}></label>
  <input {type} {name} id={name} />
</div>
