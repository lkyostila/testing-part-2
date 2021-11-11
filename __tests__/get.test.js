import get from "../library/src/get";
import { WORDS, randomSeed } from "../stringutil";

const validObject = {
  subObject1: {
    booleanVal: true,
    objectVal: {
      stringVal: "stringVal",
      intVal: 1,
    },
  },
  subObject2: {
    booleanVal: false,
    objectVal: {
      stringVal: "stringVal2",
      intVal: 2,
    },
  },
};

const invalidObject = {};

describe("Unit tests for get.js", () => {
  test("Valid object to query, valid path and default value as input", () => {
    const result = get(
      validObject,
      "subObject1.objectVal.stringVal",
      "default"
    );
    expect(result).toBe("stringVal");
  });

  test("Invalid object to query, some path and default value as input", () => {
    const result = get(
      invalidObject,
      "subObject1.objectVal.stringVal",
      "default"
    );
    expect(result).toBe("default");
  });
});
