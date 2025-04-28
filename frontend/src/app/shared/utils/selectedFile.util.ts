export const onFileSelected = (
  event: Event,
  isMultiple = false
): FileList | File | undefined => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0 && !isMultiple) {
    return input.files[0]; // Guardamos el archivo en una variable
  }
  if (input.files && input.files.length > 1 && isMultiple) {
    return input.files; 
  }
  return undefined;
};
