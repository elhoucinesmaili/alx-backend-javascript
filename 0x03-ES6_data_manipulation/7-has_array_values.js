// Checks if all elements in the array exist in the given Set
const hasValuesFromArray = (set, array) => {
  for (const item of array) {
    if (!set.has(item)) {
      return false;
    }
  }
  return true;
};

export default hasValuesFromArray;
