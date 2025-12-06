import { describe, expect, it } from "vitest";
import { extractArrayFromTxtFile } from "../../utils/fileReader";
import { calculateMaxJoltage, measureMaxJoltage } from "./app";

describe("calculate max joltage", () => {
  describe("extract max joltage", () => {
    it("returns 98 for '987654321111111'", () => {
      expect(measureMaxJoltage("987654321111111", 2)).toBe(98);
    });

    it("returns 89 for '811111111111119'", () => {
      expect(measureMaxJoltage("811111111111119", 2)).toBe(89);
    });

    it("returns 78 for '234234234234278'", () => {
      expect(measureMaxJoltage("234234234234278", 2)).toBe(78);
    });

    it("returns 92 for '818181911112111'", () => {
      expect(measureMaxJoltage("818181911112111", 2)).toBe(92);
    });
  });

  describe("calculate max jolatge", () => {
    it("returns 357 for an array of '987654321111111', '811111111111119', '234234234234278', and '818181911112111'", () => {
      const testInputs = extractArrayFromTxtFile("day/3", "inputTestA.txt");

      expect(calculateMaxJoltage(testInputs, 2)).toBe(357);
    });
  });
});
