// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

/** 
 * 
*/


function digitize(n) {
    let arr = n.toString(10).replace(/\D/g, '0').split('').map(Number);
    arr.reverse(); 
    return arr
    }
    console.log(digitize(34567)) 



// other solutions

// function digitize(n) {
//     return String(n).split('').map(Number).reverse()
//   }

