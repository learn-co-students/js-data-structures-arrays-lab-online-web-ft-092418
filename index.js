// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  let copy = drivers.slice()
  copy.push(name)
  return copy
}

function prependDriver(name) {
  let copy = drivers.slice()
  copy.unshift(name)
  return copy
}

function removeLastDriver() {
  let copy = drivers.slice(0, -1)
  return copy
}
function removeFirstDriver() {
   let copy = drivers.slice(1)
   return copy
}
