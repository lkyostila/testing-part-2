import isArrayLike from "../library/src/isArrayLike";

const person = {
  firstname: "John",
  lastname: "Doe"
};

describe("Unit tests for isArrayLike.js", () => {
  test("Input a correct array which should return true.", () => {
    expect(isArrayLike([1, 2, 3])).toBe(true);
  });
  test("Input a property of an object which should return true.", () => {
    expect(isArrayLike(person.firstname)).toBe(true);
  });
  test("Input a string which should return true.", () => {
    expect(isArrayLike("testing")).toBe(true);
  });
  test("Input 'null' which should return false.", () => {
    expect(isArrayLike(null)).toBe(false);
  });
  test("Input a function which should return false.", () => {
    expect(isArrayLike(person.lastname.length)).toBe(false);
  });
});
