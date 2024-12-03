#!/usr/bin/env -S awk -f

BEGIN { enabled = 1 }

{
    while (match($0, /(don't|do|mul)\((([0-9]+),([0-9]+))?\)/, args)) {
             if (args[1] == "don't")          enabled = 0
        else if (args[1] == "do")             enabled = 1
        else if (args[1] == "mul" && enabled) result += args[3] * args[4]
        $0 = substr($0, RSTART + RLENGTH)
    }
}

END { print result }