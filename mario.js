let userinputHeight = prompt("Pick a height for the console pyramid: ");
printPyramid(userinputHeight);
// TODO #2
// Take in user input for the height


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
  for (let i = 0; i < height; i++) {
    let lineOfHashes = "";
    for (let o = 0; o < height - i; o++) {
      lineOfHashes = lineOfHashes + " ";
    }
    for (let o = 0; o < i + 1; o++) {
      lineOfHashes = lineOfHashes + "#";
    }
    console.log(lineOfHashes);
  }
}
