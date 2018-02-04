const app = "I don't do much."

window.kittens = ["Milo", "Otis", "Garfield"]

function kittens() {
  var kittens = ["Milo", "Otis", "Garfield"]
  return kittens
}

function destructlivelyAppendKitten(name) {
  kittens = kittens.push(name)
}