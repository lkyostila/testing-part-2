import isEmpty from "../kirjasto/src/isEmpty";

test("Returns true on empty input", () => {
  expect(isEmpty(null)).toBe(true);
});
