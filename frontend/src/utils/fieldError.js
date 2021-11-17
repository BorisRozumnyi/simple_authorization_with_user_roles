export const fieldError = (
  fieldName,
  errors
) =>
  errors.find(
    ({ param }) => param === fieldName
  );
