

module.exports = function transform(arr) {
 if (!Array.isArray(arr)) {
        throw new Error('argument is not array');
    }

    let cloneArr = [...arr]
    let [lastIndex, length] = [cloneArr.length - 1, cloneArr.length]
    let resArr = []

    let sequences = [
        '--discard-next',
        '--discard-prev',
        '--double-next',
        '--double-prev',
    ]
    let isEmp = '--empty'
    let specialValues = [...sequences,isEmp]

    for (let i = 0; i < length; i++) {
        let curr = cloneArr[i]
        if (!specialValues.includes(curr)) {
          resArr.push(curr)
            continue
        }
        switch (curr) {
            case '--discard-next':
                if (i>= lastIndex) {
                    continue
                }
                else {
                    cloneArr[i+1] = isEmp
                }
                break;
            case '--discard-prev':
                if ((i ==0) || (cloneArr[i-1] == isEmp)) {
                    continue
                }
                else {
                    resArr.pop()
                }
                break;
            case '--double-next':
                if (i >= lastIndex) {
                    continue
                }
                else
                {
                    resArr.push(cloneArr[i+1])
                }
                break;
            case '--double-prev':
                if ((i == 0) || (cloneArr[i-1] == isEmp)) {
                   continue
                }
                else {
                    resArr.push(cloneArr[i-1])
                }
                break;
            case isEmp:
                continue
                break;
        }
    }
    return resArr
};
