const myNumbers = [1, 2, 3, 4, 5];

myNumbers.forEach((number, index) => {
  console.log(`Number ${number} | Index ${index}`);
});

const getEvens = function (numbers) {
  const result = [];
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      result.push(number);
    }
  });
  return result;
};

console.log(getEvens(myNumbers));

const sumElements = function (numbers) {
  let total = 0;
  numbers.forEach((number) => {
    total += number;
  });
};
