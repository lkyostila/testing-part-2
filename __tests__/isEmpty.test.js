import isEmpty from "../library/src/isEmpty";

describe("Unit tests for isEmpty.js", () => {
  test("Returns true on empty input", () => {
    expect(isEmpty(null)).toBe(true);
  });
  test("Returns true on boolean value.", () => {
    expect(isEmpty(true)).toBe(true);
  });
  test("Returns true on an integer value", () => {
    expect(isEmpty(12)).toBe(true);
  });
  test("Returns false on an array value", () => {
    expect(isEmpty([4, 1, 3, 7])).toBe(false);
  });
  test("Returns false on a string value", () => {
    expect(isEmpty("test")).toBe(false);
  });
  test("Returns false on dictionary value", () => {
    expect(isEmpty({ 'a': 1 })).toBe(false);
  });
});
