#!/usr/bin/env -S awk -f

{
    while (match($0, /mul\(([0-9]+),([0-9]+)\)/, args)) {
        result += args[1] * args[2]
        $0 = substr($0, RSTART + RLENGTH)
    }
}

END { print result }