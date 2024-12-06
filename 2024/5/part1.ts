#!/usr/bin/env -S deno -A

import { check, lines } from "./common.ts";

console.log(
    lines
        .filter(check)
        .map((line) => line[Math.floor(line.length / 2)])
        .reduce((acc, v) => acc + v, 0),
);
