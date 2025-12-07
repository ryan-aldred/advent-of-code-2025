import { describe, expect, it } from "vitest";
import { extractArrayFromTxtFile } from "../../utils/fileReader";
import { countFreshIngredients } from "./app";

describe("day 5", () => {
  describe("countFreshIngredients", () => {
    it("returns 3 for testInputA", () => {
      const data = extractArrayFromTxtFile("day/5", "inputTestA.txt");

      expect(countFreshIngredients(data)).toBe(3);
    });
  });
});
