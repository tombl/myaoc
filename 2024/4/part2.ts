#!/usr/bin/env -S deno -A

const input = (await Deno.readTextFile("/dev/stdin"))
  .trim()
  .split("\n")
  .map((l) => l.split(""));

let count = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    const word1 = input[i - 1]?.[j - 1] + input[i]?.[j] + input[i + 1]?.[j + 1];
    const word2 = input[i - 1]?.[j + 1] + input[i]?.[j] + input[i + 1]?.[j - 1];
    if (
      (word1 === "MAS" || word1 === "SAM") &&
      (word2 === "MAS" || word2 === "SAM")
    ) {
      count++;
    }
  }
}

console.log(count);
