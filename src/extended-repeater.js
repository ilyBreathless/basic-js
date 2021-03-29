
module.exports = function repeater(str, options) {
    let resStr = ''
    let {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options
    let Str = String(str)
     for (let i = 0; i < repeatTimes; i++) {
        resStr += Str
         for (let j = 0; j < additionRepeatTimes; j++) {
             resStr += addition

             if (j < additionRepeatTimes - 1) {
              resStr += additionSeparator
             }
           
         }
      
         if (i < repeatTimes -1) {
             resStr += separator
         }
    }
    return resStr
};
  
