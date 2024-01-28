const removeFromArray = function (arr, ...args) {
  for (const value of args) {
    while (arr.includes(value)) {
      let index2BRemoved = arr.indexOf(value);
      if (index2BRemoved !== -1) {
        arr.splice(index2BRemoved, 1);
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
