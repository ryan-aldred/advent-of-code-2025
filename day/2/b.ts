import { input } from "./input";

export function decodeInput(input: string) {
  const idRanges = input.split(",");
  const repeatingNumbers: number[] = [];

  idRanges.forEach((idRange) => {
    const [firstId, lastId] = idRange.split("-").map((id) => Number(id));

    for (let i = firstId; i <= lastId; i++) {
      if (sequenceRepeats(i)) {
        repeatingNumbers.push(i);
      }
    }
  });

  return repeatingNumbers.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
}

export function sequenceRepeats(input: number) {
  const inputAsStr = input.toString();
  // get the longest possible sequence for a given number
  const halfOfInputLength = Math.floor(inputAsStr.length / 2);

  // start with the longest possible sequence and look for a repeating
  for (let i = halfOfInputLength; i > 0; i--) {
    if (inputAsStr.length % i === 0) {
      // split the number into ad even number of chunks
      let chunks: string[] = [];
      for (let n = 0; n < inputAsStr.length; n += i) {
        // look for a repeating sequence
        chunks.push(inputAsStr.substring(n, n + i));
      }

      const testChunk = chunks[0];

      chunks = chunks.filter((chunk) => chunk !== testChunk);

      if (chunks.length === 0) {
        return Number(testChunk);
      }
    }
  }
}

console.log(decodeInput(input));
