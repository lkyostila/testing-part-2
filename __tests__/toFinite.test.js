import toFinite from "../kirjasto/src/toFinite";

describe("Unit tests for toFinite.js", () => {
  test("A finite number.", () => {
    expect(toFinite(4.9)).toBe(4.9);
  });
  test("A finite number.", () => {
    expect(toFinite(2,6)).toBe(2,6);
  });
  test("An infinite number.", () => {
    expect(toFinite(Infinity)).toBe(1.7976931348623157e+308);
  });
  test("A finite number with quotes.", () => {
    expect(toFinite('7.1')).toBe(7.1);
  });
});
