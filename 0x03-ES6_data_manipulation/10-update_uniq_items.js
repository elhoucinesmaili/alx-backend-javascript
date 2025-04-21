// Updates a Map by setting the value to 100 for all entries that have a value of 1.
// Throws an error if the input is not a Map.
const updateUniqueItems = (map) => {
  if (map instanceof Map) {
    for (const [key, value] of map.entries()) {
      if (value === 1) {
        map.set(key, 100);
      }
    }
    return map;
  }
  throw new Error('Cannot process');
};

export default updateUniqueItems;
