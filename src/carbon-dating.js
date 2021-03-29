const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity = 'no-value') {
  if (sampleActivity == 'no-value') return false
  if (typeof sampleActivity !== 'string') return false
  
    const sampleActivityNumeric = parseFloat(sampleActivity)
    
    if (isNaN(sampleActivityNumeric)) return false
    if (sampleActivityNumeric > modernActivity) return false
    if (sampleActivityNumeric == 0 || sampleActivityNumeric < 0) return false
  
    const k = Math.LN2 / HALF_LIFE_PERIOD
    return Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivityNumeric) / k)
};
