'use strict';

let fs = require('fs');

let input = fs.readFileSync('input.txt', 'utf8').split('\n');

let idSum = 0;

for (let line of input) {
    let parts = line.split('-');
    let name = parts.slice(0, parts.length - 1);
    name = name.join('');
    let id = parts[parts.length - 1].split('[')[0];
    let checksum = parts[parts.length - 1].split('[')[1];
    checksum = checksum.substring(0, checksum.length - 1);

    let count = {};
    for (let letter of name) {
        if (count[letter] !== undefined) {
            count[letter]++;
        } else {
            count[letter] = 1;
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
    if (checksum === sorted.slice(0, 5).join('')) {
        idSum += parseInt(id);
    }
}
console.log(idSum);
