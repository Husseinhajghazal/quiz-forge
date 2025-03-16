import { addToast } from "$lib/functions";
import { writable } from "svelte/store";

export const newGroupDialogue = writable(false);

export function toggleNewGroupDialogue() {
  newGroupDialogue.update((value) => (value = !value));
}

export const groups = writable([]);

export function addGroup(data) {
  if (!data.points)
    return addToast(
      "مدخل العلامة خاطئ",
      "يجب عليك أدخال علامة المجموعة",
      "error"
    );

  if (data.type === "اختيار من متعدد" && !data.choicesCount)
    return addToast(
      "مدخل عدد الأختيارات خاطئ",
      "يجب عليك أدخال عدد الخيارات",
      "error"
    );

  if (
    data.type === "اختيار من متعدد" &&
    (data.choicesCount < 3 || data.choicesCount > 5)
  )
    return addToast(
      "مدخل عدد الأختيارات خاطئ",
      "عدد الخيارات يجب أن يكون بين 3 و 5 خيارات فقط",
      "error"
    );

  if (data.points < 0)
    return addToast(
      "مدخل العلامة خاطئ",
      "يجب عليك أدخال علامة المجموعة",
      "error"
    );

  groups.update((g) => [...g, data]);
  toggleNewGroupDialogue();
}

export function editGroup(index, data) {
  groups.update((g) => {
    const updatedGroups = [...g];
    updatedGroups[index] = data;
    return updatedGroups;
  });
}

export function deleteGroup(index) {
  groups.update((g) => {
    const updatedGroups = [...g];
    updatedGroups.splice(index, 1);
    return updatedGroups;
  });
}
