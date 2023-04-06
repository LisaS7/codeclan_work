function createPhoneNumber(numbers) {
  const group1 = numbers.slice(0, 3).join("");
  const group2 = numbers.slice(3, 6).join("");
  const group3 = numbers.slice(6, 11).join("");

  return `(${group1}) ${group2}-${group3}`;
}

module.exports = createPhoneNumber;
