import { writable } from "svelte/store";

export const formData = writable({
  school: "",
  teacher: "",
  date: "",
  duration: "",
  note: "",
});

export function changeInput(inputName, value) {
  formData.update((currValue) => {
    currValue[inputName] = value;
    return currValue;
  });
}
