const reverseString = function(string) {
 let a = string.length;
 let finalstr = '';
 for(let i = a -1 ; i >= 0 ; i--){
    finalstr += string[i] ;
 }
 return finalstr;
};

// Do not edit below this line
module.exports = reverseString;
