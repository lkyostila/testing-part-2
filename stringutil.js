export const WORDS = [
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
export const randomSeed = function (s) {
  return function () {
    s = Math.sin(s) * 10000;
    return s - Math.floor(s);
  };
};
