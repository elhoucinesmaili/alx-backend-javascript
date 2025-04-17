// Define and export the Pricing class
export default class Pricing {
  // Constructor to initialize amount and currency
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter for amount
  get amount() {
    return this._amount;
  }

  // Setter for amount
  set amount(n) {
    this._amount = n;
  }

  // Getter for currency
  get currency() {
    return this._currency;
  }

  // Setter for currency
  set currency(n) {
    this._currency = n;
  }

  // Method to display the full price with currency name and code
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price based on a conversion rate
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
