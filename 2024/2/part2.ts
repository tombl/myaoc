#!/usr/bin/env -S deno -A

import { check, input } from "./common.ts";

console.log(
  input.filter((report) => {
    const variations = report.map((_value, index) => [
      ...report.slice(0, index),
      ...report.slice(index + 1),
    ]);
    variations.push(report);
    return variations.some(check);
  }).length,
);
