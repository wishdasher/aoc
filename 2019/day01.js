const fs = require("fs");

const input = fs.readFileSync("2019/day01-input.txt").toString().split("\n");
const masses = input;

function getFuelForMass(x) {
    return Math.floor(x / 3) - 2;
}

const fuel = input.map(getFuelForMass).filter((x) => x >= 0);
const sum = fuel.reduce((a, b) => a + b);

console.log(sum);
