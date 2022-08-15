class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.numberMin = min;
    this.numberMax = max;
  }

  guess = () => this.candidate = Math.round((this.numberMin + this.numberMax) / 2);

  lower() {
    this.numberMax = this.candidate;
  }

  greater() {
    this.numberMin = this.candidate;
  }
}

module.exports = GuessingGame;
