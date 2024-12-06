#!/usr/bin/env -S deno -A

import { check, lines, pairs } from "./common.ts";

const pair = (a: number, b: number): `${number},${number}` => `${a},${b}`;

const lt = new Set(pairs.map(([a, b]) => pair(a, b)));
const gt = new Set(pairs.map(([a, b]) => pair(b, a)));

console.log(
    lines
        .filter((line) => !check(line))
        .map((line) => {
            line = [...line];
            line.sort((a, b) => {
                if (lt.has(pair(a, b))) return -1;
                if (gt.has(pair(b, a))) return 1;
                return 0; // lmao
            });
            if (!check(line)) throw new Error("oops");
            return line;
        })
        .map((line) => line[Math.floor(line.length / 2)])
        .reduce((acc, v) => acc + v, 0),
);
