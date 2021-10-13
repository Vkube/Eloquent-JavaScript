const countBs = require("/Programming/Eloquent-JavaScript-solution/build/Chapter03/bean_counting");
const countChar = require("/Programming/Eloquent-JavaScript-solution/build/Chapter03/bean_counting");

test("countChar ", () => {
  expect(countChar("kakkerlak", "k").toBe(4));
  expect(countBs("BBC").toBe(2));
});
