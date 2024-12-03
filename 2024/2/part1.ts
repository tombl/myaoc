#!/usr/bin/env -S deno -A

import { check, input } from "./common.ts";

let count = 0;
for (const item of input) if (check(item)) count++;
console.log(count);
