// Define and export the ALX class
export class ALX {
  // Constructor initializes year and location for the class
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  // Getter for the year
  get year() {
    return this._year;
  }

  // Getter for the location
  get location() {
    return this._location;
  }
}

// Define and export the StudentALX class
export class StudentALX {
  // Constructor initializes student's first name, last name, and their class
  constructor(firstName, lastName, alxClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._alxClass = alxClass;
  }

  // Getter for full name of the student
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Getter for the student's ALX class
  get alxClass() {
    return this._alxClass;
  }

  // Method to return a full description of the student and their class
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._alxClass.year} - ${this._alxClass.location}`;
  }
}

// Create instances of ALX class for different years and locations
const class2019 = new ALX(2019, 'San Francisco');
const class2020 = new ALX(2020, 'San Francisco');

// Create instances of StudentALX class for various students
const student1 = new StudentALX('Guillaume', 'Salva', class2020);
const student2 = new StudentALX('John', 'Doe', class2020);
const student3 = new StudentALX('Albert', 'Clinton', class2019);
const student4 = new StudentALX('Donald', 'Bush', class2019);
const student5 = new StudentALX('Jason', 'Sandler', class2019);

// Export the list of student instances
export default [student1, student2, student3, student4, student5];
