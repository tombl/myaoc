export const input: number[][] = (await Deno.readTextFile("/dev/stdin"))
  .trim()
  .split("\n")
  .map((line) =>
    line
      .split(" ")
      .map(Number)
  );

export function check(report: number[]) {
  const changes = report
    .slice(1)
    .map((value, index) => value - report[index]);
  return changes.every((c) => -3 <= c && c <= 3) &&
    (changes.every((c) => c > 0) || changes.every((c) => c < 0));
}