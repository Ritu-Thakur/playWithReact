const array = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18]
];

// what would be the result?
array.flat().sort((a, b) => (a > b ? -1 : 1));

const flattenedArray = [1, 2, 3, 4, 5, 6];

// what would be the result?
flattenedArray.map((e) => e * 2);

const otherArray = [1, 2, 3];

// what would be the result?
otherArray.reduce((a, b) => a + b, 0);
