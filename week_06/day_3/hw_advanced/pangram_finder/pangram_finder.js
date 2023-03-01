class PangramFinder {
  constructor(phrase) {
    this.alphabet = "qwertyuiopasdfghjklzxcvbnm".split("");
    this.phrase = phrase.split("").map((letter) => letter.toLowerCase());
  }
  isPangram() {
    return this.alphabet.every((letter) => this.phrase.includes(letter));
  }
}

module.exports = PangramFinder;
