#!/usr/bin/env -S awk -f

{
    split($0, fields, "   ");
    input1[++i1] = fields[1];
    input2[++i2] = fields[2];
}

END {
    for (i in input1) {
        value = input1[i];
        for (j in input2) {
            if (input2[j] == value) {
                result += value;
            }
        }
    }
    print result
}
