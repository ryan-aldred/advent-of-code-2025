import { expect, test } from "vitest";
import { decodeInput } from "./b";
import { testInput } from "./input";

test("returns the number of times the counter hits zero for a given input", () => {
  const zeros = decodeInput(testInput);
  console.log(zeros);
  expect(zeros).toBe(6);
});
