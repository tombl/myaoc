Parse ← ⊃(=@S|=@^)⊜∘⊸≠@\n
Solve ← (
  ⍥⬚0(
    ×⊸⊙¬+⊸⍜(⊢⍉⊚|+₁)        # propagate beams downwards
    ×◡⊙⍜(⊢⍉⊚|-₁)           # locate active splitters
    ≠0+⍜⊚(⊂≡⊃(+1_1|+1_¯1)) # split beams
  )∞
  /+♭⬚0×⊙⍜(⊢⍉⊚|-₁) # count active splitters
)

&p Solve Parse &fras "/dev/stdin"
