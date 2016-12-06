'use strict';

let fs = require('fs');

let input = fs.readFileSync('input.txt', 'utf8').split('\n');

let message = '';

for (let i = 0; i < input[0].length; i++) {
    let count = {};
    for (let line of input) {
        if (count[line[i]] !== undefined) {
            count[line[i]]++;
        } else {
            count[line[i]] = 1;
        }
    }
    let sorted = Object.keys(count).sort((a, b) => {
        if (count[a] > count[b]) {
            return -1;
        } else if (count[a] < count[b]) {
            return 1;
        } else {
            return (a < b ? -1 : 1);
        }
    });
    message += sorted[0];
}
console.log(message);
