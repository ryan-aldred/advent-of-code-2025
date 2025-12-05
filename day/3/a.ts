import { extractArrayFromTxtFile } from "../../utils/fileReader";

export function extractMaxJoltage(input: string) {
  const inputArr = input.split("");
  let maxJoltage = 0;

  for (let i = 0; i < inputArr.length - 1; i++) {
    for (let j = i + 1; j < inputArr.length; j++) {
      const currentNumber = Number(inputArr[i] + inputArr[j]);

      if (currentNumber > maxJoltage) {
        maxJoltage = currentNumber;
      }
    }
  }

  return maxJoltage;
}

export function calculateMaxJoltage(input: string[] | undefined) {
  if (!input) throw new Error("input is undefined");
  return input
    .map((value) => extractMaxJoltage(value))
    .reduce((prev, curr) => {
      return prev + curr;
    }, 0);
}

const data = extractArrayFromTxtFile("day/3", "input.txt");

console.log(calculateMaxJoltage(data));
