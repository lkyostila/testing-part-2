import isArrayLike from "../library/src/isArrayLike";

describe("Unit tests for isArrayLike.js", () => {
  test("Input a correct array.", () => {
    expect(isArrayLike([1, 2, 3])).toBe(true);
  });
  test("Input a correct array.", () => {
    expect(isArrayLike(document.body.childNodes)).toBe(true);
  });
  test("Input a correct array.", () => {
    expect(isArrayLike("testing")).toBe(true);
  });
  test("Input an incorrect array.", () => {
    expect(isArrayLike(null)).toBe(false);
  });
  test("Input an incorrect array.", () => {
    expect(isArrayLike(toString())).toBe(false);
  });
});
