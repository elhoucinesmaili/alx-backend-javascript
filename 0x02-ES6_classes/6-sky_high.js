// Import the Building class from another module
import Building from './5-building';

// Define and export the SkyHighBuilding class, which extends Building
export default class SkyHighBuilding extends Building {
  // Constructor initializes square feet and number of floors
  constructor(sqft, floors) {
    super(sqft); // Call the parent class constructor with sqft
    this._floors = floors;
  }

  // Getter for number of floors
  get floors() {
    return this._floors;
  }

  // Method that overrides the parent check and returns an evacuation message
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
