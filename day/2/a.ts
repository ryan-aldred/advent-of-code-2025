import { input } from "./input";

export function decodeInput(input: string) {
  const idRanges = input.split(",");
  const repeatingNumbers: number[] = [];

  idRanges.forEach((idRange) => {
    const [firstId, lastId] = idRange.split("-").map((id) => Number(id));

    for (let i = firstId; i <= lastId; i++) {
      const iAsStr = i.toString();
      const halfOfStrLength = iAsStr.length / 2;

      const firstHalf = iAsStr.substring(0, halfOfStrLength);
      const lastHalf = iAsStr.substring(halfOfStrLength);

      if (firstHalf === lastHalf) {
        repeatingNumbers.push(i);
      }
    }
  });

  return repeatingNumbers.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
}

console.log(decodeInput(input));
