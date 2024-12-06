const input = await Deno.readTextFile("/dev/stdin");
const [order, data] = input.split("\n\n");

export const pairs = order
    .split("\n")
    .map((pair) =>
        pair
            .split("|")
            .map(Number) as [number, number]
    );

export const lines = data
    .split("\n")
    .map((line) =>
        line
            .split(",")
            .map(Number)
    );

export const check = (line: number[]) =>
    pairs.every(([a, b]) => {
        const as = line.flatMap((v, i) => v === a ? [i] : []);
        const bs = line.flatMap((v, i) => v === b ? [i] : []);
        const lastA = Math.max(...as);
        const firstB = Math.min(...bs);
        return lastA < firstB;
    });
