Parse     ← ⊜(=@@)⊸≠@\n
U         ← ⇌⊂×₀⊙⇌°⊂
D         ← ⍜⇌U
L         ← ⍜⍉U
R         ← ⍜⍉D
Removable ← ×<4⊸(/+⊃[U|U R|R|R D|D|D L|L|L U])
Solve     ← /+♭-⊸(◌⍢(/+♭⊸≠⟜(×⊸(¬Removable))◌|≠0)1)

&p Solve Parse &fras "/dev/stdin"
