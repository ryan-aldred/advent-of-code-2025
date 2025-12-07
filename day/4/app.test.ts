import { describe, expect, it } from "vitest";
import { extractArrayFromTxtFile } from "../../utils/fileReader";
import {
  getAdjacentCoords,
  optimizedForklifePath,
  optimizeForklifts,
} from "./app";

describe("day 4", () => {
  describe("getAdjacentCoords", () => {
    it("returns [ [ 0, 2 ], [ 0, 4 ], [ 1, 2 ], [ 1, 3 ], [ 1, 4 ] ] for coords [0, 3] when the yBoundary is 3 and the xBoundary is 4", () => {
      expect(getAdjacentCoords([0, 3], 3, 4)).toStrictEqual([
        [0, 2],
        [0, 4],
        [1, 2],
        [1, 3],
        [1, 4],
      ]);
    });

    it("returns [ [ 0, 2 ], [ 1, 2 ], [ 1, 3 ] ] for coords [0, 3] when the yBoundary is 3 and the xBoundary is 3", () => {
      expect(getAdjacentCoords([0, 3], 3, 3)).toStrictEqual([
        [0, 2],
        [1, 2],
        [1, 3],
      ]);
    });

    it("returns [ [ 0, 2 ], [0, 3] [ 0, 4 ], [ 1, 2 ], [ 1, 4 ], [ 2, 2 ], [ 2, 2 ], [ 2, 3 ], [ 2, 4 ] ] for coords [1, 3] when the yBoundary is 3 and the xBoundary is 4", () => {
      expect(getAdjacentCoords([1, 3], 3, 4)).toStrictEqual([
        [0, 2],
        [0, 3],
        [0, 4],
        [1, 2],
        [1, 4],
        [2, 2],
        [2, 3],
        [2, 4],
      ]);
    });

    it("returns [ [ 0, 1 ], [1, 0] [ 1, 1 ] ] for coords [0, 0] when the yBoundary is 3 and the xBoundary is 3", () => {
      expect(getAdjacentCoords([0, 0], 3, 3)).toStrictEqual([
        [0, 1],
        [1, 0],
        [1, 1],
      ]);
    });

    it("returns [ [ 0, 2 ], [1, 2] [ 1, 3 ] ] for coords [0, 3] when the yBoundary is 3 and the xBoundary is 3", () => {
      expect(getAdjacentCoords([0, 3], 3, 3)).toStrictEqual([
        [0, 2],
        [1, 2],
        [1, 3],
      ]);
    });

    it("returns [ [ 2, 0 ], [2, 1] [ 3, 1 ] ] for coords [3, 0] when the yBoundary is 3 and the xBoundary is 3", () => {
      expect(getAdjacentCoords([3, 0], 3, 3)).toStrictEqual([
        [2, 0],
        [2, 1],
        [3, 1],
      ]);
    });

    it("returns [ [ 2, 2 ], [2, 3] [ 3, 2 ] ] for coords [3, 3] when the yBoundary is 3 and the xBoundary is 3", () => {
      expect(getAdjacentCoords([3, 3], 3, 3)).toStrictEqual([
        [2, 2],
        [2, 3],
        [3, 2],
      ]);
    });

    it("returns [ [ 0, 0 ], [ 0, 1 ], [ 0, 2 ], [ 1, 0 ], [ 1, 2 ], [ 2, 0 ], [ 2, 1], [ 2, 2 ] ] for coords [1, 1] when the yBoundary is 3 and the xBoundary is 3", () => {
      expect(getAdjacentCoords([1, 1], 3, 3)).toStrictEqual([
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 0],
        [1, 2],
        [2, 0],
        [2, 1],
        [2, 2],
      ]);
    });

    it("returns [ [ 0, 1 ], [1, 0], [1, 1] ] for coords [0, 0] when the yBoundary is 3 and the xBoundary is 3", () => {
      expect(getAdjacentCoords([0, 0], 3, 3)).toStrictEqual([
        [0, 1],
        [1, 0],
        [1, 1],
      ]);
    });

    it("returns [ [ 0, 2 ], [1, 2], [ 1, 3 ] ] for coords [0, 3] when the yBoundary is 3 and the xBoundary is 3", () => {
      expect(getAdjacentCoords([0, 3], 3, 3)).toStrictEqual([
        [0, 2],
        [1, 2],
        [1, 3],
      ]);
    });

    it("returns [ [ 2, 0 ], [2, 1], [ 3, 1 ] ] for coords [3, 0] when the yBoundary is 3 and the xBoundary is 3", () => {
      expect(getAdjacentCoords([3, 0], 3, 3)).toStrictEqual([
        [2, 0],
        [2, 1],
        [3, 1],
      ]);
    });

    it("returns [ [2, 2], [2, 3] [ 3, 2 ] ] for coords [3, 3] when the yBoundary is 3 and the xBoundary is 3", () => {
      expect(getAdjacentCoords([3, 3], 3, 3)).toStrictEqual([
        [2, 2],
        [2, 3],
        [3, 2],
      ]);
    });

    it("returns [ [ 0, 1 ], [ 0, 1 ], [0, 2], [ 1, 0 ], [ 1, 2 ], [2,0], [ 2, 1], [2,2] ] for coords [1, 1] when the yBoundary is 3 and the xBoundary is 3", () => {
      expect(getAdjacentCoords([1, 1], 3, 3)).toStrictEqual([
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 0],
        [1, 2],
        [2, 0],
        [2, 1],
        [2, 2],
      ]);
    });

    it("returns [ [ 0, 0 ], [0,1], [ 1, 1 ], [ 2, 0 ], [2,1] ] for coords [1, 0] when the yBoundary is 3 and the xBoundary is 3", () => {
      expect(getAdjacentCoords([1, 0], 3, 3)).toStrictEqual([
        [0, 0],
        [0, 1],
        [1, 1],
        [2, 0],
        [2, 1],
      ]);
    });

    it("returns [ [ 0, 0 ], [ 0, 2 ], [1, 0], [ 1, 1 ], [1,2] ] for coords [0, 1] when the yBoundary is 3 and the xBoundary is 3", () => {
      expect(getAdjacentCoords([0, 1], 3, 3)).toStrictEqual([
        [0, 0],
        [0, 2],
        [1, 0],
        [1, 1],
        [1, 2],
      ]);
    });

    it("returns [ [0, 2], [ 0, 3 ], [ 1, 2 ], [2, 2], [ 2, 3 ] ] for coords [1, 3] when the yBoundary is 3 and the xBoundary is 3", () => {
      expect(getAdjacentCoords([1, 3], 3, 3)).toStrictEqual([
        [0, 2],
        [0, 3],
        [1, 2],
        [2, 2],
        [2, 3],
      ]);
    });

    it("returns [ [2, 0], [ 2, 1 ], [2, 2], [ 3, 0 ], [ 3, 2 ] ] for coords [3, 1] when the yBoundary is 3 and the xBoundary is 3", () => {
      expect(getAdjacentCoords([3, 1], 3, 3)).toStrictEqual([
        [2, 0],
        [2, 1],
        [2, 2],
        [3, 0],
        [3, 2],
      ]);
    });
  });

  describe("optimizeForklifts A", () => {
    it("returns 13 for testInputA.txt", () => {
      const data = extractArrayFromTxtFile("day/4", "testInputA.txt");

      expect(optimizeForklifts(data)).toBe(13);
    });
  });

  describe("optimizeForklifts B", () => {
    it("returns 43 for testInputA.txt", () => {
      const data = extractArrayFromTxtFile("day/4", "testInputA.txt");

      expect(optimizedForklifePath(data)).toBe(43);
    });
  });
});
