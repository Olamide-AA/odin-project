# Rock Paper Scissors

A browser-based rock paper scissors game, built as part of The Odin Project Foundations curriculum.

**Live demo:** https://olamide-aa.github.io/odin-project/rock-paper-scissors/

## Overview

The player picks rock, paper, or scissors by clicking a button and plays against a randomly chosen computer selection. The page shows each round's result and the running score, and announces a winner once either side reaches five points.

The game started as a console-only version using `prompt()` and `console.log()`, and was later reworked to use a button-based UI.

## What I Practiced

- Functions, parameters, and return values
- Conditional logic and comparison
- Generating and constraining random numbers
- Handling and normalising user input
- Selecting and updating DOM elements
- Handling click events with event listeners
- Working on a feature branch and merging it into main

## Notes

Normalising user input took longer than expected. Calling `toLowerCase()` on the input appeared to do nothing, since strings in JavaScript are immutable and the method returns a new string rather than modifying the original. Reassigning the variable to the returned value resolved it.
