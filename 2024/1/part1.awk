#!/usr/bin/env -S awk -f

{
    split($0, fields, "   ");
    input1[++i1] = fields[1];
    input2[++i2] = fields[2];
}

END {
    asort(input1);
    asort(input2);

    result = 0;
    for (i = 1; i <= length(input1); i++) {
        result += abs(input1[i] - input2[i]);
    }
    print result
}

function abs(x) {
    return x < 0 ? -x : x;
}
