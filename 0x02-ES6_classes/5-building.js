// Define and export the Building class
export default class Building {
  // Constructor initializes square feet and checks for implementation of evacuationWarningMessage
  constructor(sqft) {
    this._sqft = sqft;
    // Ensure that any subclass overrides evacuationWarningMessage
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter for square feet
  get sqft() {
    return this._sqft;
  }

  // Setter for square feet
  set sqft(value) {
    this._sqft = value;
  }
}
