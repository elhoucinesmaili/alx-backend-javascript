// Returns the sum of all student IDs in the array
const getStudentIdsSum = (students) => {
  const id = students.reduce(
    (acc, value) => acc + value.id, 0,
  );
  return id;
};

export default getStudentIdsSum;
