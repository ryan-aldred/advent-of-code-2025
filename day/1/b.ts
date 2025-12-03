import { input } from "./input";

export function decodeInput(inputArr: string[]) {
  let lastValue = 50;
  let totalZeros = 0;

  inputArr.forEach((input) => {
    const currentValue = lastValue;
    const direction = input.substring(0, 1);
    const clicks = Number(input.substring(1));

    const fullRotations = Math.floor(clicks / 100);
    totalZeros += fullRotations;

    const remainingClicks = clicks % 100;

    if (direction === "L") {
      lastValue -= remainingClicks;

      if (lastValue < 0) {
        lastValue = 100 - Math.abs(lastValue);
        if (lastValue !== 0 && currentValue !== 0) {
          totalZeros++;
        }
      }
    } else if (direction === "R") {
      lastValue += remainingClicks;

      if (lastValue > 99) {
        lastValue = lastValue - 100;
        if (lastValue !== 0) {
          totalZeros++;
        }
      }
    } else {
      throw new Error(`Direction is neither L nor R - direction:${direction}`);
    }

    if (lastValue === 0) {
      totalZeros++;
    }
  });

  return totalZeros;
}

console.log(decodeInput(input));
