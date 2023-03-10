class PangramFinder {
  constructor(phrase) {
    this.alphabet = "qwertyuiopasdfghjklzxcvbnm".split("");
    this.phrase = phrase.toLowerCase().split("");
  }
  isPangram() {
    return this.alphabet.every((letter) => this.phrase.includes(letter));
  }
}

module.exports = PangramFinder;
