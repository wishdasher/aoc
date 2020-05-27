const fs = require("fs");

const input = fs.readFileSync("2019/day02-input.txt").toString().split("\n");
const masses = input;

function getRecFuelForMass(x) {
    const currFuel = Math.floor(x / 3) - 2;
    return currFuel < 0
        ? 0
        : currFuel + getRecFuelForMass(currFuel);
}

const fuel = input.map(getRecFuelForMass);
const sum = fuel.reduce((a, b) => a + b);

console.log(sum);
