

let sumMix = ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']

//this works
// let result = sumMix.reduce((curr, val) => {
//     // console.log(val, curr)
    
//     return Number(curr) + Number(val);
// },0)
// // sumMix(sumMixx)

// let result2 = sumMix.reduce((curr,val) => Number(curr) + Number(val))
// console.log(result2)


// function sumMix(x){
//     let result2 = 0;
//     for(let nr of x){
//         result2 += nr
//     } 
//     return result2;
// }

// function sumMix(x){
//     let result = 0;
//     for (let n of x) {
//       result += parseInt(n);
//     }
//     return result;
//   }



//Using Number() methode, can transform a string Nr '32' into Number 32.

// let str  =  "32";
// console.log(parseFloat(str))

//this not working
// function sumMix(x){
//     return x.reduce((curr, val) => Number(val) + Number(curr), 0)
// }


// function sumMix(x){
//     return x.reduce((curr, val) => { 
//         return Number(curr) + val;
//     },0);


// console.log(sumMix(sumMix))

// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript