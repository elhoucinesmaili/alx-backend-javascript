// Define and export the Airport class
export default class Airport {
  // Constructor initializes airport name and code
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Override default toString() method to return a custom string
  toString() {
    return `[object ${this._code}]`;
  }
}
