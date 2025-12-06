import { describe, expect, it } from "vitest";
import { calculateMaxJoltage, measureMaxJoltage } from "./app";
import { extractArrayFromTxtFile } from "../../utils/fileReader";

describe("3b", () => {
  describe("measureMaxJoltage", () => {
    it("returns 987654321111 for 987654321111111", () => {
      expect(measureMaxJoltage("987654321111111", 12)).toBe(987654321111);
    });

    it("returns 811111111119 for 811111111111119", () => {
      expect(measureMaxJoltage("811111111111119", 12)).toBe(811111111119);
    });

    it("returns 434234234278 for 234234234234278", () => {
      expect(measureMaxJoltage("234234234234278", 12)).toBe(434234234278);
    });

    it("returns 888911112111 for 818181911112111", () => {
      expect(measureMaxJoltage("818181911112111", 12)).toBe(888911112111);
    });
  });

  describe("calculateMaxJoltage", () => {
    it("returns 3121910778619 for [987654321111111, 811111111111119, 234234234234278, 818181911112111]", () => {
      const data = extractArrayFromTxtFile("day/3", "inputTestB.txt");

      expect(calculateMaxJoltage(data, 12)).toBe(3121910778619);
    });

    it("returns 170418192256861 for input.txt", () => {
      const data = extractArrayFromTxtFile("day/3", "input.txt");

      expect(calculateMaxJoltage(data, 12)).toBe(170418192256861);
    });
  });
});
