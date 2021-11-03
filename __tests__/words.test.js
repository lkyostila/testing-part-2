import words from "../kirjasto/src/words";

const PARAM_WORDS = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
  "Duis",
  "varius",
  "augue",
  "eget",
  "velit",
  "varius",
  "nec",
  "placerat",
  "risus",
  "viverra",
  "Cras",
  "porttitor",
];

// Reproducable pseudo-randomness.
// Source: https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript/23304189#23304189
const randomSeed = function (s) {
  return function () {
    s = Math.sin(s) * 10000;
    return s - Math.floor(s);
  };
};
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
