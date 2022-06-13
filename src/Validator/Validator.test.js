import { validator } from "./Validator";
describe("Validator", () => {
  test("check validate value", () => {
    expect(validator(50)).toBe(true);
  });
  test("less than validate value  ", () => {
    expect(validator(-1)).toBe(false);
  });
  test("more than validate value", () => {
    expect(validator(101)).toBe(false);
  });
});
