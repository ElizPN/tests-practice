import { MapArrToString } from "./MapArrToString";

describe("MapArrToString", () => {
  test("check validate value", () => {
    expect(MapArrToString([1, 2, 3])).toEqual(["1", "2", "3"]);
  });
  test("check diferent values", () => {
    expect(MapArrToString([1, 2, 3, null, undefined, "uiiiu"])).toEqual([
      "1",
      "2",
      "3",
    ]);
  });
  test("check empty array", () => {
    expect(MapArrToString([])).toEqual([]);
  });
  test("check empty array", () => {
    expect(MapArrToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
  });
});
