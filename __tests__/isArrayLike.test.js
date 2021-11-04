import isArrayLike from "../kirjasto/src/isArrayLike";

describe("Unit tests for isArrayLike.js", () => {
  test("A correct array.", () => {
    expect(isArrayLike([1, 2, 3]).toBe(true));
  });
  test("A correct array.", () => {
    expect(isArrayLike(document.body.childNodes).toBe(true));
  });
  test("An incorrect array.", () => {
    expect(isArrayLike("testing").toBe(true));
  });
  test("An incorrect array.", () => {
    expect(isArrayLike(null).toBe(false));
  });
;
});
