// Stores the number of times each endpoint is queried using a WeakMap.
// Throws an error if an endpoint is called 5 or more times.

export const weakMap = new WeakMap();

// https://stackoverflow.com/questions/29413222/what-are-the-actual-uses-of-es6-weakmap
export function queryAPI(endpoint) {
  let called = 0;
  if (weakMap.get(endpoint)) called = weakMap.get(endpoint);
  weakMap.set(endpoint, called + 1);
  if (called + 1 >= 5) throw new Error('Endpoint load is high');
}
