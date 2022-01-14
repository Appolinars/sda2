export const encodeFormData = (data) => {
  const FormData = new FormData();
  Object.keys(data).forEach((value) => {
    FormData.append(value, data[value]);
  });
  return FormData;
};
