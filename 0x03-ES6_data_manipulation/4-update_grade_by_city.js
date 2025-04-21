export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  // Returns an array of students from the specified city,
  // updating their grades based on the newGrades array.
  // If a student has no matching entry in newGrades, grade is set to 'N/A'.

  const cityStudents = students.filter((student) => student.location === city).map((student) => {
    const item2 = newGrades.find((student2) => student.id === student2.studentId);
    return { ...student, grade: item2 ? item2.grade : 'N/A' };
  });

  return cityStudents;
}
