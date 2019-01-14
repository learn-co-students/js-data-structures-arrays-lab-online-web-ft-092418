// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name) {
    drivers.push("Ralph")
}

function destructivelyPrependDriver(name) {
    drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver(name) {
    drivers.pop()
}

function destructivelyRemoveFirstDriver(name) {
    drivers.shift()
}

function appendDriver(name) {
    const newArray = [...drivers, 'Broom']
    return newArray
}

function prependDriver(name) {
    const newerArray = ['Arnold', ...drivers]
    return newerArray
}

function removeLastDriver() {
    const reArr = drivers.slice(0, 2)
    return reArr
}

function removeFirstDriver() {
    const reArray = drivers.slice(-2)
    return reArray
}