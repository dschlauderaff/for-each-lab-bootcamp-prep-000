function iterativeLog(array){
  array.forEach(logger)
}

function logger(element, index, array){
  console.log(`${index}: ${element}`)
}

function iterate(callback){
  newArray = ["cat", "dog", "bird"]
  newArray.forEach(callback)
  return newArray
}

function doToArray(array, callback){
  array.forEach(callback)
}

