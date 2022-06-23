// Write a generic function chainer
// Write a generic function chainer that takes a starting value, 
// and an array of functions to execute on it (array of symbols for Ruby).

// The input for each function is the output of the previous function 
// (except the first function, which takes the starting value as its input). 
// Return the final value after execution is complete.
// https://www.codewars.com/kata/54fb853b2c8785dd5e000957/train/javascript




/** function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}

chain(2, [add, mult]);
// returns 90; */

// function add(num) {
    
//     return num + 1;
//   }
//   console.log(add(2))



//   function mult(num) {
//     return num * 30;
//   }
//   console.log(mult(2))



//   function chain(input, fs) {
//     return fs(input) * fs(input)
//     }

// console.log(chain(2,[add(input), mult(input)]))
// //  console.log(chain(add(num), mult(num)))



// function chain(input, fs) {
//     // implement the "chain" function
    
//     function add(num) {
//         return num + 1;
//       }
      
//       function mult(num) {
//         return num * 30;
//       }

//     }

//     chain(2, [add, mult]);






// solution
    // function chain(num, functions) {
    //     return functions.reduce(function (num, fn) {
    //         return fn(num)
    //     }, num);
    // }



    // solution

    // function chain(num,arr){
        // return arr.reduce(function(last,prev){
        //   return prev(last);
        // },num);
        // }