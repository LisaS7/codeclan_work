class IsogramFinder {
  constructor(word) {
    this.word = word.toLowerCase().split("");
  }
  isIsogram() {
    return this.word.every((letter, index) => {
      return this.word.indexOf(letter) === index;
    });
  }
}

module.exports = IsogramFinder;
