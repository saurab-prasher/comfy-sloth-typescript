export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
  return newNumber;
};

export const getUniqueValues = (array, value) => {
  if (value === "colors") {
    const tempArr = array?.map((item) => item[value]).flat();
    const tempArrUniqueValues = new Set(tempArr);
    const newArr = Array.from(tempArrUniqueValues);
    return ["all", ...newArr];
  }
  const tempArr = array?.map((item) => item[value]);
  const tempArrUniqueValues = new Set(tempArr);
  const newArr = Array.from(tempArrUniqueValues);
  return ["all", ...newArr];
};
