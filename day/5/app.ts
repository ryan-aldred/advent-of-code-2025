import { extractArrayFromTxtFile } from "../../utils/fileReader";

export function countFreshIngredients(input: string[] | undefined) {
  if (!input) throw new Error("No input");

  const seperator = input.indexOf("");

  if (seperator === -1) throw new Error("unable to local seperator");

  const freshRanges = input
    .slice(0, seperator)
    .map((range) => range.split("-"))
    .map(([a, b]) => [Number(a), Number(b)]);
  const ingredientIds = input.slice(seperator + 1).map((id) => Number(id));
  let freshIngredients = 0;

  for (let i = 0; i < ingredientIds.length; i++) {
    for (let j = 0; j < freshRanges.length; j++) {
      if (
        ingredientIds[i] >= freshRanges[j][0] &&
        ingredientIds[i] <= freshRanges[j][1]
      ) {
        freshIngredients++;
        break;
      }
    }
  }

  return freshIngredients;
}

const data = extractArrayFromTxtFile("day/5", "input.txt");

console.log(countFreshIngredients(data));
