const repeatString = function (string, num) {
  let a = parseInt(num);
  let repeatedString = "";
  if (a < 0) {
    repeatedString = "ERROR";
    return repeatedString;
  } 
  else {
    for (let i = 0; i < a; i++) {
      repeatedString = repeatedString + string;
    }
    return repeatedString;
  }
};

// Do not edit below this line
module.exports = repeatString;
