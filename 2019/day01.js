const fs = require("fs");

const input = fs.readFileSync("2019/day01-input.txt").toString().split("\n");
const masses = input;

function getFuelForMass(x) {
    return Math.floor(x / 3) - 2;
}

const fuel = input.map(getFuelForMass).filter((x) => x >= 0);
const totalFuel = fuel.reduce((a, b) => a + b);

console.log(totalFuel);

function getRecFuelForMass(x) {
    const currFuel = Math.floor(x / 3) - 2;
    return currFuel < 0
        ? 0
        : currFuel + getRecFuelForMass(currFuel);
}

const recFuel = input.map(getRecFuelForMass);
const totalRecFuel = recFuel.reduce((a, b) => a + b);

console.log(totalRecFuel);
