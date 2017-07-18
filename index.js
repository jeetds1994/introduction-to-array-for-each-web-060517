// Add your doToElementsInArray() function here:
function doToElementsInArray(arr, callback){
  arr.forEach(callback)
}

// Add your changeCompletely() function here:
function changeCompletely(element, index, arr){
  arr[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${arr[index]}s!!!`;
}
