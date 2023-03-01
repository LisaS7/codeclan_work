class AnagramFinder {
  constructor(word) {
    this.word = word;
  }
  sortString(word) {
    return word.toLowerCase().split("").sort().join("");
  }
  findAnagrams(otherWords) {
    const sortedThisWord = this.sortString(this.word);
    return otherWords.filter(
      (word) =>
        this.sortString(word.toLowerCase()) === sortedThisWord &&
        this.word !== word
    );
  }
}

module.exports = AnagramFinder;
