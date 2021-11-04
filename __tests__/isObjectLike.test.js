import isObjectLike from "../kirjasto/src/isObjectLike";

describe("Unit tests for isObjectLike.js: should return `true` if `value` is object-like, else `false`.", () => {
  test("Returns true when passing an array", () => {
    expect(isObjectLike([1,2])).toBe(true);
  });
  test("Returns true when passing a string", () => {
    expect(isObjectLike("test")).toBe(false);
  });
  test("Returns false when passing 'undefined'", () => {
    expect(isObjectLike(undefined)).toBe(false);
  });
  test("Returns false when passing 'null'", () => {
    expect(isObjectLike(null)).toBe(false);
  });
  test("Returns false when passing 'test'", () => {
    expect(isObjectLike(test)).toBe(false);
  });
});
