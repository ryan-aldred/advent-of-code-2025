import { describe, expect, it } from "vitest";
import { calculateMaxJoltage, extractMaxJoltage } from "./a";
import { extractArrayFromTxtFile } from "../../utils/fileReader";

describe("calculate max joltage", () => {
  describe("extract max joltage", () => {
    it("returns 98 for '987654321111111'", () => {
      expect(extractMaxJoltage("987654321111111")).toBe(98);
    });

    it("returns 89 for '811111111111119'", () => {
      expect(extractMaxJoltage("811111111111119")).toBe(89);
    });

    it("returns 78 for '234234234234278'", () => {
      expect(extractMaxJoltage("234234234234278")).toBe(78);
    });

    it("returns 92 for '818181911112111'", () => {
      expect(extractMaxJoltage("818181911112111")).toBe(92);
    });
  });

  describe("calculate max jolatge", () => {
    it("returns 357 for an array of '987654321111111', '811111111111119', '234234234234278', and '818181911112111'", () => {
      const testInputs = extractArrayFromTxtFile("day/3", "inputTest.txt");

      expect(calculateMaxJoltage(testInputs)).toBe(357);
    });
  });
});
