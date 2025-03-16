<script>
  import "../app.css";

  import { ToastContainer, FlatToast } from "svelte-toasts";

  let { children } = $props();
</script>

{@render children()}
<ToastContainer let:data>
  <FlatToast {data} />
</ToastContainer>
