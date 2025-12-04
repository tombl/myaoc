Parse ← ⊜(=@@)⊸≠@\n
U     ← ⇌⊂×₀⊙⇌°⊂
D     ← ⍜⇌U
L     ← ⍜⍉U
R     ← ⍜⍉D
Solve ← /+♭×<4⊸(/+⊃[U|U R|R|R D|D|D L|L|L U])

&p Solve Parse &fras "/dev/stdin"
