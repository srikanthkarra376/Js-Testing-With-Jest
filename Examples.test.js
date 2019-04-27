const functions = require("./Examples");
//is equality test
test("It should return sum of 2 + 2 ", () => {
  expect(functions.add(2, 2)).toBe(4);
});
// is string test
test("It should return the null", () => {
  expect(functions.checkValue()).toBeNull();
});
test("It should return  a <  b", () => {
  expect(functions.greaterValue(10, 4));
});
test("It should return a 625", () => {
  expect(functions.Square(25)).toBe(625);
});
