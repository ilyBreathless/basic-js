

module.exports = function createDreamTeam(mas) {
    let resStrUns = []
    let nospacesStr = []
    if(!(Array.isArray(mas))) {
      return false
  }
  
  for (let i = 0; i < mas.length; i++){
      if (typeof mas[i] == 'string') {
          nospacesStr = mas[i].trim()
          resStrUns.push(nospacesStr[0].toUpperCase())
      }
      }
  return resStrUns.sort().join('')
};
