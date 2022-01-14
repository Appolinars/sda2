export const encodeFormData = (data) => {
  const convertedData = new FormData();
  Object.keys(data).forEach((field) => {
    convertedData.append(field, data[field]);
  });
  return convertedData;
};
