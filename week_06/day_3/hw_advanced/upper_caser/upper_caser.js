class UpperCaser {
  constructor(words) {
    this.words = words;
  }
  toUpperCase() {
    return this.words.map((word) => word.toUpperCase());
  }
}

module.exports = UpperCaser;
