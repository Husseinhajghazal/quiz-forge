import { goto } from "$app/navigation";
import { toasts } from "svelte-toasts";

export const addToast = (
  title = "Başlık",
  description = "Açıklama",
  type = "success"
) => {
  toasts.add({
    title,
    description,
    type,
    duration: 5000,
    showProgress: true,
    theme: "light",
    placement: "top-right",
  });
};

export const formHandler = (result) => {
  console.log(result);

  const type = result.type;

  if (type === "success" || type === "failure") {
    const title = result.data?.title;
    const message = result.data?.message;
    const path = result.data?.path;
    const toastType = type === "failure" ? "error" : "success";
    addToast(title, message, toastType);

    if (path) {
      goto(path);
    }
  }

  if (type === "redirect") {
    goto(result.location);
  }
};
