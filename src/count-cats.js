const CustomError = require("../extensions/custom-error");

module.exports = function countCats(a) {
  let count = 0

    for (let i = 0; i < a.length; i++) {
       const colLength = a[i].length
        for (let j = 0; j < colLength; j++) {
            if (a[i][j] == "^^") count++
        }
    }
    return count
};
