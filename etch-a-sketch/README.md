# Etch-a-Sketch

A browser sketchpad built with a grid of divs generated in JavaScript. Move the mouse over the grid to draw.

**Live demo:** https://olamide-aa.github.io/odin-project/etch-a-sketch/

## Features

- Grid generated entirely with JavaScript, no hardcoded squares
- Choose a new grid size (up to 100 × 100) with input validation
- Squares color in as the mouse passes over them
- Grid fits the same container size regardless of how many squares it has

## What I Learned

- Creating and appending elements with `createElement` and `appendChild`
- Using nested loops to build rows and columns
- Laying out rows with Flexbox and fixing sizing with `box-sizing: border-box`
- Event delegation: one listener on the container instead of one per square
- Validating user input from `prompt`, which always returns a string

## Built With

HTML, CSS, JavaScript
