# Rock Paper Scissors

A rock paper scissors game played in the console, as part of The Odin Project Foundations curriculum.

**Live demo:** https://olamide-aa.github.io/odin-project/rock-paper-scissors/

## Overview

The player picks rock, paper, or scissors and plays against a randomly chosen computer selection. The game runs five rounds and reports a winner at the end.

## What I Practiced

- Functions, parameters, and return values
- Conditional logic and comparison
- Generating and constraining random numbers
- Handling and normalising user input
- Reading values from the browser console

## Notes

## Notes

Normalising user input took longer than expected. Calling `toLowerCase()` on the input appeared to do nothing, since strings in JavaScript are immutable and the method returns a new string rather than modifying the original. Reassigning the variable to the returned value resolved it.
