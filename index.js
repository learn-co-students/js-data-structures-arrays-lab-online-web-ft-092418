const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
  let newArr = drivers.push(name);
}

function destructivelyPrependDriver(name) {
  let newArr = drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  let newArr = drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  let newArr = drivers.shift();
}

function appendDriver(name) {
  let newArr = [...drivers, name];
  return newArr;
}

function prependDriver(name) {
  let newArr = [name, ...drivers];
  return newArr;
}

function removeLastDriver() {
  let newArr = drivers.slice(0, -1);
  return newArr;
}

function removeFirstDriver() {
  let newArr = drivers.slice(1);
  return newArr;
}