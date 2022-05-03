// function DNAStrand(dna){
//     //your code here
//     for (let i = 0; i < dna.length; i++){
//         if (dna[i] === 'A'){
//             return dna.replace(/A/, "T");
//         } else if (dna[i] === 'T'){
//             return dna.replace(/T/, "A");
//         } else if (dna[i] === 'C'){
//             return dna.replace(/C/, "G");
//         } else if (dna[i] === 'G'){
//             return dna.replace(/G/, "C");
//         }
//     }
//   }
// function DNAStrand(dna){
//     //your code here
    
//     dna.replace(/A/g, "T");
//     dna.replace(/T/g, "A");
//     dna.replace(/C/g, "G");
//     dna.replace(/g/g, "c");
//   }

// console.log(DNAStrand("AA"))

// let string = "quick_brown_fox";
// let newString = string.replace(/_/g, "-");
// console.log(newString)

// A = T
// G = C


// splice is also an idea
/**
 * if string includes A
 * splice
 */



 function DNAStrand(dna){
    let sequence = {
      "A": "T",
      "T": "A",
      "G": "C",
      "C": "G"
    }
    return dna.replace(/A|T|G|C/g, function(matched){
      return sequence[matched];
    });
  }
// matched becomes a variable. it stand for "A" "T" "G" "C" keys in the sequence.

  console.log(DNAStrand("ATAT"))




//   function DNAStrand(dna){
//     //your code here
//     var result= "";
//         for(var i =0; i<dna.length; i++) 
//         {
//           if (dna[i]==="A") 
//          {
//           result +="T";
//          }
//           else if (dna[i]==="T") 
//          {
//           result += "A";
//           }
//           else if (dna[i]==="C")
//           {
//           result +="G";
//           }
//           else if (dna[i]==="G")
//           {
//           result += "C";
//           }
//           else {
//           result +=dna[i];
//           }
//        }
//        return result;
//     }





//     var pairs = {'A':'T','T':'A','C':'G','G':'C'};

// function DNAStrand(dna){
//   return dna.split('').map(function(v){ return pairs[v] }).join('');
// }





// function DNAStrand(dna){
//     var code = {
//       'A': 'T',
//       'T': 'A',
//       'C': 'G',
//       'G': 'C'
//     }
//     return dna.split('').map(function(i) { return code[i] }).join('')
//   }




//   https://www.codewars.com/kata/554e4a2f232cdd87d9000038/solutions/javascript