function add(x, y) {
  return x + y
}

function sub(x, y) {
  return x - y
}

function mul(x, y) {
  return x * y
}

function identity(val) {
  return val
}

function identityf(val) {
  return () => {
    return val
  }
}

function addf(x) {
  return (y) => {
    return x + y
  }
}

function liftf(fxn) {
  return (x) => {
    return (y) => {
      return fxn(x, y)
    }
  }
}

function curry(fxn, x) {
  return (y) => {
    return fxn(x, y)
  }
}

function twice(fxn) {
  return (x) => {
    return fxn(x, x)
  }
}

function reverse(fxn) {
  return (x, y) => {
    return fxn(y, x)
  }
}

function composeu(fxn, ffxn) {
  return (x) => {
    return ffxn(fxn(x))
  }
}

function composeb(fxn, ffxn) {
  return (x, y, z) => {
    return ffxn(z, fxn(x, y))
  }
}

function limit(fxn, limit) {
  count = 0
  return (x, y) => {
    if (count < limit) {
      count++
      return fxn(x, y)
    }
    return
  }
}

function from(start) {
  return () => {
    return start++
  }
}

function to(fxn, end) {
  return () => {
    let value = fxn()
    if (value < end) {
      return value
    }
    return
  }
}

function fromTo(min, max) {
  return to(from(min), max)
}

function element(array, gen) {
  if (gen === undefined) {
    gen = fromTo(0, array.length)
  }
  return function() {
    return array[gen()]
  }
}

function collect(fn, ar) {
  return function() {
    x = fn()
    if (x !== undefined) {
      ar.push(x)
    }
    return x
  };
}


// examples

function outer() {
  let outerVar = 'outervar'

  function inner() {
    console.log(outerVar)
  }
  return inner
}

let testFxn = outer()

testFxn()