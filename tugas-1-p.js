const prompt = require("prompt-sync")();

console.clear();
// Rumus = a - b / (T + c)
console.log("======= Tugas 1 =======");
let a = parseFloat(prompt("Masukkan nilai A: "));
let b = parseFloat(prompt("Masukkan nilai B: "));
let c = parseFloat(prompt("Masukkan nilai C: "));
let ta = parseInt(prompt("Nilai T memiliki rentang nlai dari (°C): "));
let tb = parseInt(prompt("hingga (°C): "));

// dibawah ini hanya untuk test
// let a = 6.78967
// let b = 1020.012
// let c = 233.097
// let ta = 10
// let tb = 75

let T = [];
for (let i = ta; i <= tb; i++) {
  T.push(i);
}

let P = []
let cache;
T.forEach(item => {
    cache = a - (b / (item + c))
    P.push(Math.exp(cache));
})

console.log("Berikut nilai P [suhu:nilai P]");
let hasil = "";

P.forEach((element, index) => {
    let cache = parseFloat(element)
    hasil += `[${T[index]}:${cache.toFixed(4)}]` + "   "
})

console.log(hasil)