import { updateObject } from "./updateObject";

describe("updateObject", () => {
  test("should return a array", () => {
    expect(typeof updateObject(1, "_", ["a", "b", "c"])).toEqual("object");
  });
  test("should return correct number", () => {
    expect(updateObject(-1, "a", ["b", "c"])).toEqual(["b", "a"]);
    expect(updateObject(-1, "_", ["a", "b", "c"])).toEqual(["a", "b", "_"]);
    expect(updateObject(1, 3, [2, 10, 11, 16, 17])).toEqual([2, 3, 11, 16, 17]);
  });
});
