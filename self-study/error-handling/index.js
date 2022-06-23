const firstDiv = document.querySelector(".first-div");
const secondDiv = document.querySelector(".second-div");
const thirdDiv = document.querySelector(".third-div");

// prompt("Type your name")

function changeFirstDivBgColor(element, color) {
  element.style.backgroundColor = color;
}
changeFirstDivBgColor(firstDiv, "red");

function changeSecondDivBgColor(element, color) {
  element.style.backgroundColor = color;
}

/**
 * try{
        * I can call the falsy:Function inside ~try{}
 * } catch(e) {
 *  console.log(e); //simple errr message
 *  console.dir(e); // error message expanded: console.dir()
 * } finally {
        * inside finally{} I have the
        * oppertunity to write code,
        * that is always going to run. 
 *   console.log(20); 
        * 20 is going to appear in console.log 
        * noMatter what. Even if the falsy:Function is fixed.
}
 */

try {
  changeSecondDivBgColor(secondDivs, "blue");
} catch (e) {
  console.dir(e); //simple err message
  console.error(e) // throws an RED error message
} finally {
  console.log(20);
}

function changeThirdDivBgColor(element, color) {
  element.style.backgroundColor = color;
}
changeThirdDivBgColor(thirdDiv, "violet");
