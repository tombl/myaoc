#!/usr/bin/env -S deno -A

const SEARCH = "XMAS";

const input = (await Deno.readTextFile("/dev/stdin"))
  .trim()
  .split("\n")
  .map((l) => l.split(""));

type Direction = (i: number, j: number, k: number) => string | undefined;

function* entries(direction: Direction) {
  for (let i = 0; i < input.length; i++) {
    outer: for (let j = 0; j < input[i].length; j++) {
      let got = "";
      for (let k = 0; k < SEARCH.length; k++) {
        const item = direction(i, j, k);
        if (item === undefined) continue outer;
        got += item;
      }
      yield got;
      yield got.split("").reverse().join("");
    }
  }
}

const rows: Direction = (i, j, k) => input[i]?.[j + k];
const columns: Direction = (i, j, k) => input[i + k]?.[j];
const diagUp: Direction = (i, j, k) => input[i + k]?.[j + k];
const diagDown: Direction = (i, j, k) => input[i + k]?.[j - k];

let count = 0;
for (const direction of [rows, columns, diagUp, diagDown]) {
  for (const entry of entries(direction)) {
    if (entry === SEARCH) count++;
  }
}
console.log(count);
