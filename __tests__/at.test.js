import at from "../library/src/at";

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

describe("Unit tests for get.js", () => {
  test("Valid object to iterate over and valid property values to be picked", () => {
    const query = [
      "subObject1.objectVal.stringVal",
      "subObject2.objectVal.stringVal",
    ];
    const result = at(validObject, query);

    expect(result).toStrictEqual(["stringVal", "stringVal2"]);
  });

  test("Valid object to iterate over and invalid valid property values to be picked", () => {
    const query = ["", "subObject2.stringVal"];
    const result = at(validObject, query);

    expect(result).toBe([]);
  });
});
