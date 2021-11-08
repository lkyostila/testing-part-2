import upperFirst from "../library/src/upperFirst";
import { WORDS, randomSeed } from "../stringutil";
const testRandom = randomSeed(1);
const WORDS_LOWER_CASE = WORDS.map((w) => w.toLowerCase());
const WORDS_UPPER_CASE = WORDS.map((w) => w.toUpperCase());
const WORDS_MIXED_CASE = WORDS.map((w) => {
  const mixedCaseIndex = Math.floor(testRandom() * w.length);
  let returnWord =
    w.substring(0, mixedCaseIndex) +
    w.charAt(mixedCaseIndex).toUpperCase() +
    w.substring(mixedCaseIndex + 1);
  return returnWord;
});

describe("Unit tests for upperFirst.js", () => {
  test("Input string with all lower case letters", () => {
    WORDS_LOWER_CASE.forEach((string) => {
      expect(upperFirst(string)).toStrictEqual(
        string.charAt(0).toUpperCase() + string.slice(1)
      );
    });
  });
  test("Input string with both upper and lower case letters", () => {
    WORDS_MIXED_CASE.forEach((string) => {
      expect(upperFirst(string)).toStrictEqual(
        string.charAt(0).toUpperCase() + string.slice(1)
      );
    });
  });
  test("Input string with only upper case letters", () => {
    WORDS_UPPER_CASE.forEach((string) => {
      expect(upperFirst(string)).toStrictEqual(string);
    });
  });
  test("Input string with upper case letter as the first character", () => {
    WORDS_MIXED_CASE.forEach((string) => {
      const firstLetterAleadyUpperCase =
        string.charAt(0).toUpperCase() + string.slice(1);
      expect(upperFirst(firstLetterAleadyUpperCase)).toStrictEqual(
        firstLetterAleadyUpperCase
      );
    });
  });
  test("Input string with white space as the first character", () => {
    WORDS_MIXED_CASE.forEach((string) => {
      const whiteSpaceFirst = " " + string;
      expect(upperFirst(whiteSpaceFirst)).toStrictEqual(whiteSpaceFirst);
    });
  });
  test("Empty input string", () => {
    expect(upperFirst("")).toBeFalsy();
  });
});
