# Calculator

An on-screen calculator built with vanilla JavaScript.

**Live demo:** https://olamide-aa.github.io/odin-project/calculator/

## Features

- Add, subtract, multiply, and divide
- Multi-digit and decimal input (one decimal point per number)
- Chained operations: `12 + 7 - 1` evaluates step by step without pressing `=`
- Typing a digit after `=` starts a new calculation
- Friendly message when dividing by zero
- Clear and backspace buttons

## What I Learned

- Keeping one source of truth for state so variables and the display can't drift apart
- Using guard clauses to handle empty input and errors before doing any math
- Separating pure calculation logic from code that updates the page
- Avoiding JavaScript type coercion traps like `Number("")` being `0` and `"1" + 2` being `"12"`
- Testing edge cases by trying to break the app: double operators, `=` first, decimals after a result

## Built With

HTML, CSS, JavaScript
