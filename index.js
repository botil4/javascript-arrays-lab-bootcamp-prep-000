const app = "I don't do much."

window.kittens = ["Milo", "Otis", "Garfield"]

function destructlivelyAppendKitten(name) {
  window.kittens = kittens.push(name)
}