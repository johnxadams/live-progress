/**
 * 01
 * Create a function to remove duplicates in an array.
 * E.g. when receiving an array like this:
 * [1, 5, 6, 5, 7, 1, 6, 8, 9, 7]
 * the function should return an array without duplicates:
 * [1, 5, 6, 7, 8, 9]
 */

const duplicates = [1, 5, 6, 5, 7, 1, 6, 8, 9, 7];

function removeDuplicates(pV, cV){
   
    if (!pV.includes(cV)){
        pV.push(cV)
    }
    return pV;
}

/**
 * if previousValue does not already contain a number of the currentValue,
 * push(currentValue) to pV
 */


let result = duplicates.reduce(removeDuplicates, []);
console.log(result);