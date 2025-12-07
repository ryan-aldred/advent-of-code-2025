import { extractArrayFromTxtFile } from "../../utils/fileReader";

export function optimizeForklifts(input: string[] | undefined) {
  if (!input) throw new Error("No input");
  const yBoundary = input.length - 1;
  let movableRolls = 0;

  for (let i = 0; i < input.length; i++) {
    const currentLine = input[i].split("");

    for (let j = 0; j < currentLine.length; j++) {
      const xBoundary = currentLine.length - 1;

      if (currentLine[j] === "@") {
        const adjacentCoords = getAdjacentCoords([i, j], yBoundary, xBoundary);

        let adjacentRolls = 0;

        for (let k = 0; k < adjacentCoords.length; k++) {
          const [currY, currX] = adjacentCoords[k];
          if (input[currY][currX] === "@") {
            adjacentRolls++;
          }
        }
        if (adjacentRolls < 4) {
          movableRolls++;
        }
      }
    }
  }

  return movableRolls;
}

export function getAdjacentCoords(
  coords: [number, number],
  yBoundary: number,
  xBoundary: number
) {
  const [y, x] = coords;
  const eligibleCoords: [number, number][] = [];

  for (let i = y - 1; i <= y + 1; i++) {
    for (let j = x - 1; j <= x + 1; j++) {
      if (i === y && j === x) {
        continue;
      }
      eligibleCoords.push([i, j]);
    }
  }

  // filter out ineligible coords and return
  return eligibleCoords.filter(([currY, currX]) => {
    if (currY < 0 || currY > yBoundary || currX < 0 || currX > xBoundary) {
      return false;
    }

    return true;
  });
}

const data = extractArrayFromTxtFile("day/4", "input.txt");

console.log(optimizeForklifts(data));
