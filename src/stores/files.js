import { get, writable } from "svelte/store";

export const uploadedFiles = writable([]);

export function handleFileChange(event) {
  const files = Array.from(event.target.files);
  uploadedFiles.update((current) => [...current, ...files]);
}

export function removeFile(index) {
  uploadedFiles.update((current) => current.filter((_, i) => i !== index));
}

export function resetFiles() {
  uploadedFiles.set([]);
}
