'use strict';

function longestString(arr) {
  var lgth = 0;
  var longest;


  for(var i=0; i < arr.length; i++){
    var elem = arr[i]
    if(typeof elem === 'string'){
         if (!longest || elem.length > longest.length){
        longest = elem;
    }
}
}
return longest;
}


// return arr.sort(function (a, b) {
//   if (typeof a !== 'string' || typeof b !== 'string'){return 0; }
//   if (a.length > b.length) {retrun 1; }
//   if (b.length > a.length) {retrun -1; }
//   return 0;
// })[0];


module.exports = longestString;
