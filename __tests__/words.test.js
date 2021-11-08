import words from "../library/src/words";
import { WORDS as PARAM_WORDS, randomSeed } from "../stringutil";

const testRandom = randomSeed(1);

describe("Unit tests for words.js", () => {
  test("Input with strings of arbitrary length with one white space", () => {
    PARAM_WORDS.forEach((string, i) => {
      if (i == 0) return;

      const stringsConcat = string + " " + PARAM_WORDS[i - 1];
      expect(words(stringsConcat)).toStrictEqual([string, PARAM_WORDS[i - 1]]);
    });
  });

  test("Input with strings of arbitrary length with arbitrary amount of white space", () => {
    PARAM_WORDS.forEach((string, i) => {
      if (i == 0) return;

      const whitespaceAmount = Math.floor(testRandom() * 10) + 2;
      const stringsConcat =
        string + new Array(whitespaceAmount).join(" ") + PARAM_WORDS[i - 1];
      expect(words(stringsConcat)).toStrictEqual([string, PARAM_WORDS[i - 1]]);
    });
  });

  test("Input with a single string without whitespace", () => {
    PARAM_WORDS.forEach((string) => {
      expect(words(string)).toStrictEqual([string]);
    });
  });

  test("Empty input", () => {
    expect(words("")).toStrictEqual([]);
  });
});
