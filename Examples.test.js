const functions = require("./Examples");

test("It should return sum of 2 + 2 ", () => {
  expect(functions.add(2, 2)).toBe(4);
});
