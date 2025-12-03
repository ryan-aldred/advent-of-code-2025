import { input } from "./input";

export function decodeInput(inputArr: string[]) {
  let lastValue = 50;
  let totalZeros = 0;

  inputArr.forEach((input) => {
    const direction = input.substring(0, 1);
    const clicks = Number(input.substring(1)) % 100;

    if (direction === "L") {
      lastValue -= clicks;

      if (lastValue < 0) {
        lastValue = 100 - Math.abs(lastValue);
      }
    } else if (direction === "R") {
      lastValue += clicks;

      if (lastValue > 99) {
        lastValue = lastValue - 100;
      }
    } else {
      throw new Error(`direction is: ${direction}`);
    }

    if (lastValue === 0) {
      totalZeros++;
    }
  });

  return totalZeros;
}

const totalZeros = decodeInput(input);

console.log("total zeros", totalZeros);
