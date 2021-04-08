//  foreach
function myForEach(list, cbfxn) {
  for (let i = 0; i < list.length; i++) {
    cbfxn(list[i], i, list)
  }
}

// map
function myMap(list, cbfxn) {
  let returnArray = []
  for (let i = 0; i < list.length; i++) {
    returnArray.push(cbfxn(list[i], i, list))
  }
  return returnArray
}

//filter
function myFilter(list, cbfxn) {
  let returnArray = []
  for (let i = 0; i < list.length; i++) {
    if (cbfxn(list[i])) {
      returnArray.push(list[i])
    }
  }
  return returnArray
}

// find
function myFind(list, cbfxn) {
  for (let i = 0; i < list.length; i++) {
    if (cbfxn(list[i])) {
      return list[i]
    }
  }
  return undefined
}

// random
function myRandom(min = 0, max) {
  let randomInt = (new Date().getTime() * Math.PI) % max
  if (randomInt < min) {
    randomInt = myRandom(min, max)
  }
  return Math.floor(randomInt)
}

// range
function myRange(start, end) {
  const length = end - start
  return Array.from({
    length
  }, (_i, i) => start + _i)
}

// extend
function myExtend(destination, sources) {
  let args = [...arguments]
  let newObject
  for (let i = 0; i < arguments.length; i++) {
    newObject = {
      ...newObject,
      ...args[i]
    }
  }
  return newObject
}


// times
function myTimes(n, cbfxn) {
  let values = []
  for (let i = 0; i <= n; i++) {
    values.push(cbfxn())
  }
  return values
}

// constant
function constant(value) {
  let fxn = (value) =>
    return value
}