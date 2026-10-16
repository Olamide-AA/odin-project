let container = document.querySelector(".container");
let setGridBtn = document.querySelector(".btn");

setGridBtn.addEventListener("click", () => {
  let size = +prompt("Enter Grid size");

  if (size > 0 && size <= 100) {
    //Erase previous grid
    container.replaceChildren();

    /*
      Build the grid as rows of squares.
      The outer loop creates each row and appends it to the container.
      The inner loop fills that row with squares, which sit side by side
      because .row uses display: flex.
    */
    for (let i = 0; i < size; i++) {
      let row = document.createElement("div");
      row.classList.add("row");
      container.appendChild(row);
      for (let j = 0; j < size; j++) {
        let square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
      }
    }
  } else {
    alert("Please enter a valid number between 1 and 100");
  }
});
let opacity = 1;
container.addEventListener("mouseover", (event) => {
  let target = event.target;
  opacity -= 0.01;
  if (target.classList.contains("square")) {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    target.style.backgroundColor = `rgb(${r}, ${g}, ${b}, ${opacity})`;
  }
});
