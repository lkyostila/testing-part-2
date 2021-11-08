import defaultToAny from "../library/src/defaultToAny";

describe("Unit tests for defaultToAny.js: receives multiple default values and returns the first one that is not `NaN`, `null`, or `undefined`.", () => {
  test("A finite number.", () => {
    expect(defaultToAny(2, 20, 12)).toBe(2);
  });
  test("The firs value is 'undefined'.", () => {
    expect(defaultToAny(undefined, 20, 12)).toBe(20);
  });
  test("The first value is 'null' and the second 'undefined'.", () => {
    expect(defaultToAny(null, undefined, 12)).toBe(12);
  });
  test("All the vaules are 'null'.", () => {
    expect(defaultToAny(null, null, null)).toBe(null);
  });
  test("All the vaules are 'undefined'.", () => {
    expect(defaultToAny(undefined, undefined, undefined)).toBe(undefined);
  });
  test("All the values are indeterminate.", () => {
    expect(defaultToAny(undefined, null, NaN)).toBe(NaN);
  });
});
