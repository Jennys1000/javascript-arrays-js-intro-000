var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(chocolateBars, reeses) {
[reeses, ...chocolateBars]
return chocolateBars
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, reeses) {
 chocolateBars.unshift(reeses)
 return chocolateBars
}
