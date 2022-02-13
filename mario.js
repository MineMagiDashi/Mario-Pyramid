//let userinputHeight = prompt("Pick a height for the console pyramid: ");
//printPyramid(userinputHeight);



function printPyramid(height) {
  for (let i = 0; i < height; i++) {
    let rowStr = "";
    for (let o = 0; o < height - i; o++) {
      rowStr = rowStr + ".";
    }
    for (let o = 0; o < i + 1; o++) {
      rowStr = rowStr + "#";
    }
    const para = document.createElement("p");
    const node = document.createTextNode(rowStr);
    para.appendChild(node);
    const element = document.getElementById("pyramid");
    element.appendChild(para);
  }
}


function determineHeightAndThenDrawPyramid(){
  let inputVal = document.getElementById("height").value;
  printPyramid(inputVal);
}

let button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("Button clicked.");
  determineHeightAndThenDrawPyramid();
});