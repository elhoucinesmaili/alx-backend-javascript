export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },  // Spread to copy the employeesList
    getNumberOfDepartments: function (employeesList) {
      return Object.keys(employeesList).length;  // Get number of keys (departments)
    },
  };
}
