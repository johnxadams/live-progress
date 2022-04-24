// unsolved

// Simple, given a string of words, return the length of the shortest word(s).

function findShort(s){
    let strSplit = s.split(' ');
    for (let i = 0; i < strSplit.length; i++){
       return Math.min(strSplit[i].length)
    }
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"))


