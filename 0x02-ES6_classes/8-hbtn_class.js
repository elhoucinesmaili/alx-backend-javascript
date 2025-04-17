// Define and export the ALX class
export default class ALX {
  // Constructor initializes size and location
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Override valueOf() to return the size
  valueOf() {
    return this._size;
  }

  // Override toString() to return the location
  toString() {
    return this._location;
  }
}
