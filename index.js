const app = "I don't do much."
function Arrays() {
  window.kittens = ["Milo", "Otis", "Garfield"]
}

function kittens() {
  var kittens = ["Milo", "Otis", "Garfield"]
  return kittens
}

function destructlivelyAppendKitten(name) {
  names = kittens()
  return names.push(name)
}