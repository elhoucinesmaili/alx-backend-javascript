// Define and export the Currency class
export default class Currency {
  // Constructor initializes currency code and name
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter for currency code
  get code() {
    return this._code;
  }

  // Setter for currency code
  set code(n) {
    this._code = n;
  }

  // Getter for currency name
  get name() {
    return this._name;
  }

  // Setter for currency name
  set name(n) {
    this._name = n;
  }

  // Method to display full currency in "Name (Code)" format
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
