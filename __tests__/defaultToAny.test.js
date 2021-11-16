import defaultToAny from "../library/src/defaultToAny";

describe("Unit tests for defaultToAny.js: receives multiple default values and returns the first one that is not `NaN`, `null`, or `undefined`.", () => {
  test("Input an integer as a first value", () => {
    expect(defaultToAny(2, 20, 12)).toBe(2);
  });
  test("Input 'undefined' as first value.", () => {
    expect(defaultToAny(undefined, 20, 12)).toBe(20);
  });
  test("Input 'null' as a first value and 'undefined' as a second value.", () => {
    expect(defaultToAny(null, undefined, 12)).toBe(12);
  });
  test("Input values that are all 'null'.", () => {
    expect(defaultToAny(null, null, null)).toBe(null);
  });
  test("Input values that are all 'undefined'.", () => {
    expect(defaultToAny(undefined, undefined, undefined)).toBe(undefined);
  });
  test("Input values that are all indeterminate.", () => {
    expect(defaultToAny(undefined, null, NaN)).toBe(NaN);
  });
});
