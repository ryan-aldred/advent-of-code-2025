import { test, expect } from "vitest";
import { testInputA } from "./input";
import { decodeInput } from "./a";

test("sums all invalid ids", () => {
  expect(decodeInput(testInputA)).toBe(1227775554);
});
