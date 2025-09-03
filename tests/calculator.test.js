const calculator = require("../src/calculator");

test("calculator functions", () => {
  let calcTest = new calculator(3, 3);

  expect(calcTest.add()).toBe(6);
  expect(calcTest.subtract()).toBe(0);
  expect(calcTest.divide()).toBe(1);
  expect(calcTest.multiply()).toBe(9);
});
