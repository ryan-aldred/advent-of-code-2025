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

// console.log(optimizeForklifts(data));

export function optimizedForklifePath(data: string[] | undefined) {
  if (!data) throw new Error("no input");
  let input = data.map((line) => line.split(""));
  const yBoundary = input.length - 1;
  let movableRolls = 0;
  let rollsMovedThisLoop = 0;
  let keepIterating = true;

  while (keepIterating) {
    input.forEach((val) => console.log(val));
    let movableRollCoords: [number, number][] = [];

    for (let i = 0; i < input.length; i++) {
      const line = input[i];
      const xBoundary = line.length - 1;

      for (let j = 0; j < line.length; j++) {
        const currentValue = input[i][j];

        if (currentValue === "@") {
          let adjacentRolls = 0;
          const adjacentCoords = getAdjacentCoords(
            [i, j],
            yBoundary,
            xBoundary
          );

          adjacentCoords.forEach(([coorY, coorX]) => {
            if (input[coorY][coorX] === "@") {
              adjacentRolls++;
            }
          });

          if (adjacentRolls < 4) {
            movableRolls++;
            rollsMovedThisLoop += adjacentRolls;
            movableRollCoords.push([i, j]);
          }
        }
      }
    }

    movableRollCoords.forEach(([currY, currX]) => {
      input[currY][currX] = ".";
    });

    if (rollsMovedThisLoop > 0) {
      rollsMovedThisLoop = 0;
    } else {
      keepIterating = false;
    }
  }
  return movableRolls;
}

console.log(optimizedForklifePath(data));
