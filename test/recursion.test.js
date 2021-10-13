const isEven = require("/Programming/Eloquent-JavaScript-solution/build/Chapter03/Recursion");

test("Try your number is Even", () => {
  expect(isEven(50)).toBe(true);
  expect(isEven(75)).toBe(false);
});
