// Write a script which generates a random hexadecimal number

let hexadecimal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
let randHex = hexadecimal[Math.floor(Math.random() * 16)];
console.log(randHex);