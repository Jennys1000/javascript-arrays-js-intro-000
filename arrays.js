var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(chocolateBars, reeses) {
 return [reeses, ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, reeses) {
return chocolateBars.unshift(reeses)
}

function addElementToEndOfArray(chocolateBars, reeses) {
 return chocolateBars.push(reeses)
}

function destructivelyAddElementToEndOfArray(chocolateBars, reeses) {
  return [chocolateBars, ...reeses]
}
