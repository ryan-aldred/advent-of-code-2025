import { extractArrayFromTxtFile } from "../../utils/fileReader";

export function measureMaxJoltage(input: string, requiredJolts: number) {
  let inputs = input.split("").map((input) => Number(input));
  const maxJoltage: number[] = [];

  let currentMax = 0;
  let currentMaxIndex = 0;

  while (maxJoltage.length < requiredJolts) {
    for (
      let i = 0;
      i <= inputs.length - requiredJolts + maxJoltage.length;
      i++
    ) {
      if (inputs[i] === 9) {
        currentMax = 9;
        currentMaxIndex = i;
        break;
      }

      if (inputs[i] > currentMax) {
        currentMax = inputs[i];
        currentMaxIndex = i;
      }
    }

    maxJoltage.push(currentMax);
    currentMax = 0;
    inputs = inputs.slice(currentMaxIndex + 1);
  }
  return Number(maxJoltage.join(""));
}

export function calculateMaxJoltage(
  input: string[] | undefined,
  requiredJolts: number
) {
  if (!input) throw new Error("input is undefined");

  return input
    .map((value) => measureMaxJoltage(value, requiredJolts))
    .reduce((prev, curr) => {
      return prev + curr;
    }, 0);
}

const data = extractArrayFromTxtFile("day/3", "input.txt");

console.log(calculateMaxJoltage(data, 12));
