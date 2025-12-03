import { it, expect, describe } from "vitest";
import { decodeInput, sequenceRepeats } from "./b";
import { testInputB } from "./input";

describe("2a", () => {
  describe("sequenceRepeats", () => {
    it("returns 1234 for 12341234", () => {
      expect(sequenceRepeats(12341234)).toBe(1234);
    });

    it("returns 123 for 123123123", () => {
      expect(sequenceRepeats(123123123)).toBe(123);
    });

    it("returns 12 for 1212121212", () => {
      expect(sequenceRepeats(1212121212)).toBe(12);
    });

    it("returns 1 for 1111111", () => {
      expect(sequenceRepeats(1111111)).toBe(1);
    });

    it("returns 1 for 11", () => {
      expect(sequenceRepeats(11)).toBe(1);
    });

    it("returns 2 for 22", () => {
      expect(sequenceRepeats(22)).toBe(2);
    });

    it("returns 9 for 999", () => {
      expect(sequenceRepeats(999)).toBe(9);
    });

    it("returns 10 for 1010", () => {
      expect(sequenceRepeats(1010)).toBe(10);
    });

    it("returns 11885 for 1188511885", () => {
      expect(sequenceRepeats(1188511885)).toBe(11885);
    });

    it("returns 222 for 222222", () => {
      expect(sequenceRepeats(222222)).toBe(222);
    });

    it("returns 446 for 446446", () => {
      expect(sequenceRepeats(446446)).toBe(446);
    });

    it("returns 3859 for 38593859", () => {
      expect(sequenceRepeats(38593859)).toBe(3859);
    });

    it("returns 56 for 565656", () => {
      expect(sequenceRepeats(565656)).toBe(56);
    });

    it("returns 824 for 824824824", () => {
      expect(sequenceRepeats(824824824)).toBe(824);
    });

    it("returns 21 for 2121212121", () => {
      expect(sequenceRepeats(2121212121)).toBe(21);
    });

    it("returns undefined for 110", () => {
      expect(sequenceRepeats(110)).toBe(undefined);
    });

    it("returns undefined for 112", () => {
      expect(sequenceRepeats(112)).toBe(undefined);
    });

    it("returns undefined for 1188511881", () => {
      expect(sequenceRepeats(112)).toBe(undefined);
    });

    it("returns undefined for 222221", () => {
      expect(sequenceRepeats(222221)).toBe(undefined);
    });

    it("returns undefined for 446445", () => {
      expect(sequenceRepeats(446445)).toBe(undefined);
    });
  });

  describe(decodeInput, () => {
    it("sums all numbers that have a sequence which repeats atleast twice", () => {
      expect(decodeInput(testInputB)).toBe(4174379265);
    });
  });
});
