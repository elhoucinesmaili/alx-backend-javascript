// Returns a string of all Set values that start with a specific string,
// with the prefix removed and values joined by a hyphen.
// If startString is empty or undefined, returns an empty string.
const cleanSet = (set, startString) => {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...set]
    .filter((parametro) => (parametro !== undefined ? parametro.startsWith(startString) : ''))
    .map((parametro) => (parametro !== undefined ? parametro.slice(startString.length) : ''))
    .join('-');
};

export default cleanSet;
