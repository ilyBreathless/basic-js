const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    maxDepth = 0
    currDepth = 0
    calculateDepth(arr) {
        this.currDepth++
        if (arr.length > 0) {
            for (let i = 0; i < arr.length; i++)
            {
                let el = arr[i]
                if (Array.isArray(el)) {
                    this.calculateDepth(el)
                }
            }
        }

        if (this.currDepth > this.maxDepth) {
            this.maxDepth = this.currDepth
        }
        this.currDepth--

        if (this.currDepth == 0) {
            const maxDepth = this.maxDepth
             this.maxDepth = 0
             return maxDepth
        }
    }
};
