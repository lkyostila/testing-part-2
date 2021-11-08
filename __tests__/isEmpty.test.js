import isEmpty from "../library/src/isEmpty";

describe("Unit tests for isEmpty.js", () => {
  test("Returns true on empty input", () => {
    expect(isEmpty(null)).toBe(true);
  });
});
