// unsolved

// Simple, given a string of words, return the length of the shortest word(s).

function findShort(s){
    let strSplit = s.split(' ');
    let lengths = [];
    for (let i = 0; i < strSplit.length; i++){
       lengths.push(strSplit[i].length);
    }
    let minimum = Infinity;
    for (let i = 0; i < lengths.length; i++){
        if (lengths[i] < minimum){
            minimum = lengths[i];
        }
    }
    return minimum;
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"))


//other options

// function findShort(s){
//     return Math.min.apply(null, s.split(' ').map(w => w.length));
//   }

// function findShort(s){
// return Math.min(...s.split(" ").map (s => s.length));
// }

// function findShort(s){
//     var arr = s.split(' ');
//     var smallest = arr[0];
//     for (var i = 0; i < arr.length; i++) {
//       if(arr[i].length < smallest.length){
//         smallest = arr[i];
//       }
//     }
//     return smallest.length;
//   }

