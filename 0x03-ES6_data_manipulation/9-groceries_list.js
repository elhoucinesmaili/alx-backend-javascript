// Creates and returns a Map containing grocery items as keys and their quantities as values
const groceriesList = () => {
  const res = new Map();
  const objetos = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  for (const key of Object.keys(objetos)) {
    res.set(key, objetos[key]);
  }
  return res;
};

export default groceriesList;
