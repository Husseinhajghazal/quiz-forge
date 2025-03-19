import { goto } from "$app/navigation";
import Toastify from "toastify-js";

export const addToast = (description = "Açıklama", type = "success") => {
  Toastify({
    text: description,
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: type === "success" ? "green" : "red",
      color: "white",
      dir: "rtl",
    },
  }).showToast();
};

export const formHandler = (result) => {
  const type = result.type;

  if (type === "success" || type === "failure") {
    const message = result.data?.message;
    const path = result.data?.path;
    const toastType = type === "failure" ? "error" : "success";
    addToast(message, toastType);

    if (path) {
      goto(path);
    }
  }

  if (type === "redirect") {
    goto(result.location);
  }
};
