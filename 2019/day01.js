const fs = require("fs");

const input = fs.readFileSync("2019/day01-input.txt").toString().split("\n");

const masses = input;
const fuel = input.map((x) => Math.floor(x / 3) - 2).filter((x) => x >= 0);
const sum = fuel.reduce((a, b) => a + b);


console.log(sum);
