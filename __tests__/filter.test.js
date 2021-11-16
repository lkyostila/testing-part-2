import filter from "../library/src/filter";
import { WORDS, randomSeed } from "../stringutil";

describe("Unit tests for filter.js", () => {
  const excludedValue1 = WORDS[3];
  const excludedValue2 = WORDS[5];
  const predicate = (value) => {
    if (value === excludedValue1 || value === excludedValue2) return false;
    return true;
  };
  const predicateTrue = () => true;

  test("Non-empty array as input and valid predicate", () => {
    const filtered = filter(WORDS, predicate);
    expect(filtered.some((w) => w === excludedValue1)).toBeFalsy();
    expect(filtered.some((w) => w === excludedValue2)).toBeFalsy();
  });
  test("Input string with only upper case letters", () => {});

  test("Empty array as input and valid predicate", () => {
    expect(filter([], predicate)).toEqual([]);
  });

  test("Non-empty array as input and predicate that always returns true", () => {
    expect(filter(WORDS, predicateTrue)).toStrictEqual(WORDS);
  });

  test("Non-empty array and predicate that always returns false", () => {
    expect(filter(WORDS, () => !predicateTrue)).toEqual([]);
  });
});
