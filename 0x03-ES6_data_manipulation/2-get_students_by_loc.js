// Returns an array of students who are located in the specified city
const getStudentsByLocation = (students, city) => {
  const arrayOfObjects = students.filter((student) => student.location === city);
  return arrayOfObjects;
};

export default getStudentsByLocation;
