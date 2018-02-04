const app = "I don't do much."

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}
kittens = ["Milo", "Otis", "Garfield"]
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveLastKitten() {
  kittens.pop()
}
kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveFirstKitten() {
  kittens.shift()
}
kittens = ["Milo", "Otis", "Garfield"]
function appendKitten(name) {
  var kittensNew = [...kittens, name]
  return kittensNew
}
kittens = ["Milo", "Otis", "Garfield"]
function prependKitten(name) {
  var kittensNew = [name, ...kittens]
  return kittensNew
}
kittens = ["Milo", "Otis", "Garfield"]
function removeLastKitten() {
  var kittensNew = kittens.slice(-1)
  return kittensNew
}
kittens = ["Milo", "Otis", "Garfield"]
function removeFirstKitten() {
  var kittensNew = kittens.slice()
  return kittensNew
}


