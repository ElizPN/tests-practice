import { number } from "prop-types";

export function square(num: number) {
  if (num === 1) {
    return 1;
  }
  return Math.pow(num, 2);
}
