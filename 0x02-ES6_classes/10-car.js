// Define and export the Car class
export default class Car {
  // Constructor initializes brand, motor, and color for the car
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the current car instance
  cloneCar() {
    // Return a new instance of the same class with the same properties
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
