// Returns an array of student IDs from a list of student objects.
// If the input is not an array, returns an empty array.
export default function getListStudentIds(list) {
  if (Array.isArray(list)) {
    return list.map((obj) => obj.id);
  }
  return [];
}
