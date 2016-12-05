'use strict';

let fs = require('fs');

let input = fs.readFileSync('input.txt', 'utf8').split('\n');

let possibles = 0;

for (let line of input) {
    let sides = line.trim().split('  ');
    for (let side in sides) {
        sides[side] = parseInt(sides[side]);
    }
    if (
        sides[0] < (sides[1] + sides[2]) &&
        sides[1] < (sides[0] + sides[2]) &&
        sides[2] < (sides[1] + sides[0])
    ) {
        possibles++;
    }
}

console.log(possibles);
