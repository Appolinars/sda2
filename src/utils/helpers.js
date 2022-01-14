export const encodeFormData = (data) => {
  const convertedData = new FormData();
  Object.keys(data).forEach((value) => {
    if (value) {
      convertedData.append(value, data[value]);
    }
  });
  return convertedData;
};
